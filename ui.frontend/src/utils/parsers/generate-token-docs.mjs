import { readFile, readdir, writeFile, mkdir } from 'fs/promises'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

async function generateTokenJson() {
   const __filename = fileURLToPath(import.meta.url)
   const __dirname = dirname(__filename)

   const sourceDir = resolve(
      __dirname,
      '../../../src/styles/tokens/auto_source'
   )
   const outputDir = resolve(__dirname, '../../../src/styles/tokens/docs')

   try {
      await mkdir(outputDir, { recursive: true })
   } catch (error) {
      console.log('dir already exists')
   }

   const files = await readdir(sourceDir)
   const jsonFiles = files.filter((file) => file.endsWith('.json'))
   const colorTokens = JSON.parse(
      await readFile(resolve(sourceDir, 'color.json'), 'utf-8')
   )

   function getReferenceInfo(reference) {
      if (
         !reference ||
         typeof reference !== 'string' ||
         !reference.startsWith('{color.')
      ) {
         return { value: reference, hex: reference }
      }

      try {
         const path = reference.replace(/[{}]/g, '').split('.')
         const colorName = path[path.length - 2]
         const shade = path[path.length - 1]
         const displayValue = `${colorName}-${shade}`

         let value = colorTokens
         for (const key of path) {
            value = value[key]
         }

         return {
            value: displayValue,
            hex: value.value,
         }
      } catch (error) {
         return { value: reference, hex: reference }
      }
   }

   function generateTokenRows(obj, prefix = '', result = []) {
      for (const key in obj) {
         const newPrefix = prefix ? `${prefix}-${key}` : key
         if (obj[key]?.value !== undefined) {
            const { value, hex } = getReferenceInfo(obj[key].value)
            result.push({
               tokenName: `$${newPrefix}`,
               value,
               hex,
               type: obj[key].type,
            })
         } else if (obj[key] && typeof obj[key] === 'object') {
            generateTokenRows(obj[key], newPrefix, result)
         }
      }
      return result
   }

   const allTokenData = {}

   for (const jsonFile of jsonFiles) {
      const fileName = jsonFile.replace('.json', '')
      const tokens = JSON.parse(
         await readFile(resolve(sourceDir, jsonFile), 'utf-8')
      )

      const rows = generateTokenRows(tokens)
      allTokenData[fileName] = rows.reduce((acc, row) => {
         const segments = row.tokenName.split('-')
         const group = segments[1] || 'default'
         if (!acc[group]) acc[group] = []
         acc[group].push(row)
         return acc
      }, {})
   }

   const jsonOutputPath = resolve(outputDir, 'token-documentation.json')
   await writeFile(
      jsonOutputPath,
      JSON.stringify(allTokenData, null, 2),
      'utf-8'
   )
   console.log(`JSON documentation exported to: ${jsonOutputPath}`)
}

generateTokenJson().catch(console.error)

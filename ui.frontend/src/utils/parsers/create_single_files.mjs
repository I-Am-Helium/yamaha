import { readFile, writeFile, mkdir } from 'fs/promises'
import { dirname, resolve } from 'node:path/posix'
import { fileURLToPath } from 'url'

// at this point we can keep this here
// but it should become a parser being registered in
// style-dictionary registerParser

async function createSeparateFiles() {
   console.log('Creating separate files for tokens')
   const __filename = fileURLToPath(import.meta.url)
   const __dirname = dirname(__filename)

   const sourceTokensPath = resolve(
      __dirname,
      '../../../src/styles/tokens/source/tokens.json'
   )
   const outputDir = resolve(
      __dirname,
      '../../../src/styles/tokens/auto_source'
   )
   const tokens = JSON.parse(await readFile(sourceTokensPath, 'utf-8'))
   const { color, dimension } = tokens
   const colorCategories = {
      color: {
         color: {
            core: color.core,
         },
      },
      surface: {
         surface: color.surface,
      },
      border: {
         border: { ...color.border, ...dimension.border },
      },
      text: {
         text: color.text,
      },
      content: {
         content: color.content,
      },
      spacing: {
         spacing: dimension.spacing,
      },
      padding: {
         padding: dimension.padding,
      },
      fontsize: {
         fontsize: dimension['font-size'],
      },
   }

   const persistColorCategory = async ([categoryName, categoryTokens]) => {
      console.log(`Processing ${categoryName} category`)
      const fileName = resolve(outputDir, `${categoryName}.json`).toLowerCase()

      const dirName = dirname(fileName)
      try {
         await mkdir(dirName, { recursive: true })
      } catch (e) {
         console.log('dir already exists')
      }
      await writeFile(
         fileName,
         JSON.stringify(categoryTokens, null, 2).toLowerCase(),
         'utf-8'
      )
   }

   // Create separate files for each category
   await Promise.all(Object.entries(colorCategories).map(persistColorCategory))

   console.log('Separate files created successfully')
}

createSeparateFiles().catch(console.error)

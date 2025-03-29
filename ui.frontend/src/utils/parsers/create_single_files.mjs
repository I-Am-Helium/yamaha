import { readFile, writeFile, mkdir } from 'fs/promises'
import { dirname } from 'node:path/posix'
import path from 'node:path'

async function createSeparateFiles() {
   const tokens = JSON.parse(
      await readFile('../../styles/tokens/source/tokens.json', 'utf-8')
   )

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
      const fileName =
         `./../../styles/tokens/auto_source/${categoryName}.json`.toLowerCase()

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
}

createSeparateFiles()

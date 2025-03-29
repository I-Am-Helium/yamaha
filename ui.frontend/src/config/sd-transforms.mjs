import { register, permutateThemes } from '@tokens-studio/sd-transforms'
import StyleDictionary from 'style-dictionary'
import { readFile, writeFile, mkdir } from 'fs/promises'
import { dirname } from 'node:path/posix'

// register(StyleDictionary, {
//    /* options here if needed */
// })

async function createSeparateFiles() {
   const tokens = JSON.parse(
      await readFile('./../styles/tokens/source/tokens.json', 'utf-8')
   )
   const { $themes, ...sets } = tokens

   const persistSet = async ([setName, setTokens]) => {
      console.log({ setName })
      const fileName =
         `./../styles/tokens/auto_source/${setName}.json`.toLowerCase()

      const dirName = dirname(fileName)
      try {
         await mkdir(dirName, { recursive: true })
      } catch (e) {
         // do nothing, dir already exists
      }
      await writeFile(
         fileName,
         JSON.stringify(setTokens, null, 2).toLowerCase(),
         'utf-8'
      )
   }

   // persist sets as multi file in tokens folder
   await Promise.all(Object.entries(sets).map(persistSet))
}

async function run() {
   const tokens = JSON.parse(
      await readFile('./../styles/tokens/source/tokens.json', 'utf-8')
   )
   const { $themes, ...sets } = tokens

   const persistSet = async ([setName, setTokens]) => {
      const fileName = `src/styles/tokens/base/${setName}.json`
      const dirName = dirname(fileName)
      try {
         await mkdir(dirName, { recursive: true })
      } catch (e) {
         // do nothing, dir already exists
      }
      await writeFile(
         fileName,
         JSON.stringify(setTokens, null, 2).toLowerCase(),
         'utf-8'
      )
   }

   // persist sets as multi file in tokens folder
   // await Promise.all(Object.entries(sets).map(persistSet))

   // const configs = Object.entries(sets).map(([name, tokensets]) => ({
   //    source: [`./../styles/tokens/auto_source/${name}.json`],
   //    platforms: {
   //       scss: {
   //          transformGroup: 'tokens-studio',
   //          buildPath: 'src/styles/base/tokens-auto/',
   //          files: [
   //             {
   //                destination: `${name}.scss`,
   //                format: 'scss/variables',
   //                options: {
   //                   outputReferences: true,
   //                },
   //             },
   //          ],
   //       },
   //    },
   // }))

   // async function cleanAndBuild(cfg) {
   // const sd = new StyleDictionary(cfg)
   // await sd.cleanAllPlatforms() // optionally, cleanup files first..
   // await sd.buildAllPlatforms()
   // }

   // await Promise.all(configs.map(cleanAndBuild))
}

// run()
createSeparateFiles()

import { register } from '@tokens-studio/sd-transforms'
import StyleDictionary from 'style-dictionary'
import { readFile, writeFile, mkdir } from 'fs/promises'
import { dirname } from 'node:path/posix'
import fs from 'fs'

// will register them on StyleDictionary object
// that is installed as a dependency of this package.

function removePrimaryLevel() {
   // Read the JSON file
   const filePath = 'src/styles/tokens/source/base.json'
   const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'))

   // Extract the contents from Primary
   const { Primary, Semantics, $themes } = jsonData
   const { core, border, spacing, fontsize } = Primary

   // Create new object without Primary level
   const newJson = {
      core,
      border,
      spacing,
      fontsize,
      Semantics,
      $themes,
      $metadata: {
         tokenSetOrder: ['Semantics'],
      },
   }

   // Write the modified JSON back to file
   fs.writeFileSync(
      filePath,
      JSON.stringify(newJson, null, 3).toLowerCase(),
      'utf8'
   )
}

removePrimaryLevel()

// const sd = new StyleDictionary({
//    // make sure to have source match your token files!
//    // be careful about accidentally matching your package.json or similar files that are not tokens
//    source: ['src/styles/tokens/source/base.json'],
//    preprocessors: ['tokens-studio'], // <-- since 0.16.0 this must be explicit
//    platforms: {
//       scss: {
//          transformGroup: 'tokens-studio',
//          prefix: 'yh',
//          buildPath: 'src/styles/base/tokens-auto/',
//          files: [
//             {
//                destination: `base-simple.scss`,
//                format: 'scss/variables',
//             },
//          ],
//          options: {
//             outputReferences: true,
//          },
//       },
//    },
// })

// await sd.cleanAllPlatforms()
// await sd.buildAllPlatforms()

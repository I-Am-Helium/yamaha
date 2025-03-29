import { globSync } from 'glob'
import StyleDictionary from 'style-dictionary'

const tokenFiles = globSync('./../styles/tokens/auto_source/*.json')

const myStyleDictionary = new StyleDictionary({
   source: tokenFiles,
   platforms: {
      scss: {
         transformGroup: 'scss',
         buildPath: './../styles/tokens/auto_output/',
         files: tokenFiles.map((file) => {
            const relativeFilePath = file
            return {
               destination: relativeFilePath.replace('.json', '.scss'),
               format: 'scss/variables',
               filter: (token) => token.filePath.endsWith(relativeFilePath),
               options: {
                  outputReferences: !file.includes('color'),
               },
            }
         }),
      },
   },
   hooks: {
      transformGroups: {
         scss: ['size/pxToRem'],
      },
   },
})

myStyleDictionary.buildAllPlatforms()

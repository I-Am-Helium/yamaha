import { globSync } from 'glob'
import StyleDictionary from 'style-dictionary'
import { dirname, resolve } from 'node:path/posix'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Resolve paths relative to script location
const sourceDir = resolve(__dirname, '../styles/tokens/auto_source')
const outputDir = resolve(__dirname, '../styles/tokens/auto_output')

// Use resolved path for glob pattern
const tokenFiles = globSync(`${sourceDir}/*.json`)

const myStyleDictionary = new StyleDictionary({
   source: tokenFiles,
   platforms: {
      scss: {
         transformGroup: 'scss',
         buildPath: `${outputDir}/`,
         files: tokenFiles.map((file) => {
            const fileName = file.split('/').pop() // Get just the filename
            return {
               destination: fileName.replace('.json', '.scss'),
               format: 'scss/variables',
               filter: (token) => token.filePath.endsWith(fileName),
               options: {
                  outputReferences: !fileName.includes('color'),
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

console.log('Generating tokens from:', sourceDir)
console.log('Output directory:', outputDir)

myStyleDictionary.buildAllPlatforms()

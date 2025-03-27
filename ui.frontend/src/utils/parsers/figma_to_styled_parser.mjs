import fs from 'fs'

// at this point this file is not that flexible as more studies over the figma json structure is needed
// also how to create all the tokens in figma using https://docs.tokens.studio/
// It just removes the Primary level and creates a new json file with the rest of the tokens
// change the branch to development to see the changes

function removePrimaryLevel() {
   const filePath = './src/styles/tokens/source/tokens.json'

   const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8').toLowerCase())

   // Extract the contents from Primary
   const { primary, semantics, $themes } = jsonData

   if (!primary) {
      console.log('No Primary found')
      return
   }

   if (!semantics) {
      console.log('No Semantics found')
      return
   }

   const { core, borders, spacing, fontsize } = primary

   const { surface, text, border, content } = semantics

   // Create new object without Primary level
   const newJson = {
      core,
      borders,
      spacing,
      fontsize,
      surface,
      text,
      border,
      content,
      $themes,
   }

   // Write the modified JSON back to file
   fs.writeFileSync(
      `src/styles/tokens/source/tokens_parsed.json`,
      JSON.stringify(newJson, null, 3).toLowerCase(),
      'utf8'
   )
}

removePrimaryLevel()

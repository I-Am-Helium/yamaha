import React from 'react'
import { Meta, StoryObj } from '@storybook/react'

import './colors.scss'

interface ColorBlockProps {
   name: string
   hex: string
   rgba: string
}

const categoryNameMap = {
   red: 'red',
   grey: 'grey',
   lightGrey: 'light grey',
   neutral: '',
   status: '',
}

function formatCategoryName(category: string, shade: string) {
   if (categoryNameMap[category as keyof typeof categoryNameMap].length > 0) {
      return `${categoryNameMap[category as keyof typeof categoryNameMap]}-${shade}`
   }
   return `${shade}`
}

const ColorBlock: React.FC<ColorBlockProps> = ({ name, hex, rgba }) => (
   <div
      style={{
         display: 'flex',
         alignItems: 'center',
         gap: '16px',
         justifyContent: 'left',
         marginBottom: '16px',
      }}
   >
      <div
         className={`color-block ${name === 'white' ? 'outline' : ''}`}
         style={{
            width: '112px',
            height: '56px',
            backgroundColor: hex,
            borderRadius: '12px',
         }}
      />
      <div style={{ flex: 1 }}>
         <p className="typo-design-system-name color-red-500">{name}</p>
         <p className="typo-design-system-value">{hex}</p>
         <p className="typo-design-system-value">{rgba}</p>
      </div>
   </div>
)

export const Tokens: StoryObj = {
   render: () => {
      const colors = {
         red: {
            '50': { hex: '#F9D7D6', rgba: 'rgb(249, 215, 214)' },
            '100': { hex: '#F3AEAC', rgba: 'rgb(243, 174, 172)' },
            '200': { hex: '#EF8784', rgba: 'rgb(235, 135, 152)' },
            '300': { hex: '#EC625C', rgba: 'rgb(236, 98, 92)' },
            '400': { hex: '#EB4339', rgba: 'rgb(235, 67, 57)' },
            '500': { hex: '#D52B1E', rgba: 'rgb(255, 0, 0)' },
            '600': { hex: '#A72116', rgba: 'rgb(167, 33, 22)' },
            '700': { hex: '#86180F', rgba: 'rgb(134, 24, 15)' },
            '800': { hex: '#640F09', rgba: 'rgb(100, 15, 9)' },
            '900': { hex: '#430704', rgba: 'rgb(67, 7, 4)' },
         },
         grey: {
            '50': { hex: '#E0E0E0', rgba: 'rgb(224, 224, 224)' },
            '100': { hex: '#C1C1C1', rgba: 'rgb(193, 193, 193)' },
            '200': { hex: '#A2A2A2', rgba: 'rgb(162, 162, 162)' },
            '300': { hex: '#828282', rgba: 'rgb(130, 130, 130)' },
            '400': { hex: '#636363', rgba: 'rgb(99, 99, 99)' },
            '500': { hex: '#444444', rgba: 'rgb(68, 68, 68)' },
            '600': { hex: '#313131', rgba: 'rgb(49, 49, 49)' },
            '700': { hex: '#272727', rgba: 'rgb(39, 39, 39)' },
            '800': { hex: '#1D1D1D', rgba: 'rgb(29, 29, 29)' },
            '900': { hex: '#131313', rgba: 'rgb(19, 19, 19)' },
         },
         lightGrey: {
            '50': { hex: '#FDFDFD', rgba: 'rgb(253, 253, 253)' },
            '100': { hex: '#FCFCFC', rgba: 'rgb(252, 252, 252)' },
            '200': { hex: '#FAFAFA', rgba: 'rgb(250, 250, 250)' },
            '300': { hex: '#F8F8F8', rgba: 'rgb(248, 248, 248)' },
            '400': { hex: '#F7F7F7', rgba: 'rgb(247, 247, 247)' },
            '500': { hex: '#F5F5F5', rgba: 'rgb(245, 245, 245)' },
            '600': { hex: '#CCCCCC', rgba: 'rgb(204, 204, 204)' },
            '700': { hex: '#BBBBBB', rgba: 'rgb(187, 187, 187)' },
            '800': { hex: '#A3A3A3', rgba: 'rgb(163, 163, 163)' },
            '900': { hex: '#8F8F8F', rgba: 'rgb(143, 143, 143)' },
         },
         neutral: {
            black: { hex: '#000000', rgba: 'rgb(0, 0, 0)' },
            white: { hex: '#FFFFFF', rgba: 'rgb(255, 255, 255)' },
         },
         status: {
            green: { hex: '#006B4D', rgba: 'rgb(0, 107, 77)' },
            orange: { hex: '#E15D00', rgba: 'rgb(225, 93, 0)' },
            red: { hex: '#DA1307', rgba: 'rgb(218, 19, 7)' },
            blue: { hex: '#18488F', rgba: 'rgb(24, 72, 143)' },
         },
      }

      return (
         <div style={{ padding: '32px' }}>
            <div
               style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'left',
                  gap: '40px',
                  backgroundColor: '#C1C1C1',
                  padding: '32px',
               }}
            >
               {Object.entries(colors).map(([category, shades]) => (
                  <div
                     style={{
                        marginBottom: '16px',
                        backgroundColor: '#fff',
                        maxHeight: 'min-content',
                        borderRadius: '12px',
                        overflow: 'hidden',
                     }}
                  >
                     <div
                        style={{ paddingInline: '32px', paddingBlock: '16px' }}
                     >
                        <h3 className="typo-primary">
                           {category.charAt(0).toUpperCase() +
                              category.slice(1)}
                        </h3>
                        {Object.entries(shades).map(
                           ([shade, { hex, rgba }]) => (
                              <ColorBlock
                                 key={shade}
                                 name={formatCategoryName(category, shade)}
                                 hex={hex}
                                 rgba={rgba}
                              />
                           )
                        )}
                     </div>
                     <div
                        style={{
                           backgroundColor: '#000',
                           paddingBlock: '12px',
                           paddingInline: '16px',
                           color: '#fff',
                        }}
                     >
                        <p className="typo-base">Base color is 500</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      )
   },
}

export default {
   title: 'Design System',
   component: Tokens,
   parameters: {},
} as Meta

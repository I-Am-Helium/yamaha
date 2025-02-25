//@ts-nocheck
import React from 'react'
import {
   byAttrVal,
   DOMModel,
   createCustomElement,
} from '@adobe/react-webcomponent'

class DummyCompModel extends DOMModel {
   @byAttrVal() title?: string
}

const DummyComp: React.FC<DummyCompModel> = ({ title }) => {
   return (
      <div className="dummy-comp-wrapper">
         <h2>This is the Dummy Comp</h2>
         <h4>{title}</h4>
      </div>
   )
}

const DummyCompElement = createCustomElement(
   DummyComp,
   DummyCompModel,
   'element'
)

console.log('DUMM ELEMENT : ', DummyComp, DummyCompModel)

window.customElements.define('aem-dummy-comp', DummyCompElement)

export default DummyComp

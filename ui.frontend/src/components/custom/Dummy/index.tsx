import React from 'react'
import {
   byAttrVal,
   DOMModel,
   createCustomElement,
} from '@aieyan-helium/react-webcomponent'

class DummyCompModel extends DOMModel {
   @byAttrVal() title?: string
}

const DummyComp: React.FC<DummyCompModel> = ({ title }) => {
   return (
      <div className="dummy-comp-wrapper">
         <h2>This is the Dummy Comp</h2>
         <h4>{title}</h4>
         <h3>Final Library is working! Huzzah! Hunzah!</h3>
      </div>
   )
}

const DummyCompElement = createCustomElement(
   DummyComp,
   DummyCompModel,
   'element'
)

window.customElements.define('aem-dummy-comp', DummyCompElement)

export default DummyComp

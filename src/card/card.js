import {viajeData} from "../data.js"
class Card extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({ mode: "open" });
           
    };

    connectedCallback(){
        this.render
    }

    
    render (){
        this.shadowRoot.innerHTML = `
            <h1>Destino</h1>
            <h2>duracion</h2>
            <h3>costo</h3>
        `
      
    }
     
    
    
}

customElements.define("card-component", Card)
export default Card

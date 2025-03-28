class Card extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({ mode: "open" });
           
    };

    connectedCallback(){
        this.render
    }

    
    async render (){
        this.shadowRoot.innerHTML = `
        <div id="container">
        <h1>Destino</h1>
        <h2>duracion</h2>
        <h3>costo</h3>
        </div>
        `
        const data = await fetch ("data.json")
    }
    

     

    

    
    




}

customElements.define("card-component", Card)
export {Card}

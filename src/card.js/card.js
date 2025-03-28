class Card extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({ mode: "open" });
           
    };

    connectedCallback(){
        this.render()
    }


    async loadData (){
        this.shadowRoot.innerHTML = `
            <h1>hola</h1>
        `
    }

     

    

    
    




}
export default Card

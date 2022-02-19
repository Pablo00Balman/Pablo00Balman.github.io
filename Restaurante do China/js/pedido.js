const KEY_PEDIDO = "restaurante-do-china:pedido-list";
const KEY_TOTAL = "restaurante-do-china:total";
const KEY_LOAD_PEDIDO = "restaurante-do-china:loaded";
import IndexView from './view/indexView.js';

let view = new IndexView("#main-content");

class Pedido {
    constructor() {
        this.listaProdutos = [];
        this.total = 0;
    }

    addProduto(item) {
        item.qnt = 1;

        this.listaProdutos.push(item);
        this.total += item.price;   
        this.load();
    }

    addQnt(id,qnt)
    {
        for(let i=0; i<this.listaProdutos.length; i++)
        {
            if(this.listaProdutos[i].code == id)
            {
                this.listaProdutos[i].qnt = qnt;
            }
        }

        this.load();
    }

    removeProduto(item) {
        let index = this.listaProdutos.indexOf(item);
        this.listaProdutos.splice(index,1);
        this.total -= item.price;

        let arrayQnt = localStorage.getItem("qnt");
        arrayQnt = arrayQnt.split(",");

        for(let i=1; i<arrayQnt.length; i=i+2)
        {
            if(arrayQnt[i] == item.code)
            {
                console.log(item.code)
                arrayQnt.splice(i,2);
                console.log(arrayQnt)
                break;
            }
        }
        
        localStorage.setItem("qnt",arrayQnt)


        this.load();
    }

    readFromStorage() {
        if(JSON.parse(localStorage.getItem(KEY_PEDIDO))) {
            this.listaProdutos = JSON.parse(localStorage.getItem(KEY_PEDIDO))
        } else {
            this.listaProdutos = [];
        }
        if(localStorage.getItem(KEY_TOTAL)) {
            this.total = parseFloat(localStorage.getItem(KEY_TOTAL));
        } else {
            this.total = 0;
        }
    }
    /*
     * Carrega o pedido no sessionStorage
     * @param {} pedido 
     */
    load() {
        localStorage.setItem(KEY_PEDIDO, JSON.stringify(this.listaProdutos));
        localStorage.setItem(KEY_TOTAL, this.total);
    }

    
}

export default Pedido;

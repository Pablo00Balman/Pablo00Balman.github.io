/**
 * Scripts de view determinam como será apresentado
 * o seu modelo de dados na tela
 * 
 */
 
/**
 * Define como os itens serão carregados na tela
 * @param {lista de itens} foods 
 */

/*  function createItems(food) {
    //recupera o container dos itens
    let menu = document.querySelector("#menu");
    //apagando os itens atuais do DOM
    menu.innerHTML = "";
    food.forEach(food => {
        let divFood = document.createElement("figure");

        divFood.innerHTML = `<button id = "update = ${food.id}">Editar</button>
        <figure id = "food-${food.id}">
            <img src = "${food.image}" alt = ${food.name}">
            <figcaption> ${food.name}</figcaption>
            </figure>`;

        menu.appendChild(divFood);
    });

} */

function createItems(food) {
    //recupera o container dos itens
    let menu = document.querySelector("#menu");
    //apagando os itens atuais do DOM
    menu.innerHTML = "";
    food.forEach(food => {
        let figFood = document.createElement("figure");
        figFood.id = food.id;

        figFood.innerHTML =`
                <button id = "update = ${food.id}">Editar</button>
                <img src="${food.image}" alt="${food.name}">
                <figcaption>${food.name}</figcaption>`;
        menu.appendChild(figFood);
    });
}

function save() {
    document.querySelector('#save-food').blur();
    return Object.fromEntries(new FormData(formFood));
}

export default { createItems, save };
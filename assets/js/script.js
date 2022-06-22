const pizzaMenu = [
    {name: "PIZZA_NAME1", price: 8, images: "images/menus/pizza_01.png"},
    {name: "PIZZA_NAME2", price: 10, images: "images/menus/pizza_02.png"},
    {name: "PIZZA_NAME3", price: 12, images: "images/menus/pizza_03.png"}
],

pizzaSize = [
    {size: "Small", price: 1},
    {size: "Medium", price: 0},
    {size: "Large", price: 2}
],

pizzaTopping = [
    {name: "Avocado", price: 1},
    {name: "Broccoli", price: 1},
    {name: "Onions", price: 1},
    {name: "Zucchini", price: 1},
    {name: "Lobster", price: 2},
    {name: "Oyster", price: 2},
    {name: "Salmon", price: 2},
    {name: "Tuna", price: 2},
    {name: "Bacon", price: 3},
    {name: "Duck", price: 3},
    {name: "Ham", price: 3},
    {name: "Sausage", price: 3},
];

const currDefault = "&#36;",
      pathAssets = "./assets/";

const pizzaApp = {
    init: ()=> {
        pizzaApp.createMainPizza();
        pizzaApp.createPizzaSize();
        pizzaApp.createPizzaTopping();
        pizzaApp.selectablePizza(); 
        pizzaApp.priceAction();
    },
    createMainPizza: ()=> {
        Object.keys(pizzaMenu).forEach(_pizza =>{
            if (_pizza != null) {
                const elmPizza = document.querySelector(".pizza-menu");
                let newPizzaItem = document.createElement("div");
                newPizzaItem.className = `pizza-menu__item pz-${_pizza}`;
                newPizzaItem.id = `pz-${_pizza}`;
                if (elmPizza) {
                    elmPizza.appendChild(newPizzaItem);    
                }
                const elmPizzaItem = document.querySelectorAll('.pizza-menu__item');
                if (elmPizzaItem) {
                    const arrPizzaWrapper = [
                        "IMG",
                        "H3",
                        "P",
                        "INPUT"
                    ];
                    arrPizzaWrapper.forEach(apw=>{
                        let headMainItem = document.createElement(apw);
                        if (apw == "IMG") {
                            if (pizzaMenu[_pizza].images != "") {
                                headMainItem.setAttribute('src', `${pathAssets + pizzaMenu[_pizza].images}`);
                            } else {
                                headMainItem.setAttribute('src', pathAssets+'images/default.jpg');
                            }
                        }
                        if (apw == "H3") {
                            headMainItem.textContent = pizzaMenu[_pizza].name;
                        }
                        if (apw == "P") {
                            headMainItem.className = "pz-price";
                            headMainItem.innerHTML = `<span>${currDefault}</span>`+ pizzaMenu[_pizza].price;
                        }
                        if (apw == "INPUT") {
                            headMainItem.type = "radio";
                            headMainItem.setAttribute('name', "pizza-items");
                            headMainItem.setAttribute('data-price', pizzaMenu[_pizza].price);
                            headMainItem.className = "pizza-menu__item-select";
                            headMainItem.id = "pz-"+_pizza; 
                            headMainItem.value = pizzaMenu[_pizza].name;
                        }
                        elmPizzaItem.forEach(epi=>{
                            epi.appendChild(headMainItem);
                        });
                    });
                }
            }
        });
    },
    createPizzaSize: ()=> {
        Object.keys(pizzaSize).forEach(_sizes =>{
            if (_sizes != null) {
                const elmPizzaSizes = document.querySelector(".pizza-sizes__list");
                let newLiSizes = document.createElement("LI");
                if (elmPizzaSizes) {
                    elmPizzaSizes.appendChild(newLiSizes);
                    let elmLiSizes = document.querySelectorAll('.pizza-sizes__list li');
                    const arrSizesWrapper = [
                        "INPUT",
                        "LABEL"
                    ];
                    arrSizesWrapper.forEach(asw=>{
                        let newSizesItem = document.createElement(asw);
                        if (asw == "INPUT") {
                            newSizesItem.setAttribute('type', 'radio')
                            newSizesItem.setAttribute('name', 'pizza-size');
                            newSizesItem.setAttribute('data-price', pizzaSize[_sizes].price);
                            newSizesItem.className = `pizza-sizes__select ps-${_sizes}`;
                            newSizesItem.id = `ps-${_sizes}`;
                            newSizesItem.value = pizzaSize[_sizes].size;
                            if (_sizes == 1) {
                                newSizesItem.checked = true;
                            }
                        }
                        if (asw == "LABEL") {
                            newSizesItem.textContent = pizzaSize[_sizes].size;
                        }
                        if (elmLiSizes) {
                            elmLiSizes.forEach(els=>{
                                els.appendChild(newSizesItem);
                            });
                        }
                    });
                }
            }
        });
    },
    createPizzaTopping: ()=> {
        Object.keys(pizzaTopping).forEach(_topping =>{
            if (_topping != null) {
                const elmPizzaTopping = document.querySelector(".pizza-topping__list");
                let newLiTopping = document.createElement("LI");
                if (elmPizzaTopping) {
                    elmPizzaTopping.appendChild(newLiTopping);
                    let elmLiTopping = document.querySelectorAll('.pizza-topping__list li');
                    const arrTopingWrapper = [
                        "INPUT",
                        "LABEL"
                    ];
                    arrTopingWrapper.forEach(atw=>{
                        let newPizzaTopping = document.createElement(atw);
                        if (atw == "INPUT") {
                            newPizzaTopping.setAttribute('type', 'checkbox');
                            newPizzaTopping.setAttribute('name', 'topping'+_topping);
                            newPizzaTopping.setAttribute('data-price', pizzaTopping[_topping].price);
                            newPizzaTopping.className = `pizza-topping__select pt-${_topping}`;
                            newPizzaTopping.id = `pt-${_topping}`;
                            newPizzaTopping.value = pizzaTopping[_topping].name;
                        }
                        if (atw == "LABEL") {
                            newPizzaTopping.setAttribute('for', 'topping-'+_topping);
                            newPizzaTopping.textContent = pizzaTopping[_topping].name;
                        }
                        if (elmPizzaTopping) {
                            elmPizzaTopping.appendChild(newPizzaTopping)
                        }
                        if (elmLiTopping) {
                            elmLiTopping.forEach(elt=>{
                                elt.appendChild(newPizzaTopping);
                            });
                        }
                    });
                }
                
            }
        });
    },
    selectablePizza: ()=> {
        const notPizzaOne = [
            "Lobster",
            "Oyster",
            "Salmon",
            "Bacon",
            "Duck",
            "Sausage"
        ],
        notPizzaTwo = [
            "Avocado",
            "Tuna",
            "Duck",
            "Sausage"
        ],
        notPizzaThree = [
            "Avocado",
            "Lobster",
            "Oyster",
            "Salmon"
        ];
        const elmAllPizza = document.querySelectorAll(".pizza-menu .pizza-menu__item-select");
        if (elmAllPizza) {
            for (i = 0; i < elmAllPizza.length; i++) {
                elmAllPizza[i].addEventListener('click', (e)=>{
                            const elmAllTopping = document.querySelectorAll(".pizza-topping .pizza-topping__select");
                            if (elmAllTopping) {
                                elmAllTopping.forEach(eat=>{
                                if (e.target.id == "pz-0") {
                                    eat.classList.remove('noactive');
                                    eat.checked = false;
                                    notPizzaOne.forEach(apo=>{
                                                if (eat.value == apo) {
                                                    if (!eat.classList.contains('noactive')) {
                                                        eat.classList.toggle('noactive');
                                                    }
                                                }    
                                        });
                                }

                                if (e.target.id == "pz-1") {
                                    eat.classList.remove('noactive');
                                    eat.checked = false;
                                    notPizzaTwo.forEach(apt=>{
                                                if (eat.value == apt) {
                                                    if (!eat.classList.contains('noactive')) {
                                                        eat.classList.toggle('noactive');
                                                    }
                                                }
                                    });
                                }

                                if (e.target.id == "pz-2") {
                                    eat.classList.remove('noactive');
                                    eat.checked = false;
                                    notPizzaThree.forEach(aptt=>{
                                                if (eat.value == aptt) {
                                                    if (!eat.classList.contains('noactive')) {
                                                        eat.classList.toggle('noactive');
                                                    }
                                                }
                                    });
                                }

                                if(eat.classList.contains('noactive')){
                                    eat.disabled = true;
                                } else {
                                    eat.disabled = false;
                                }
                                
                                });
                            }
                                
                        }); 
                }
           
        }
    },
    priceAction: ()=> {
        const elmTotalPrice = document.querySelector(".pizza-price .pizza-price__result");
        const elmPriceAction = [
            ".pizza-menu .pizza-menu__item-select",
            ".pizza-sizes .pizza-sizes__select",
            ".pizza-topping .pizza-topping__select"
        ];
        const finalyPrice = document.querySelectorAll(elmPriceAction);
        if (finalyPrice) {
            let totalItem = 0,
                totalSize = 0,
                totalTopping = 0;
            for(i = 0; i < finalyPrice.length; i++) { 
                finalyPrice[i].addEventListener('click', (e)=>{
                    if (e.target.checked == true){
                        Object.keys(pizzaMenu).forEach(finalpm=>{
                            if (e.target.value == pizzaMenu[finalpm].name) {
                                totalItem = parseInt(e.target.getAttribute("data-price"));
                                totalTopping = 0;
                            }
                        });
                        Object.keys(pizzaSize).forEach(finalps=>{
                            if (e.target.value == pizzaSize[finalps].size) {
                                if (e.target.value == "Small") {
                                    totalSize = -parseInt(e.target.getAttribute("data-price"));
                                }
                                if (e.target.value == "Medium") {
                                    totalSize = +parseInt(e.target.getAttribute("data-price"));
                                }
                                if (e.target.value == "Large") {
                                    totalSize = +parseInt(e.target.getAttribute("data-price"));
                                }
                            }
                        });
                        Object.keys(pizzaTopping).forEach(finalpt=>{
                            if (e.target.value == pizzaTopping[finalpt].name) {
                                totalTopping += parseInt(e.target.getAttribute("data-price"));
                            }
                        });
                    } else {
                        totalTopping = 0;
                    }
                    if (totalItem != 0) {
                        const convResult = totalItem + totalSize + totalTopping;
                        elmTotalPrice.innerHTML = `<span>${currDefault + String(convResult)}</span>`;
                    } else {
                        elmTotalPrice.innerHTML = "";
                    }
                });
                }
            }
    }

}

pizzaApp.init();
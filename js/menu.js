document.addEventListener("DOMContentLoaded", function () {
    const menuContainer = document.getElementById("menu-container");
    const prevPageButton = document.getElementById("prevPage");
    const nextPageButton = document.getElementById("nextPage");
    const homeButton = document.getElementById("homeButton");

    const menuData = [];

    const itemsPerPage = 9;
    let currentPage = 0;

    function displayMenu() {
        menuContainer.innerHTML = "";
        const startIndex = currentPage * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        for (let i = startIndex; i < endIndex && i < menuData.length; i++) {
            const item = menuData[i];
            const section = document.createElement("section");
            section.innerHTML = `
            <div class="item-wrapper">
                <img src="../img/${item.image}" alt="${item.name}">
                <div class="details-container">
                    <div class="details-wrapper">
                        <h2>${item.name}</h2>
                        <p>${item.description}</p>
                    </div>
                    <p>Price: $${item.price}</p>
                    <div class="in-dec">
                        <div class="quantity-buttons">
                            <div class="value-button decrement" id="decrease">
                                <img src="../img/icons/minus-icon.svg">
                            </div>
                            <input type="number" id="number" value="0" class="product-quantity item-count">
                            <div class="value-button increment" id="increase">
                                <img src="../img/icons/plus-icon.svg">
                            </div>
                        </div>
                        <button class="addToCartButton">Add to Cart</button>
                    </div>
                </div>
            </div>
            `;
            menuContainer.appendChild(section);

            const addToCartButton = section.querySelector('.addToCartButton');
            const incrementDiv = section.querySelector('.increment');
            const decrementDiv = section.querySelector('.decrement');
            const itemCountInput = section.querySelector('.item-count');

            addToCartButton.addEventListener('click', function () {
                const itemCount = parseInt(itemCountInput.value);
                if (itemCount > 0) {
                    let cart = JSON.parse(localStorage.getItem("cart")) ? JSON.parse(localStorage.getItem("cart")) : {"products": []};
                    let flag = false;
                    let index;
                    for (let i = 0; i < cart["products"].length; i++) {
                        console.log(cart["products"][i]);
                        if (cart["products"][i]["name"] === `${item.name}`){
                            flag = true;
                            index = i;
                            break;
                        }
                    }
                    
                    if (flag) {
                        cart["products"][index]["quantity"] = parseInt(cart["products"][index]["quantity"]) + parseInt(itemCount);
                    } else {
                        cart["products"].push({
                            "name": `${item.name}`,
                            "quantity": `${parseInt(itemCount)}`,
                            "description": `${item.description}`, 
                            "unitPrice": `${parseFloat(item.price)}`,
                            "imagePath": `${item.image}`
                        });
                    }
                    localStorage.setItem("cart", JSON.stringify(cart));
                    alert(`Added ${itemCount} ${item.name}(s) to the cart`);
                    itemCountInput.value = '0';
                } else {
                    alert('Please select the quantity first');
                }
            });

            incrementDiv.addEventListener('click', function () {
                let itemCount = parseInt(itemCountInput.value);
                itemCount++;
                itemCountInput.value = itemCount;
            });

            decrementDiv.addEventListener('click', function () {
                let itemCount = parseInt(itemCountInput.value);
                if (itemCount > 0) {
                    itemCount--;
                    itemCountInput.value = itemCount;
                }
            });
        }
    }

    function updatePaginationButtons() {
        prevPageButton.disabled = currentPage <= 0;
        nextPageButton.disabled = (currentPage + 1) * itemsPerPage >= menuData.length;
    }

    prevPageButton.addEventListener("click", function () {
        if (currentPage > 0) {
            currentPage--;
            displayMenu();
            updatePaginationButtons();
        }
    });

    nextPageButton.addEventListener("click", function () {
        const lastPage = Math.ceil(menuData.length / itemsPerPage) - 1;
        if (currentPage < lastPage) {
            currentPage++;
            displayMenu();
            updatePaginationButtons();
        }
    });

    let productInfo = JSON.parse(localStorage.getItem('productInfo'));

    const sampleMenuData = productInfo;

    menuData.push(...sampleMenuData);

    displayMenu();
    updatePaginationButtons();
});

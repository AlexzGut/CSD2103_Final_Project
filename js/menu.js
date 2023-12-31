document.addEventListener("DOMContentLoaded", function () {
    const menuContainer = document.getElementById("all-menu-container");

    const menuData = [];

    function displayMenu() {
        menuContainer.innerHTML = "";

        for (let i = 0; i < menuData.length; i++) {
            const item = menuData[i];
            const section = document.createElement("section");
            section.innerHTML = `
            <div class="item-wrapper">
                <img src="../img/menu/products/${item.image}" alt="${item.name}">
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
                    let cart = JSON.parse(localStorage.getItem("cart")) ? JSON.parse(localStorage.getItem("cart")) : { "products": [] };
                    let flag = false;
                    let index;
                    for (let i = 0; i < cart["products"].length; i++) {
                        console.log(cart["products"][i]);
                        if (cart["products"][i]["name"] === `${item.name}`) {
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

    const retrieveProducts = function () {
        let tabSelected = localStorage.getItem('tabSelected');
        $.ajax({
            url: '../php/getItemsMenu.php', //path to the PHP file
            method: 'POST',
            data: { name: $('#search-product').val(), tab: tabSelected },
            dataType: 'json',
            success: function (products) {
                // Handle the returned JSON data
                menuData.splice(0, menuData.length); // clears products data.
                menuData.push(...products); // populate manuData array with the data returned from the server.
                displayMenu();
            }
        });
    };

    $('#search-product').on('input', retrieveProducts);

    localStorage.setItem('tabSelected', 'all');
    retrieveProducts();

    $("#tabs").tabs();

    const tabSelected = function () {
        localStorage.setItem('tabSelected', `${$(this).attr('id') ?? 'all'}`);
        $('#search-product').val('');
        retrieveProducts();
    };

    $('#tabs li').on('click', tabSelected);
});
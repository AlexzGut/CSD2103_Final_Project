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
                <img src="../img/${item.image}" alt="${item.name}">
                <h2>${item.name}</h2>
                <p>${item.description}</p>
                <p>Price: $${item.price.toFixed(2)}</p>
                <div class="cart-controls">
                    <button class="decrement">-</button>
                    <span class="item-count">0</span>
                    <button class="increment">+</button>
                </div>
                <button class="addToCartButton">Add to Cart</button>
            `;
            menuContainer.appendChild(section);

            const addToCartButton = section.querySelector('.addToCartButton');
            const incrementButton = section.querySelector('.increment');
            const decrementButton = section.querySelector('.decrement');
            const itemCountSpan = section.querySelector('.item-count');

            addToCartButton.addEventListener('click', function () {
                const itemCount = parseInt(itemCountSpan.textContent);
                if (itemCount > 0) {
                    let cart = JSON.parse(localStorage.getItem("cart")) ? JSON.parse(localStorage.getItem("cart")) : {"products": []};
                    cart["products"].push({
                        "name": `${item.name}`,
                        "quantity": `${parseInt(itemCount)}`,
                        "description": `${item.description}`, 
                        "unitPrice": `${parseFloat(item.price)}`,
                        "imagePath": `${item.image}`
                    });
                    localStorage.setItem("cart", JSON.stringify(cart));
                    alert(`Added ${itemCount} ${item.name}(s) to the cart`);
                    itemCountSpan.textContent = '0'; // Sayacı sıfırla
                } else {
                    alert('Please select the quantity first');
                }
            });

            incrementButton.addEventListener('click', function () {
                let itemCount = parseInt(itemCountSpan.textContent);
                itemCount++;
                itemCountSpan.textContent = itemCount;
            });

            decrementButton.addEventListener('click', function () {
                let itemCount = parseInt(itemCountSpan.textContent);
                if (itemCount > 0) {
                    itemCount--;
                    itemCountSpan.textContent = itemCount;
                }
            });
        }
    }

    function updatePaginationButtons() {
        prevPageButton.disabled = currentPage <= 0;
        nextPageButton.disabled = (currentPage + 1) * itemsPerPage >= menuData.length;
    }

    function goHome() {
        alert("By this button you'll go to home page");
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

    homeButton.addEventListener("click", goHome);

    const sampleMenuData = [
        { name: "Dill-i-cio", description: "Panko battered and fried pickle, fiery Sriracha, savoury bacon, garlic aioli, lettuce, and tomato.", image: "images1.jpg", price: 10.99 },
        { name: "Cheese Burger", description: "Red onion , pickles, lettuce, tomatoes with our tasty garlic aioli.", image: "images2.jpg", price: 8.99 },
        { name: "Big Cheese Burger", description: "With 12 oz beef patty, red onion, pickles, lettuce, tomato, garlic aioli and double cheddar cheese", image: "images3.jpg", price: 16.99 },
        { name: "Lamby Burger", description: "Grilled red peppers and goat cheese with smoky chipotle aioli, bacon, arugula and tomatoes.", image: "images4.jpg", price: 11.99  },
        { name: "The Grilled Cheese Bacon Burger", description: "Cheddar, mozzarella, lettuce, tomato and savoury bacon, with our smoky chipotle aioli.", image: "images5.jpg", price: 14.99  },
        { name: "Jerk Chicken Burger", description: "Grilled chicken breast, jerk sauce, jalapenos, red onion, lettuce, and tomato.", image: "images6.jpg", price: 13.99  },
        { name: "Red Melt Burger", description: "Roasted red peppers, mozarella cheese, chipotle aioli, lettuce, tomato", image: "images7.jpg", price: 13.99  },
        { name: "Riverside Burger", description: "Onion ring, mozzarella, bacon, bbq sauce, garlic aioli, lettuce, and tomato.", image: "images8.jpg", price: 14.99  },
        { name: "The Big Boy Burger", description: "Double beef patty (11 oz) with double cheddar cheese, red onion, pickles, fried egg, jalapeno, garlic ailoli, lettuce, and tomato.", image: "images9.jpg", price: 18.50  },
    ];

    menuData.push(...sampleMenuData);

    displayMenu();
    updatePaginationButtons();
});

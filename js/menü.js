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
                <button class="addToCartButton">Add to Cart</button>
            `;
            menuContainer.appendChild(section);
        }

        const addToCartButtons = document.querySelectorAll('.addToCartButton');

        addToCartButtons.forEach(button => {
            button.addEventListener('click', function () {
                alert('The item is added to cart');
            });
        });
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
        { name: "Dish 1", description: "Description 1", image: "image1.jpg" },
        { name: "Dish 2", description: "Description 2", image: "image2.jpg" },
        { name: "Dish 3", description: "Description 3", image: "image3.jpg" },
        { name: "Dish 4", description: "Description 4", image: "image4.jpg" },
        { name: "Dish 5", description: "Description 5", image: "image5.jpg" },
        { name: "Dish 6", description: "Description 6", image: "image6.jpg" },
        { name: "Dish 7", description: "Description 7", image: "image7.jpg" },
        { name: "Dish 8", description: "Description 8", image: "image8.jpg" },
        { name: "Dish 9", description: "Description 9", image: "image9.jpg" },
    ];

    menuData.push(...sampleMenuData);

    displayMenu();
    updatePaginationButtons();
});

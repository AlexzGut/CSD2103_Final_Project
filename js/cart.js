function decreaseValue (productNumber) {

    let newValue = parseInt($(`#input${productNumber}`).val()) - 1;
    let cart = JSON.parse(localStorage.getItem("cart"))
    if ($(`#input${productNumber}`).val() != 1) {
        $(`#input${productNumber}`).val(newValue)
        $(`#total-row${productNumber} .col2`).text( "$ " + (newValue * parseFloat( $(`#article-product${productNumber} .product-price span`).text())).toFixed(2)   );
        // Here the recalculation of the price for the cart
        if (newValue == 1) {
            $(`#decrease${productNumber}`).html(`<img src="../img/icons/trash-can-icon.svg">`);
        }
        cart["products"][productNumber]["quantity"] = newValue;
        let totalCart = 0;
        cart["products"].map((e) => totalCart += e["quantity"] * e["unitPrice"]);
        $("#col-total-price span").text(totalCart.toFixed(2));
    } else  {
        $(`#article-product${productNumber}`).remove();
        $(`#total-row${productNumber}`).remove();
        cart["products"].splice(productNumber,1);
        createArticles(cart);
    }
    
    // Updating localstorage cart
    localStorage.setItem("cart", JSON.stringify(cart));
};

function increaseValue (productNumber) {
    let newValue = parseInt($(`#input${productNumber}`).val()) + 1;
    $(`#input${productNumber}`).val(newValue)
    $(`#total-row${productNumber} .col2`).text( "$ " +  (newValue * parseFloat( $(`#article-product${productNumber} .product-price span`).text())).toFixed(2) );
    if (newValue == 2) {
        $(`#decrease${productNumber}`).html(`<img src="../img/icons/minus-icon.svg">`);
    }

    // Updating localstorage cart
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart["products"][productNumber]["quantity"] = newValue;
    localStorage.setItem("cart", JSON.stringify(cart));
    let totalCart = 0;
    cart["products"].map((e) => totalCart += e["quantity"] * e["unitPrice"]);
    $("#col-total-price span").text(totalCart.toFixed(2));
};

const createArticles = (cart) => {
    if (Object.keys(cart["products"]).length != 0) {
        $("#no-products-warning").hide();
        $("#comments-section").show();
        $("#summary-no-products").hide();
        $("#cart-summary table tfoot").show();
        $("#products-in-cart article").remove();
        $("#page-bottom #cart-summary table tbody .row-products").remove();
        var totalCart = 0;
        cart["products"].map((element, n) => {
            {
                // Here start to set the articles when they are added to the cart.
                $("#products-in-cart").css({
                    display: 'flex',
                    flexDirection: 'column',
                    marginTop: '80px',
                    marginBottom: '2%',
                    justifyContent: 'flex-start'
                });
                
                // Adds a new article with product information
                $("#products-in-cart").append(
                `<article id="article-product${n}">
                    <div class="product-images"><img src="../img/menu/burgers/${element["imagePath"]}">
                    </div>
                    <div class="product-information">
                        <h3 class="product-name"> ${element["name"]}</h3>
                        <p class="product-description">
                            ${element["description"]}
                        </p>
                        <p class="product-price"> 
                            $ <span>${parseFloat(element["unitPrice"]).toFixed(2)}</span>
                        </p>
                        <div class="quantity-buttons">
                            <div class="value-button decrease-button" id="decrease${n}" onclick="decreaseValue(${n})" value="Decrease Value"><img src=${element["quantity"] == 1 ? "../img/icons/trash-can-icon.svg" : "../img/icons/minus-icon.svg"}></div>
                            <input type="number" id="input${n}" value="${element["quantity"]}" class="product-quantity" disabled/> <!-- Here, this id will be created based on the relative product number in the cart -->
                            <div class="value-button increase-button" id="increase${n}" onclick="increaseValue(${n})" value="Increase Value"><img src="../img/icons/plus-icon.svg"></div>
                        </div>
                    </div>
                </article>`);
                
                $("#cart-summary table tbody").append(
                    `<tr id="total-row${n}" class="row-products">
                        <td class="col1">
                            ${element["name"]}
                        </td>
                        <td class="col2">
                            $ <span>${(element["unitPrice"] * element["quantity"]).toFixed(2)}</span>
                        </td>
                    </tr>`);
            totalCart+= element["unitPrice"] * element["quantity"];
            };
            });
            $("#col-total-price span").text(totalCart.toFixed(2));
    } else {
        $("#no-products-warning").show();
        $("#comments-section").hide();
        $("#summary-no-products").show();
        $("#cart-summary table tfoot").hide();
    }
};

// Function to add burgers

$(document).ready(() => {
    let cart = JSON.parse(localStorage.getItem("cart")) ? JSON.parse(localStorage.getItem("cart")) : {"products": []};
    createArticles(cart);
    var date = new Date();
    
    $('.datepicker').pickadate({
        min: new Date(date.getFullYear(), date.getMonth() , date.getDate()),
        max: new Date(date.getFullYear() + 1 , date.getMonth(), date.getDate())
    });
    $('.timepicker').pickatime({
        format: 'HH:i',
        formatLabel: 'HH:i',
        min: [7,30],
        max: [23,59],
        interval: 15
    });
    
    const checkTime = () => {
        if($(".datepicker").val() && $(".timepicker").val()) {
            let dateNow = new Date();
            let dateSelected = new Date($(".datepicker").val());
            let timeSelected = $(".timepicker").val();
            let index = timeSelected.indexOf(":");
            let hour = parseInt(timeSelected.substring(0,index));
            let mins = parseInt(timeSelected.substring(index + 1));
            if (dateSelected.getDate() == dateNow.getDate() && dateSelected.getMonth() == dateNow.getMonth() && dateSelected.getDate() == dateNow.getDate()) {
                if ( hour < dateNow.getHours() || (hour == dateNow.getHours() && mins < dateNow.getMinutes())) {
                    $("#date-error").show();
                } else {
                    $("#date-error").hide();
                }
            } else {
                $("#date-error").hide();
            }
        }
    }

    const radioButtonChang = () => {
        
        var e = document.getElementsByName('deliver-type');
            $('#date-time-picker').slideDown("slow");
            for (i = 0; i < e.length; i++) {
                if (e[i].checked){
                    $('#order-method').text(e[i].value);
                }

            }
        }


    $('.datepicker').on('change', () => checkTime());
    $('.timepicker').on('change', () => checkTime());
    
    $('#carryout').on('change', () => radioButtonChang());
    $('#delivery').on('change', () => radioButtonChang());

});
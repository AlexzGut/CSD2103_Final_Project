
$(document).ready(function() {

    $( "#accordion-edit-account" ).accordion({
      active: 4,
      collapsible: true,
      heightStyle: "content"
    });

    $( "#accordion-help-faq" ).accordion({
      active: 0,
      collapsible: true,
      heightStyle: "content"
    });
    
    const logout = function () {
      window.location.href = '../php/logout.php';
    };

    $('.button-logout, .logoutUser').on('click', logout);

});




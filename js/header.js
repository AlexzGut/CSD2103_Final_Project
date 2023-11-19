const displayMenu = function() {
    $('#header-list').toggle();
};

$(function() {
    $('#menu-mobile').on('click', displayMenu);
});
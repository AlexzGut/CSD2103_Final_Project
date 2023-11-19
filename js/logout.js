const logout = function () {
    window.location.href = '../php/logout.php';
};

$(function() {
    $('#log-out').on('click', logout);
});
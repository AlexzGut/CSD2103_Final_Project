const signin = function() {
    $('#signin-form').submit();
};

$(function() {
    $('#btn-submit').on('click', signin);
});
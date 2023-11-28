const stringToJSON = function() {
    JSON_USER_INFO = localStorage.getItem('userInfo');

    if (JSON_USER_INFO != 'null') {
        return jQuery.parseJSON(JSON_USER_INFO);}
    else
        return null;
};

const updateUserName = function() {
    const userInfo = stringToJSON();
    if (userInfo) {
        $('#user-name').html(`Welcome ${userInfo.firstname}!`);
        if (location.href.endsWith('index.php')) {
            $('#user-link').attr('href', 'html/myaccount.html');
        } else {
            $('#user-link').attr('href', '../html/myaccount.html');
        }
    }
};

$(function() {
    updateUserName();
});


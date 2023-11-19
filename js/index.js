const stringToJSON = function() {
    if (JSON_USER_INFO.length > 0) 
        return jQuery.parseJSON(JSON_USER_INFO);
    else
        return null;
};

const updateUserName = function() {
    const userInfo = stringToJSON();
    if (userInfo) {
        $('#user-name').html(`${userInfo.firstname} ${userInfo.lastname}`);
        $('#user-link').attr('href', 'html/account-details.php');
    }
};

$(function() {
    updateUserName();
});


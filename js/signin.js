const signin = function () {
    $('#signin-form').submit();
};

$(function () {
    $('#btn-submit').on('click', signin);


    // Validation Using jQuery Validation
    $('#signin-form').validate({
        rules: {
            username: {
                required: true,

                normalizer: function (value) {
                    return $.trim(value);
                }
            },
            password: {
                required: true
            }
        },
        messages: {
            username: {
                required: "Please enter the username"
            },
            password: {
                required: "Please enter the password"
            }
        }
    });
});
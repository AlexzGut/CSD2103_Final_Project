const signup = function() {
    $('#signup-form').submit();
};

$(function() {
    $('#date-of-birth').datepicker({            
        altFormat: 'dd/mm/yy',
        dateFormat: 'yy-mm-dd',
        changeYear: true,
        changeMonth: true,
        yearRange: '-100:+0'});
    
    $('#btn-submit').on('click', signup);


    // additional custom methods to validate a Strong password
    $.validator.addMethod('lowerCase', function(value, element) {
        return /[a-z]/g.test(value);
    }, 'Must include at least one lowercase letter')

    $.validator.addMethod('upperCase', function(value, element) {
        return /[A-Z]/g.test(value);
    }, 'Must include at least one uppercase letter')

    $.validator.addMethod('numeric', function(value, element) {
        return /[0-9]/g.test(value);
    }, 'Must include at least one number')

    $.validator.addMethod('specialChar', function(value, element) {
        return /[!@#\$%\^\&*\)\(+=._-]/g.test(value);
    }, 'Must include at least one special character')

    // jQuery validation
    $('#signup-form').validate({
        rules: {
            'first-name': {
                required: true
            },
            'last-name': {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true
            },
            'date-of-birth': {
                required: true,
                date: true
            },
            address: {
                required: true
            },
            username: {
                required: true
            },
            password: {
                lowerCase: true,
                upperCase: true,
                numeric: true,
                specialChar: true,
                minlength: 8       
            },
            'confirm-password': {
                required: true,
                equalTo: '#password'
            }
        },
        messages: {
            'first-name': {
                required: 'Please enter your first name'
            },
            'last-name': {
                required: 'Please enter your last name'
            },
            email: {
                required: "Please enter your email address",
                email: "Your email address must be in the format of name@domain.com"
            },
            phone: {
                required: 'Please enter yout phone number'
            },
            'date-of-birth': {
                required: 'Please enter your date of birth'
            },
            address: {
                required: 'Please enter your home address'
            },
            username: {
                required: 'Please enter a username'
            },
            'confirm-password': {
                required: 'Please confirm the password',
                equalTo: 'Passwords do not match'
            }
        }
    });
});
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
                required: true
            },
            phone: {
                required: true
            },
            'date-of-birth': {
                required: true
            },
            username: {
                required: true
            },
            'confirm-password': {
                required: true,
                equalTo: '#password'
            }
        }
    });
});
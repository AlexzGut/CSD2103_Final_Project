const singup = function() {
    $('#signup-form').submit();
};

$(function() {
    $('#date-of-birth').datepicker({            
        altFormat: 'dd/mm/yy',
        dateFormat: 'yy-mm-dd',
        changeYear: true,
        changeMonth: true,
        yearRange: '-100:+0'});
    
    $('#btn-submit').on('click', singup);
});
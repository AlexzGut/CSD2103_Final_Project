
$(document).ready(function() {
    $('.button-accountEdit, .editAccount').click(function() {
      $('.edit-account-form').removeClass('hidden');
    });
  
    $('.button-cancelChanges').click(function() {
      $('.edit-account-form').addClass('hidden');
    });
  });
  
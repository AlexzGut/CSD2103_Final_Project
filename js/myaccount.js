document.addEventListener('DOMContentLoaded', function() {
  const userinfoString = localStorage.getItem('userInfo');
  const userInfo = JSON.parse(userinfoString);

  const firstName = userInfo.firstname;
  const lastName = userInfo.lastname;
  const phone = userInfo.phone;
  const email = userInfo.email;

  const nameContainer = document.getElementById('user-name-placeholder');
  if (nameContainer) {
    nameContainer.textContent = `${firstName} ${lastName}`;
  }

  const phoneContainer = document.getElementById('user-phone-placeholder');
  if (phoneContainer) {
    const lastFourDigits = phone.slice(-4);
    phoneContainer.textContent = `***-***-${lastFourDigits}`;
  }

  const emailContainer = document.getElementById('user-email-placeholder');
  if (emailContainer) {
    emailContainer.textContent = `${email}`;
  }

  $(document).ready(function() {
    $("#accordion-edit-account").accordion({
      active: 4,
      collapsible: true,
      heightStyle: "content"
    });

    $("#accordion-help-faq").accordion({
      active: 0,
      collapsible: true,
      heightStyle: "content"
    });

    const logout = function () {
      window.location.href = '../php/logout.php';
    };

    $('.button-logout, .logoutUser').on('click', logout);

    // USER ACCOUNT INFO SUBMIT button will only work if at least 1 field is updated.
    $('#account-info-form').submit(function(e) {
      e.preventDefault();
      const form = this;

      const fieldsWithData = $(form).find('input[type=text], input[type=email], textarea').filter(function() {
        return $(this).val().trim() !== '';
      });

      if (fieldsWithData.length > 0) {
        $.ajax({
          type: "POST",
          url: "../php/myaccountUpdate.php",
          data: $(this).serialize(),
          success: function(response) {
            alert(response);
            form.reset(); // Reset the form  thanks for the idea Alex
          },
          error: function() {
            alert('Failed to update account information.');
          }
        });
      } else {
        alert('Please fill in at least one field to update.');
      }
    });

    // CREDIT CARD VALIDATION - will only submit if all fields are filled out and valid
    $('#creditcard-info-form').submit(function(e) {
      e.preventDefault();
      const form = this;

      const cardNumber = $('#creditcardNumber').val().trim();
      const cardExpiry = $('#creditcardExpiry').val().trim();
      const cardCVV = $('#creditcardVerification').val().trim();

      if (cardNumber === '' || cardExpiry === '' || cardCVV === '') {
        alert('Please fill in all credit card fields.');
      } else {
        const isValidCardNumber = validateCardNumber(cardNumber);
        const isValidExpiry = validateExpiry(cardExpiry);
        const isValidCVV = validateCVV(cardCVV);

        if (isValidCardNumber && isValidExpiry && isValidCVV) {
          $.ajax({
            type: "POST",
            url: "../php/creditcardUpdate.php",
            data: $(this).serialize(),
            success: function(response) {
              alert(response);
              form.reset(); // Reset the form thanks for the idea Alex
            },
            error: function() {
              alert('Failed to update credit card information.');
            }
          });
        } else {
          alert('Please enter valid credit card information.');
        }
      }
    });

  
    $('.button-cancelWalletChanges').on('click', function() {
      if (confirm('Are you sure you want to cancel changes?')) {
        $('#creditcard-info-form')[0].reset(); // Reset the form thanks for the idea Alex
      }
    });

    // Basic credit card validations
    function validateCardNumber(cardNumber) {
      const cardNumberPattern = /^[0-9]{16}$/; // should be at least 16 digits with only numbers
      return cardNumberPattern.test(cardNumber);
    }
    
    function validateExpiry(cardExpiry) {
      const expiryPattern = /^(0[1-9]|1[0-2])\/\d{2}$/; // just making sure the date is MM/DD
      return expiryPattern.test(cardExpiry);
    }
    
    function validateCVV(cardCVV) {
      const cvvPattern = /^\d{3,4}$/; // CVV should only be 3 or 4 digits
      return cvvPattern.test(cardCVV);
    }
  });
});

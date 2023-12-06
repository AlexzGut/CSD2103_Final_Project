document.addEventListener('DOMContentLoaded', function() {
  const userinfoString = localStorage.getItem('userInfo');
  const userInfo = JSON.parse(userinfoString);


  const firstName = userInfo.firstname;
  const lastName = userInfo.lastname;
  const phone = userInfo.phone;
  const email = userInfo.email;
  // const address = userInfo.address;

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

  // const addressContainer = document.getElementById('user-address-placeholder');
  // if (addressContainer) {
  //   emailContainer.textContent = `${address}`;
  // }

  $(document).ready(function() {

      $( "#accordion-edit-account" ).accordion({
        active: 4,
        collapsible: true,
        heightStyle: "content"
      });

      $( "#accordion-help-faq" ).accordion({
        active: 0,
        collapsible: true,
        heightStyle: "content"
      });
      
      const logout = function () {
        window.location.href = '../php/logout.php';
      };

      $('.button-logout, .logoutUser').on('click', logout);
    
  });

});
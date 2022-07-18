const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

function change_register() {
    var name_tag = document.createElement('input');
    name_tag.setAttribute('placeholder', 'Name');

    var email_tag = document.getElementById('email')
    var password_tag = document.getElementById('password')
    
    var confirm_password_tag = document.createElement('input');
    confirm_password_tag.setAttribute('placeholder', 'Confirm password');

    var form = email_tag.parentNode;
    form.insertBefore(name_tag, email_tag);
    form.appendChild(confirm_password_tag);

    var button = document.getElementById('sign_in_button')
    button.innerHTML = "Sign Up"

    var message = document.getElementById('message')
    message.innerHTML = 'Welcome!'

    var bottom_message = document.getElementById('bottom_message')
    bottom_message.innerHTML = 'Already a member? <a onclick="window.location.reload()">Login Now</a>'
}

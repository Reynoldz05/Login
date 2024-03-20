let signup = document.querySelector('#signup');
let signin = document.querySelector('#signin');
let body = document.querySelector('body');


signup.onclick = function(){
    body.classList.add('signup');

}

signin.onclick = function(){
    body.classList.remove('signup');

}


/* -------------------- Show & hide menu Floating ---------------*/

const toggleButton = document.getElementById('floating-toggle')


const activeMenu = () =>{
    toggleButton.classList.toggle('active')
}

toggleButton.addEventListener('click', activeMenu)


/*---------------------- Close toggle automatically ------*/

document.addEventListener('DOMContentLoaded', function() {
  var iconoRegresar = document.querySelector('.icono-regresar');
  var floatingToggle = document.querySelector('.floating_toggle');
  var signup = document.querySelector('#signup');

  iconoRegresar.addEventListener('click', function() {
      if (floatingToggle.classList.contains('active')) {
          floatingToggle.classList.remove('active');
      }
  });

  signup.addEventListener('click', function() {
      if (floatingToggle.classList.contains('active')) {
          floatingToggle.classList.remove('active');
      }
  });
});



/* ------------------------ User selection ------------------ */

const floatingIcons = document.querySelectorAll('.floating_link');


floatingIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    const userType = icon.getAttribute('data-user');
    
    if (userType === 'user1') {
      window.location.href = 'index.html?user=user1';
    } else if (userType === 'admin') {
      window.location.href = 'index.html?user=admin';
    } else if (userType === 'user2') {
      window.location.href = 'index.html?user=user2';
    }
  });
});

/* ------ En caso de personalizar el formulario para el admin adregar el siguiente codigo = 

const urlParams = new URLSearchParams(window.location.search);
const userType = urlParams.get('user');

// Personalizar el formulario de login según el tipo de usuario
if (userType === 'user1') {
  // Personalizar el formulario para el usuario 1
} else if (userType === 'admin') {
  // Personalizar el formulario para el administrador
} else if (userType === 'user2') {
  // Personalizar el formulario para el usuario 2
}


*/ 
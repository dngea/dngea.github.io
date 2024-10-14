function openNav() {
    document.getElementById("overlay_nav").style.height = "100vh";
    document.getElementById("overlay_nav").style.visibility = "visible";
  }
  
  function closeNav() {
    document.getElementById("overlay_nav").style.height = "0vh";
    document.getElementById("overlay_nav").style.visibility = "hidden";
  }




  // gsap.utils.toArray(".slideText").forEach(text => {
  //   gsap.timeline({
  //     defaults: {ease: "none"},
  //     scrollTrigger: {
  //       scroller: text.closest(".horizSlider"),
  //       horizontal: true,
  //       trigger: text.closest(".slide"),
  //       start: "left right",
  //       end: "left left",
  //       scrub: true
  //     }
  //   })
  //   .fromTo(text, {x: 250}, {x: -250}, 0)
  //   .from(text.nextElementSibling, {scale: 0.8}, 0)
  // });



// Función para cargar el header
function loadHeader() {
  console.log("loadHeader function called"); // Verificar si se llama la función
  fetch("../components/header.html")
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.text();
      })
      .then(data => {
          console.log("Header data loaded"); // Verificar si se recibe la respuesta
          document.getElementById('header').innerHTML = data;
          highlightCurrentPage(); // Llamar a la función para resaltar la página actual después de cargar el header

          // Inicializar eventos de navegación aquí
          initNavEvents(); 
      })
      .catch(error => console.error('Error al cargar el header:', error));
}

// Función para cargar el footer
function loadFooter() {
  console.log("loadFooter function called"); // Verificar si se llama la función
  fetch("../components/footer.html")
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.text();
      })
      .then(data => {
          console.log("Footer data loaded"); // Verificar si se recibe la respuesta
          document.getElementById('footer').innerHTML = data;
          highlightCurrentPage(); // Llamar a la función para resaltar la página actual después de cargar el footer
      })
      .catch(error => console.error('Error al cargar el footer:', error));
}

// Función para resaltar el menú de acuerdo a la página actual
function highlightCurrentPage() {
  const currentPage = window.location.pathname.split("/").pop();
  const pageMap = {
      'multimedia': 'multimedia-art',
      'ux_ui': 'ux-ui',
      'frontend': 'frontend',
      'about': 'about'
  };
  
  for (const key in pageMap) {
      if (currentPage.startsWith(key)) {
          const menuItem = document.getElementById(pageMap[key]);
          if (menuItem && menuItem.parentElement) {
              menuItem.parentElement.classList.add('current-page');
          }
          break;
      }
  }
}

// Manejador para el botón de contacto
function setupContactButton() {
  const contactButton = document.getElementById('contactButton');
  if (contactButton) {
    contactButton.addEventListener('click', function() {
      var email = 'dngeap@gmail.com';
      var subject = encodeURIComponent('Hi Daniel, nice to meet you');
      var body = encodeURIComponent('Hello,\n\nI am reaching out to connect with you.\n\nThank you,\n[Your Name]');
      var mailtoLink = 'mailto:' + email + '?subject=' + subject + '&body=' + body;
      
      console.log('Mailto link:', mailtoLink);
      
      // Abre el cliente de correo
      window.location.href = mailtoLink;
    });
  } else {
    console.error('Contact button not found');
  }
}

// Función que inicializa los eventos de navegación
function initNavEvents() {
  const navItems = document.querySelectorAll('.nav__li');

  navItems.forEach(item => {
      item.addEventListener('click', () => {
          const link = item.querySelector('a');
          window.location.href = link.href; // Redirigir a la URL del enlace
      });
  });
}



// Llamar a la función para cargar el header y footer cuando la página cargue
document.addEventListener('DOMContentLoaded', function() {
  loadHeader();
  loadFooter();
  setupContactButton(); 
});
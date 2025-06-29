const app = document.getElementById('app');

    // RUTAS disponibles
    const routes = {
      'Index': 'Index.html',
      'Sobre-Nosotros': 'Sobre-Nosotros.html',
      'Servicios': 'Servicios.html',
      'Blog': 'Blog.html'
    };

    // Funcion principal routeTo
    async function routeTo(view, event) {
       if (event) {
        event.preventDefault();
       }
      const file = routes[view];
      if (!file) {
        app.innerHTML = '<h2>404 - Página no encontrada</h2>';
        return;
      }

      try {
        const res = await fetch('/views/' + file);
        const html = await res.text();
        app.innerHTML = html;

        // Push URL al history sin recargar
        if(view === 'Index') {
          view = ''; // Para que la URL sea solo '/'
        }
        history.pushState({view: view}, null, '/' + view);

        // Ejecuta función JS específica si existe
        const fnName = view + 'Init';
        if (typeof window[fnName] == 'function') {
          window[fnName]();
        }

      } catch (err) {
        console.error(err);
        app.innerHTML = '<h2>Error cargando la vista.</h2>';
      }
    }

    // Listener para el boton atrás/adelante del navegador
    window.addEventListener('popstate', (e) => {
      const path = location.pathname.replace('/', '');
      const view = path || 'Index';
      routeTo(view);
    });

    // Ejecuta al cargar la página directamente
    document.addEventListener('DOMContentLoaded', () => {
      const path = location.pathname.replace('/', '');
      const view = path || 'Index';
      routeTo(view);
    });

    // Funciones especificas por vista
    function IndexInit() {
      console.log("Inicio cargado");
    }

    function SobreNosotrosInit() {
      console.log("Sobre Nosotros cargado");
    }

    function ServiciosInit() {
      console.log("Servicios cargado");
    }

    function BlogInit() {
      console.log("Blog cargado");
    }
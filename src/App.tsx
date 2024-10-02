import './styles/style.css';

function Header() {
  return (
    <header>
      <div className="container">
        <h1>Mi Portafolio Profesional</h1>
        <p>
          Bienvenido a mi espacio donde comparto mis habilidades y proyectos
          destacados.
        </p>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <img
          src="https://img.freepik.com/foto-gratis/hombre-negocios-brazos-cruzados-sonriendo_1139-677.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1727740800&semt=ais_hybrid" // Reemplaza esto con el enlace de tu imagen
          alt="Descripción de la imagen" // Cambia la descripción según corresponda
          className="full-width-img"
        />
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about">
      <div className="container">
        <h2 className="about-title">¿Quién Soy?</h2>
        <p>
          Soy un desarrollador apasionado por la tecnología y el diseño. Me
          encanta crear soluciones innovadoras y efectivas. A través de este
          portafolio, podrás ver algunos de los proyectos en los que he
          trabajado y las habilidades que he desarrollado.
        </p>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="skills">
      <div className="container">
        <h2>Habilidades</h2>
        <div className="skills-container">
          <div className="skill-box">
            <h3>Habilidades Blandas</h3>
            <ul>
              <li>Comunicación efectiva</li>
              <li>Trabajo en equipo</li>
              <li>Adaptabilidad</li>
              <li>Resolución de problemas</li>
              <li>Gestión del tiempo</li>
            </ul>
          </div>
          <div className="skill-box">
            <h3>Habilidades Duras</h3>
            <ul>
              <li>JavaScript</li>
              <li>React</li>
              <li>HTML & CSS</li>
              <li>Node.js</li>
              <li>Git & GitHub</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="projects">
      <div className="container">
        <h2>Mis Proyectos</h2>
        <ul>
          <li>
            <a
              href="https://github.com/JuanitoElCartero/flecha"
              target="_blank"
              rel="noopener noreferrer"
            >
              Proyecto 1
            </a>{' '}
            Funcion Flecha
          </li>
          <li>
            <a
              href="https://github.com/DanielUAO/landing-page"
              target="_blank"
              rel="noopener noreferrer"
            >
              Proyecto 2
            </a>{' '}
            - Landing Page
          </li>
          <li>
            <a
              href="https://github.com/DanielUAO/landing-page"
              target="_blank"
              rel="noopener noreferrer"
            >
              Proyecto 3
            </a>{' '}
            - Breve descripción del proyecto 3.
          </li>
          {/* Agrega más proyectos según sea necesario */}
        </ul>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="cta">
      <div className="container">
        <h2>¡Conectemos!</h2>
        <p>
          Estoy emocionado por la posibilidad de colaborar. Si estás interesado
          en trabajar conmigo, ¡no dudes en contactarme!
        </p>
        <form action="submit_form.php" method="post">
          <input type="text" name="name" placeholder="Tu Nombre" required />
          <input
            type="email"
            name="email"
            placeholder="Tu Correo Electrónico"
            required
          />
          <button type="submit">Enviar Mensaje</button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="container">
        <p>&copy; 2024 Mi Nombre. Todos los derechos reservados.</p>
        <p>
          <a href="#">Política de Privacidad</a> | <a href="#">Contacto</a>
        </p>
      </div>
    </footer>
  );
}

function FloatingButton() {
  return (
    <a
      href="Codigos.html" // Cambia esto a la ruta correcta si es necesario
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        padding: '10px 20px',
        backgroundColor: '#333',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        zIndex: 1000,
        textDecoration: 'none', // Elimina el subrayado del enlace
      }}
    >
      Ir a Comparar
    </a>
  );
}

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects /> {/* Sección de Proyectos añadida */}
      <CTA />
      <Footer />
      <FloatingButton />
    </>
  );
}

export default App;

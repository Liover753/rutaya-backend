function Footer() {

  return (

    <footer className="rutaya-footer">

      <div className="container">

        <div className="row g-4">

          {/* BRAND */}
          <div className="col-lg-4">

            <h2 className="footer-logo">
              RUTAYA
            </h2>

            <p className="footer-text">

              Plataforma turística inteligente
              para descubrir Ayacucho mediante
              rutas culturales, gastronómicas
              y experiencias únicas.

            </p>

          </div>


          {/* LINKS */}
          <div className="col-lg-4">

            <h5 className="footer-title">
              Navegación
            </h5>

            <ul className="footer-links">

              <li>
                <a href="/">
                  Inicio
                </a>
              </li>

              <li>
                <a href="/rutas">
                  Rutas inteligentes
                </a>
              </li>

              <li>
                <a href="/admin/login">
                  Administración
                </a>
              </li>

            </ul>

          </div>


          {/* CONTACTO */}
          <div className="col-lg-4">

            <h5 className="footer-title">
              Contacto
            </h5>

            <p className="footer-text">
              Ayacucho, Perú
            </p>

            <p className="footer-text">
              turismo_rutaya@gmail.com
            </p>

            <p className="footer-text">
              +51 924 099 662
            </p>

          </div>

        </div>


        {/* COPYRIGHT */}
        <div className="footer-bottom">

          <p>

            © 2026 RUTAYA —
            Turismo inteligente en Ayacucho

          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;

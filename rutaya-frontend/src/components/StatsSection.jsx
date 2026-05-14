function StatsSection({
  totalLugares,
  totalCategorias,
}) {

  const stats = [

    {
      numero: `${totalLugares}+`,
      texto: "Lugares turísticos",
    },

    {
      numero: "9+",
      texto: "Rutas inteligentes",
    },

    {
      numero: `${totalCategorias}`,
      texto: "Categorías turísticas",
    },

    {
      numero: `${totalLugares}+`,
      texto: "Experiencias disponibles",
    },
  ];

  return (

      <section className="stats-section">

        <div className="stats-wrapper">

          <div className="row g-2">

            {stats.map((stat, index) => (

              <div
                className="col-6 col-lg-3"
                key={index}
              >

                <div className="stat-card reveal">

                  <h3>
                    {stat.numero}
                  </h3>

                  <p>
                    {stat.texto}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>
  );
}

export default StatsSection;

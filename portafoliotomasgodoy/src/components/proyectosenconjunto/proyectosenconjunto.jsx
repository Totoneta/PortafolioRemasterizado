import './proyectosenconjunto.css'

export default function ProyectosEnConjunto() {

    return (
        <section className="proyectosenconjuntocontainer">
            <h3>PROYECTOS EN EQUIPO</h3>

            <div className="proyectosenconjuntocontainerthelobby">
                <img src="/imgs/the-lobby-logo.png" alt="THE LOBBY" />
                <div className="proyectosenconjuntocontainerthelobbytexto">
                    <h2>THE LOBBY</h2>
                    <span>Actualmente formo parte de un proyecto colaborativo con un equipo de profesionales de Málaga, en el cual estamos desarrollando una aplicación destinada a crear una comunidad en línea para gamers, de tipo blog.<br></br> Me desempeño como único desarrollador en el proyecto, utilizando tecnologías como HTML, CSS, TypeScript, React, Redux, Axios, Django, Django Rest Framework (DRF) y JWT para implementar funcionalidades interactivas y seguras.<br></br> Mi rol incluye la creación de interfaces de usuario, gestión de estados y desarrollo de la API, asegurando una experiencia fluida y escalable para los usuarios.</span>
                </div>
            </div>

        </section>
    )
}
import './misestudiostarjeta.css'


export default function MisEstudiosTarjeta({titulo, institucion, fecha}) {

    return (
        <section className="misestudiostarjetacontainer">
            <h3>{titulo}</h3>
            <h4>{institucion}</h4>
            <span>{fecha}</span>
        </section>
    )
}
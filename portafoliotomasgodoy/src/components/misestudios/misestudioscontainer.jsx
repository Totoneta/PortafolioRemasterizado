import './misestudioscontainer.css'
import { estudios } from './../../data/estudios'
import MisEstudiosTarjeta from './misestudiostarjeta/misestudiostarjeta'


export default function MisEstudiosContainer() {

    return (
        <section className="misestudioscontainer" id='misestudioscontainer'>
            <section className="misestudioscontainercontainer">
                {
                    estudios.map((e) => {
                        return <MisEstudiosTarjeta key={e.id} titulo={e.titulo} institucion={e.institucion} fecha={e.fecha} />
                    })
                }
            </section>
        </section>
    )
}
import './misestudioscontainer.css'
import { estudiosfinalizados, estudiosproximos } from './../../data/estudios'
import MisEstudiosTarjeta from './misestudiostarjeta/misestudiostarjeta'


export default function MisEstudiosContainer() {

    return (
        <section className="misestudioscontainer" id='estudios'>
            <section className="misestudioscontainercontainer">
                {
                    estudiosfinalizados.map((e) => {
                        return <MisEstudiosTarjeta key={e.id} titulo={e.titulo} institucion={e.institucion} fecha={e.fecha} />
                    })
                }
                {
                    estudiosproximos.map((e) => {
                        return <MisEstudiosTarjeta key={e.id} titulo={e.titulo} institucion={e.institucion} fecha={e.fecha} />
                    })
                }
            </section>
        </section>
    )
}
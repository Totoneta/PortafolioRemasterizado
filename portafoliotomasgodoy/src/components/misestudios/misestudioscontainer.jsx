import './misestudioscontainer.css'
import { estudiosfinalizados, estudiosproximos } from './../../data/estudios'
import MisEstudiosTarjeta from './misestudiostarjeta/misestudiostarjeta'


export default function MisEstudiosContainer() {

    return (
        <section className="misestudioscontainer" id='estudios'>
            <section className="misestudioscontainercontainer">
                <div className="misestudioscontainerfinalizados">
                    <h3><img src="./imgs/check.png" alt="" />Estudios Completados</h3>
                    {
                        estudiosfinalizados.map((e) => {
                            return <MisEstudiosTarjeta key={e.id} titulo={e.titulo} institucion={e.institucion} fecha={e.fecha} />
                        })
                    }
                </div>
                <div className="misestudioscontainerproximos">
                    <h3>Estudios Próximos</h3>
                    {
                        estudiosproximos.map((e) => {
                            return <MisEstudiosTarjeta key={e.id} titulo={e.titulo} institucion={e.institucion} fecha={e.fecha} />
                        })
                    }
                </div>
            </section>
        </section>
    )
}
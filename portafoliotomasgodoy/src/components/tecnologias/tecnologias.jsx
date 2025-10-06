import './tecnologias.css'
import {
    tecnologiasbackend,
    tecnologiasfrontend,
    tecnologiasenequipo,
    estudiandoactualmente
} from './../../data/tecnologias.js'

export function Tecnologias() {


    return (
        <div id='tecnologias' className="sobremitecnologiascontainer">
            <ul className="sobremitecnologiassubcontainer">

                <div className='sobremitecnologiacontainercard'>
                    <h3>Front-End</h3>
                    {
                        tecnologiasfrontend.map((e) => {
                            return (
                                <li key={e.id} className="sobremitecnologia">
                                    <img src={e.url} alt={e.nombre} />
                                </li>
                            )
                        })
                    }
                </div>

                <div className='sobremitecnologiacontainercard'>
                    <h3>Back-End</h3>
                    {
                        tecnologiasbackend.map((e) => {
                            return (
                                <li key={e.id} className="sobremitecnologia">
                                    <img src={e.url} alt={e.nombre} />
                                </li>
                            )
                        })
                    }
                </div>

                <div className='sobremitecnologiacontainercard'>
                    <h3>Control de versiones</h3>
                    {
                        tecnologiasenequipo.map((e) => {
                            return (
                                <li key={e.id} className="sobremitecnologia">
                                    <img src={e.url} alt={e.nombre} />
                                </li>
                            )
                        })
                    }
                </div>

                <div className='sobremitecnologiacontainercard'>
                    <h3>Estudiando</h3>
                    {
                        estudiandoactualmente.map((e) => {
                            return (
                                <li key={e.id} className="sobremitecnologia">
                                    <img src={e.url} alt={e.nombre} />
                                </li>
                            )
                        })
                    }
                </div>

            </ul>
        </div>
    )
}
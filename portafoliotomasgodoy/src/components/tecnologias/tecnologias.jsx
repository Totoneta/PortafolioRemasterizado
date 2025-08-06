import './tecnologias.css'
import { tecnologias } from './../../data/tecnologias.js'

export function Tecnologias() {


    return (
        <div className="sobremitecnologiascontainer">
            <ul className="sobremitecnologiassubcontainer">
                {
                    tecnologias.map((e) => {
                        return (
                            <li key={e.id} className="sobremitecnologia">
                                <img src={e.url} alt={e.nombre} />
                            </li>
                        )
                    })
                }

            </ul>
        </div>
    )
}
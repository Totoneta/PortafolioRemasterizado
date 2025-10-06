import { Link } from 'react-router-dom'
import './proyectocard.css'
import { proyectos } from '../../data/proyectos'
import {
    tecnologiasbackend,
    tecnologiasfrontend,
    tecnologiasenequipo
} from '../../data/tecnologias'
import { useState } from 'react';

export default function ProyectoCard() {

    const tecnologias = [...tecnologiasbackend, ...tecnologiasfrontend, ...tecnologiasenequipo];

    const [videoimagen, setVideoImagen] = useState(false)

    return (
        <section className='proyectocardcontainer' id='proyectos'>
            {
                proyectos.map((e) => {

                    return (
                        <div key={e.id} className="proyectocardsubcontainer">

                            <img src={e.imgpath} alt={e.titulo} />

                            <aside className='proyectocards'>
                                <div className="proyectocardcontainertexto">
                                    <h3>{e.titulo}</h3>
                                    <span>{e.descripcion}</span>
                                    <div className="proyectocardcontainerresponsivo">
                                        {
                                            e.responsive ?
                                                <div className="proyectocardcontainerresponsivocontainer">
                                                    <img src='/svg/desktop.svg' alt='Desktop' title='Desktop' />
                                                    <img src='/svg/phoneipad.svg' alt='Phone & Ipad' title='Phone & Ipad' />
                                                </div>
                                                :
                                                <div className="proyectocardcontainerresponsivocontainer">
                                                    <img src='/svg/desktop.svg' alt='Desktop' title='Desktop' />
                                                </div>
                                        }
                                    </div>
                                    <div className="proyectocardcontainertecnologias">
                                        {
                                            e.tech.map((ele) => {
                                                return tecnologias.map((tecnologia) => {
                                                    if (ele === tecnologia.nombre) {
                                                        return (
                                                            <img key={tecnologia.id} src={tecnologia.url} alt={tecnologia.nombre} title={tecnologia.nombre} />
                                                        )
                                                    }
                                                    return null;
                                                })
                                            })
                                        }
                                    </div>
                                    <Link to={e.enalceaproyecto} target='_blank'>Visitar Proyecto</Link>
                                </div>


                            </aside>

                        </div>
                    )
                })
            }
        </section>
    )
}
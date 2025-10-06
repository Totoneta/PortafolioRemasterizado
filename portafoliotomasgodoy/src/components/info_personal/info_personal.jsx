import { Link } from 'react-router-dom'
import './info_personal.css'

export function InfoPersonal() {

    return (
        <section className="sobremicontainer">
            <div className="sobremifotocontainer">
                <img src="./imgs/yo.webp" alt="Tomás Godoy" />
            </div>


            <div className="sobremitextocontainer">
                <h1>Tomás Godoy</h1>
                <span className='disponibledesc'>Disponible para trabajar</span>
                <p>Teléfono personal: <strong>+549-0341-2006991</strong></p>
                <p>Correo electrónico: <strong>totogodoydev@hotmail.com</strong></p>
                <p>País de residencia: <img src="./imgs/argentina-flag.webp" alt="Argentina" /><strong>Argentina</strong> </p>
                <p>Provincia: <strong>Santa Fe</strong> </p>
                <p>Ciudad: <strong>Rosario</strong> </p>
                <p>C.P. : <strong>2000</strong> </p>
                <div className="redes">
                    <Link target='_blank' to='https://www.linkedin.com/in/tom%C3%A1s-godoy-830b912b1/'>
                        <img src="./svg/linkedin.png" alt="Linkedin" />
                    </Link>
                    <Link target='_blank' to='https://github.com/Totoneta'>
                        <img src="./svg/github.png" alt="GitHub" />
                    </Link>
                </div>
            </div>
        </section>
    )
}
import { Link } from 'react-router-dom'
import './info_personal.css'

export function InfoPersonal() {

    return (
        <section className="sobremicontainer" id='sobremicontainer'>
            <div className="sobremifotocontainer">
                <img src="./imgs/yo.webp" alt="Tomás Godoy" />
            </div>


            <div className="sobremitextocontainer">
                <h1>Tomás Godoy</h1>
                <span className='disponibledesc'>Disponible para trabajar</span>
                <p>Nacionalidad: <img src="./imgs/argentina-flag.webp" alt="Argentina" /><strong>Argentina</strong> y <img src="./imgs/espana-flag.webp" alt="España" /><strong>Española</strong> </p>
                <p>Teléfono personal: +549-0341-2006991</p>
                <p>Correo electrónico: totogodoydev@hotmail.com</p>
                <div className="redes">
                    <Link to='https://www.linkedin.com/in/tom%C3%A1s-godoy-830b912b1/'>
                    <img src="./svg/linkedin.png" alt="Linkedin" />
                    </Link>
                    <Link to='https://github.com/Totoneta'>
                    <img src="./svg/github.png" alt="GitHub" />
                    </Link>
                    <img src="" alt="" />
                </div>
            </div>
        </section>
    )
}
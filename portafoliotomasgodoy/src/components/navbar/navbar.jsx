import { useState } from 'react'
import './navbar.css'

export default function Navbar() {

    const [show, setShow] = useState(false);
    const [navbarshow, setNavbarShow] = useState(false)

    const ShowHide = () => {
        setShow(!show) 
        setNavbarShow(!navbarshow)}

    return (
        <nav className="navbarcontainer">
            {show === false ?
                <svg onClick={ShowHide} className='navbarshowimg' xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    fill="currentColor" viewBox="0 0 24 24"
                    transform="rotate(180)">
                    <path d="M6 18h12v2H6zM17.29 8.29 13 12.59V4h-2v8.59l-4.29-4.3-1.42 1.42 6.71 6.7 6.71-6.7z"></path>
                </svg>
                :
                <svg onClick={ShowHide} className='navbarshowimg' xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    fill="currentColor" viewBox="0 0 24 24" >
                    <path d="M6 18h12v2H6zM17.29 8.29 13 12.59V4h-2v8.59l-4.29-4.3-1.42 1.42 6.71 6.7 6.71-6.7z"></path>
                </svg>
            }
            <ul className={navbarshow === false ? "navbarcontainerlist" : "navbarcontainerlist invisiblenav"}>
                <li className="navbarcontaineritem"><a href="#sobremi">Sobre Mí</a></li>
                <li className="navbarcontaineritem"><a href="#tecnologias">Tecnologías</a></li>
                <li className="navbarcontaineritem"><a href='#proyectos'>Proyectos</a></li>
                <li className="navbarcontaineritem"><a href='#estudios'>Estudios</a></li>
            </ul>
        </nav>
    )
}
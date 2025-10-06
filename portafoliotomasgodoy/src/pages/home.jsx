import { InfoPersonal } from '../components/info_personal/info_personal'
import MisEstudiosContainer from '../components/misestudios/misestudioscontainer'
import ProyectoCard from '../components/proyectocard/proyectocard'
import { Tecnologias } from '../components/tecnologias/tecnologias'
import {Descripcion} from '../components/descripcion/descripcion'

export function HomePage() {

    return (
        <>
            <InfoPersonal />
            <Descripcion />
            <Tecnologias />
            <ProyectoCard />
            <MisEstudiosContainer />
        </>
    )
}
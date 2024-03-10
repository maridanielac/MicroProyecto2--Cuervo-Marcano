import { Usuario } from '../assets/models/usuario';
import styles from './Tarjeta.module.css';


interface Props{
    usuario: Usuario, 
}


export default function Tarjeta({usuario}: Props){
    return(
        <section className={styles.tarjeta}>
            <h2 className={styles.icono}>{usuario.ID}</h2>
            <h2>{usuario.nombre}</h2>
            <h6>{usuario.descripcion}</h6>
            <button>Ver Videojuegos</button>
        </section>
    )
}

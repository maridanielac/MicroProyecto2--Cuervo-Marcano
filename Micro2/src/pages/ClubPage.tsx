import Tarjeta from '../Tarjeta/Tarjeta'; // Import the 'Tarjeta' component

function ClubPage() {
  const usuario = [
    {
      "ID": "1",
      "nombre": "Club de Aventureros",
      "descripcion": "Explora lugares misteriosos y descubre tesoros ocultos con otros entusiastas de la aventura.",
      "videojuegos": ["1", "3", "11"]
    },
    {
      "ID": "2",
      "nombre": "Club de Estrategia",
      "descripcion": "Reúnete con estrategas brillantes para debatir tácticas, resolver enigmas y conquistar mundos virtuales.",
      "videojuegos": ["4", "15", "16"]
    },
    {
      "ID": "3",
      "nombre": "Club de Constructores",
      "descripcion": "Comparte tus creaciones en Minecraft, diseña estructuras asombrosas y colabora en proyectos épicos.",
      "videojuegos": ["7", "8", "14"]
    },
    {
      "ID": "4",
      "nombre": "Club de Fútbol Virtual",
      "descripcion": "Forma parte de un equipo virtual, compite en torneos y demuestra tus habilidades en FIFA 22.",
      "videojuegos": ["9", "10", "18"]
    },
    {
      "ID": "5",
      "nombre": "Club de Cazadores de Zombis",
      "descripcion": "Únete a otros supervivientes en la lucha contra hordas de no muertos en juegos como Left 4 Dead o Resident Evil.",
      "videojuegos": ["2", "13", "17"]
    }
  ]
 
 
 
 
 
import { Link } from 'react-router-dom'; // Import the 'Link' component from the appropriate package

// Update the 'Usuario' type to allow for an array of strings for the 'videojuegos' property
interface Usuario {
    ID: string;
    nombre: string;
    descripcion: string;
    videojuegos: string[];
}

return (
    <>
        <div>CLUB</div>
        <Link to="/">Go to Home</Link> {/* Add the appropriate link destination */}
        <section
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "9px",
                padding: "20px",
            }}
        >
            {usuario.map((usuario, index) => (
                <Tarjeta
                    key={usuario.ID + index}
                    usuario={usuario}
                />
            ))}
        </section>
    </>
)
}

export default ClubPage;
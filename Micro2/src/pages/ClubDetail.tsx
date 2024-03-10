import { useLocation, useParams } from 'react-router-dom';
import "./ProductDetail.css"

function ClubDetail() {
  const { id } = useParams();
  const location = useLocation();
  const { usuario } = location.state;

  const usuarios = usuario.find((usuario) => usuario.id === parseInt(id));

  if (!usuarios) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <div>
      <div id='title'>DETALLES DEL PRODUCTO</div>
      <div className='details'>
      <div id='info'>
            <p>ID del producto: {usuarios.id}</p>
            <p>Nombre: {usuarios.name}</p>
        </div>
      </div>
    </div>
  );
}

export default ClubDetail;
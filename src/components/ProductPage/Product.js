import "./styles.scss";
import img from "../../assets/images/sin-imagen.jpeg";

const Product = ({ product }) => {

  return (
    <div className="product-container">

      {
        product && product.map((att, index) => (
          <div className="product-content" key={index}>
            <div className="container-img">
              <img
                className="product-image product-responsive"
                src={att.image == null ? img : att.image.src}
                alt={att.handle}
              />
            </div>
            <div className="product-section product-responsive">
              <div className="product-id">
                Código de Catálogo: {att.id}
              </div>
              <h1 className="product-title">{att.title}</h1>
              <ul className="product-attributes">
                <li>Precio: {att.variants[0].price}</li>
                <li>Vendedor: {att.vendor}</li>
              </ul>
            </div>
          </div>
        ))
      }

    </div>
  );

};

export default Product
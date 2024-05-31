//Product
import one from "../images/one.jpg"
import two from "../images/two.jpg"
import three from "../images/three.jpg"
function Product()
{
  return(
    <div className="product">
        <div className="product-one">
            <img src={one} alt=""/>
            <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
        </div>
        <div className="product-one">
            <img src={two} alt=""/>
            <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
        </div>
        <div className="product-one">
            <img src={three} alt=""/>
            <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
        </div>

    </div>
  )
}

export default Product
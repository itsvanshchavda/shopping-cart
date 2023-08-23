






import {React , useContext} from 'react'
import { Product } from '../shop/Product'
import { ShopContext } from '../../context-api/shop-context';

const CartItem = (props) => {

    const { id, productName, price, productImage } = props.data;
    const { cartItems , addToCart ,  removeFromCart , updateCartItemCount } = useContext(ShopContext);

  return (
    <div className='cartItem'> 
        <img src={productImage} alt="productImages" />
        <div className="description">
            <p><b>{productName}</b></p>
            <p>${price}</p>
            <div className="countHandler">
                <button onClick={() => removeFromCart (id)}> - </button>
                <input type="number" value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value),id)} /> 
                <button  onClick={() => addToCart (id)} > + </button>
            </div>
        </div>
    </div>

  )
}

export default CartItem
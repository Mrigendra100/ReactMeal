import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import { useContext } from 'react';
import CartContext from '../../store/cart-context'


const Cart = (props) => {

    const cartCtx =  useContext(CartContext);
    
    const totalAmount = `$ ${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length >0 ;

    const CartItemRemoveHandler = (id) => {};

    const CartItemAddHandler = (item) => {};

    const cartItems = (

        
        
        <ul className={classes['cart-items']}>
            {cartCtx.items.map((item)=> (
                <CartItem key={item.id} name={item.name} amount ={item.amount} price={item.price} 
                 onRemove={CartItemRemoveHandler.bind(null, item.id)}   
                 onAdd = {CartItemAddHandler.bind(null, item)}
                 />
              )  )

            }

        </ul>


    );

    return(
        <Modal onClose={props.onHideCart}>
            {cartItems}
            <div className={classes.total} >
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onHideCart} >Close</button>
         {  hasItems &&
          <button className={classes.button} onClick={props.onHideCart} >Order
          </button>}

        </div>

        </Modal>
    )


};


export default Cart;
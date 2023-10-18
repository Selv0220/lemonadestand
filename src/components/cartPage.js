import { useDispatch, useSelector } from "react-redux";

import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../features/cartSlice";

import {
  MDBBtn,
  MDBContainer,
  MDBFooter,
  MDBIcon,
} from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import { useEffect } from "react";

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };
  
  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));

  };

  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

    return (
      <div>
        <div className="cart-container">
          <div className="titles">
            <h3 className="product-title">PRODUCT</h3>
            <h3 className="price">PRICE</h3>
            <h3 className="quantity">QUANTITY</h3>
            <h3 className="total">TOTAL</h3>
          </div>
          <div className="cart-items">
            {cart.cartItems.map((cartItem) => (
                <div className="cart-item" key={cartItem.id}>
                  <div className="cart-product">
                    <img src={cartItem.img} alt={cartItem.title} />
                    <div>
                      <h3>{cartItem.title}</h3>
                      <button
                      type="button"
                      className="btn btn-warning btn-sm me-1 mb-2"
                      data-mdb-toggle="tooltip"
                      title="Remove item"
                      onClick={() =>
                        handleRemoveFromCart(cartItem)}>
                      <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </div>
                  <div className="cart-product-price">${cartItem.price}</div>
                  <div className="cart-product-quantity">
                    <button onClick={() => handleDecreaseCart(cartItem)}>
                      -
                    </button>
                    <div className="count" style={{padding: "0.7rem"}}>{cartItem.cartQuantity}</div>
                    <button onClick={() => handleIncreaseCart(cartItem)}>+</button>
                  </div>
                  <div className="cart-product-total-price">
                    ${cartItem.price * cartItem.cartQuantity}
                  </div>
                </div>
              ))}
          </div>
          <div className="cart-summary">
            <div className="cart-checkout">
              <div className="subtotal fw-light">
                <span>Summary</span>
                <span className="amount">${cart.totalPrice}</span>
              </div>
             
              
              <button className="clear-btn fw-light fa-regular" onClick={() => handleClearCart()}>
              Clear Cart
              </button>

              <button className="fw-light fa-regular">Check out</button>
              <div className="continue-shopping">
                <Link to="/products">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16">
                      <path
                        fillRule="evenodd"
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                      />
                  </svg>
                    <span>Continue Shopping</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <MDBFooter className='footer text-center text-white' style={{ backgroundColor: '#f1f1f1' }}>
                <MDBContainer className='pt-4'>
                  <section className='mb-4'>
                    <MDBBtn
                      rippleColor="dark"
                      color='link'
                      floating
                      size="lg"
                      className='text-dark m-1'
                      href='#!'
                      role='button'>
                      <MDBIcon fab className='fab fa-facebook-f' />
                    </MDBBtn>

                    <MDBBtn
                      rippleColor="dark"
                      color='link'
                      floating
                      size="lg"
                      className='text-dark m-1'
                      href='#!'
                      role='button'>
                      <MDBIcon fab className='fa-google' />
                    </MDBBtn>

                    <MDBBtn
                      rippleColor="dark"
                      color='link'
                      floating
                      size="lg"
                      className='text-dark m-1'
                      href='#!'
                      role='button'>
                      <MDBIcon fab className='fa-instagram' />
                    </MDBBtn>
                  </section>
                </MDBContainer>

                <div className='Copy fa-regular text-center text-white p-3'>
                  © 2023 Copyright:
                  <a className='text-white fa-regular' href=''>
                    Lemo.com
                  </a>
                </div>
              </MDBFooter>
        </div>
      );
    };
    
    export default CartPage;
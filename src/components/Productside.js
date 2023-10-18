import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBFooter,
  MDBIcon,
} from 'mdb-react-ui-kit';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';

export default function App() {
    const {items, status} = useSelector(state => state.products);
    const dispatch = useDispatch();

    const handleAddToCart =(product) => {
      dispatch(addToCart(product));
      /*history.push("/cart");*/
    };

return (

<div className="m-2">
    <MDBContainer>
       <MDBRow className="mb-3">
        {items.map((product) => (
        <MDBCol key={product.id} size="md">
          <MDBCard>
            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
              <MDBCardImage src={product.img} fluid alt='...' />
              <a>
                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
              </a>

              </MDBRipple>
              <MDBCardBody>
                <MDBCardTitle>{product.title}</MDBCardTitle>
                <MDBCardText>${product.price}</MDBCardText>
                <MDBBtn  onClick={() => handleAddToCart(product)} type="button" class ="btn btn-outline-success">
                        Add
                </MDBBtn>
              </MDBCardBody>
          </MDBCard>
        </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>

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
}
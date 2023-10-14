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
import {MDBTypography} from 'mdb-react-ui-kit';
import Video from "../assets/Lemon.mov";

export default function App() {
    const items = useSelector((state) => state.allCart.items);
    const dispatch = useDispatch();

return (

<div className="m-2">
    <video className="img-fluid rounded" autoPlay loop muted>
      <source
      src={Video}
      type="video/mp4"
      />
    </video>
    
    <figure className='gradient_background text-center mb-5 text-dark rounded'>
      <MDBTypography blockquote> <br></br>
        <h2 className='fw-light fa-regular'>DID YOU KNOW?</h2>
      </MDBTypography>
      
      <figcaption className='blockquote-footer mb-0 text-dark'> Lemonade boosts the immune system
                    Not only does it provide us with our daily source of Vitamin C,
                    <br></br> but the benefits of lemonade are also seen in its antioxidizing qualities.
                    Lemons provide antioxidants, keeping us healthy and able to battle sickness.
        <br></br>
        <cite title='Source Title'>As a bonus, antioxidants also help keep our skin fresh!</cite>
      </figcaption>
    </figure>
    
    <MDBContainer>
      <MDBRow className="mb-3">
        {items.map((item) => (
        <MDBCol key={item.id} size="md">
          <MDBCard>
            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
              <MDBCardImage src={item.img} fluid alt='...' />
              <a>
                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
              </a>

              </MDBRipple>
              <MDBCardBody>
                <MDBCardTitle>{item.title}</MDBCardTitle>
                <MDBCardText>{item.price}</MDBCardText>
                <MDBBtn onClick={() => dispatch(addToCart(item))}>
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
            role='button'
          >
            <MDBIcon fab className='fab fa-facebook-f' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-google' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-instagram' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-github' />
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
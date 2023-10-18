import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
  MDBBadge,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function App() {

  const {totalQuantity} = useSelector((state) => state.cart);

  return (
    <MDBNavbar className='Navbar'>
        <MDBContainer fluid>
            <MDBNavbarBrand className='text-white fw-light fa-regular fa-lemon'> Lemo </MDBNavbarBrand>
                <span>
                  <Link className='Home text-white fw-light fa-regular' to="/">Home</Link>
                  </span>
                  <span>
                    <Link className='Products text-white fw-light fa-regular' to="/products">Products</Link>
                  </span>
                <MDBBtn color="linear-gradient(to right, rgb(237, 222, 5), rgb(226, 102, 40))">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16" color='yellow'>
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                  </svg>
                  <MDBBadge
                    pill
                    color="danger"
                    notification
                    style={{fontSize: "10px"}}>
                    <Link className="cart-quantity" to="/cart">{totalQuantity}</Link>
                  </MDBBadge>
                </MDBBtn>
        </MDBContainer>
    </MDBNavbar>
  );
}
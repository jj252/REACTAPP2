
import NucampLogo from '../app/assets/img/logo.png';
import NewLogo from '../app/assets/img/logo2.jpg'
import {useState} from 'react';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem
} from 'reactstrap';
import { NavLink } from "react-router-dom";
import style from '../app/shared/StudentList.module.css'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    return(
    <Navbar color='dark'  sticky='top' expand='md'>
    
         <NavbarBrand className='ms-5' href='/'>
             <img src={NewLogo} alt='nucamp logo' className="float-start" />
             <h1 className={style.headerFont}>Fount</h1> 
         </NavbarBrand>
         <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
         <Collapse isOpen={menuOpen} navbar>
            <Nav className="ms-auto" navbar>
                <NavItem>
                    <NavLink className='nav-link' to='/'>
                         Home
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='nav-link' to='/directory'>
                     Portfolio
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='nav-link' to='/about'>
                         Blog
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='nav-link' to='/contact'>
                         ContactUs
                    </NavLink>
                </NavItem>
                
            </Nav>
        </Collapse>
 </Navbar>)
}

export default Header;
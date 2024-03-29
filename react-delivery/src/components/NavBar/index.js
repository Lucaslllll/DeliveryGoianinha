import React, {useState, useEffect} from 'react';

import './style.css';
import { isAuthenticated } from "../../services/auth";
import { logout } from '../../services/auth';

import logotipo from '../../assets/img/logo.png';

//============ Import Link ===========/
import {Link} from 'react-router-dom';

import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

function NavBar(){
    const [isOpen, setIsOpen] = useState(false);
    const [isLogin] = useState(isAuthenticated()); 
    const [bgNavBar, setBgNavBar] = useState('bgOrange');
    
    useEffect(() => handleBgMenu(isLogin), [isLogin])

    function toggle() {
        setIsOpen(!isOpen);
    }
    
    function handleLogout(){
        logout();
        document.location.reload();
    }
    
    function handleBgMenu(isLogin){
        if(isLogin){
            setBgNavBar('bgWhite')
        }
        else{
            setBgNavBar('bgOrange')
        }
    }
    
    function handleProfileStatus(e){
        if(e){
            return(
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret className="text-color">
                        Perfil
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem className="dropItem">
                            <div>Configurações</div>
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem className="exit">
                            <div onClick={() => handleLogout()}>
                                    Sair
                            </div>
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>                   
            )
        }
        else{
            return(
                <NavItem>
                    <NavLink href="#" className="text-color actived">
                        Login
                    </NavLink>
                </NavItem>
            )
        }
    }

    return (
        <Navbar light fixed="top" expand="md" className={`bg-menu ${bgNavBar}`}>
            <Container>
                <NavbarBrand>
                    <Link className="text-color logo" to="/Home">DeliveryGO</Link>
                </NavbarBrand>
                <NavbarToggler onClick={() => toggle()} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto item" navbar>
                        {handleProfileStatus(isLogin)}
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>

    );
}


export default NavBar;
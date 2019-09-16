import React, {useState} from 'react';

import './style.css';
import { isAuthenticated } from "../../services/auth";
import { logout } from '../../services/auth';

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
    
    function toggle() {
        setIsOpen(!isOpen);
    }

    function handleLogout(){
        logout();
        document.location.reload();
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
        <div>
            <Navbar light fixed="top" expand="md" className="bg-menu" >
                <Container>
                    <NavbarBrand href="/" className="text-color logo">DeliveryApp</NavbarBrand>
                    <NavbarToggler onClick={() => toggle()} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto item" navbar>
                            {handleProfileStatus(isLogin)}
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
    );
}


export default NavBar;
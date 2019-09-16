import React from 'react';

import './style.css';

import { Redirect } from 'react-router-dom';

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

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            isLogin: props.isLogin,
            redirect: false,
        };

    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    handleLogout(){
        this.state.redirect = true
    }

    handleProfileStatus(e){
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
                            <div onClick={() => logout()}>
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

    renderRedirect(){
        if (this.state.redirect){
            return <Redirect to="/Home" />
        }
    }

    render() {
        return (
            <div>
                {this.renderRedirect()}
                <Navbar light fixed="top" expand="md" className="bg-menu" >
                    <Container>
                        <NavbarBrand href="/" className="text-color logo">DeliveryApp</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto item" navbar>
                                {this.handleProfileStatus(this.state.isLogin)}
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}
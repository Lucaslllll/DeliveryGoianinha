import React from 'react';

import './style.css';

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
        };

    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }


    render() {
        return (
            <div>
                <Navbar light fixed="top" expand="md" className="bg-menu" >
                    <Container>
                        <NavbarBrand href="/" className="text-color logo">DeliveryApp</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto item" navbar>
                                { this.state.isLogin !== null
                                ?
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
                                            <div>Sair</div>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                :
                                <NavItem>
                                    <NavLink href="#" className="text-color actived">
                                        Login
                                    </NavLink>
                                </NavItem>
                            }
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}
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
                <Navbar light expand="md" className="bg-menu" >
                    <Container>
                        <NavbarBrand href="/" className="text-color logo">DeliveryApp</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto item" navbar>
                                <NavItem>
                                    <NavLink href="#" className="text-color">
                                        Inicio
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" className="text-color">
                                        Login
                                    </NavLink>
                                </NavItem>
                                {/*<UncontrolledDropdown nav inNavbar>*/}
                                {/*    <DropdownToggle nav caret className="text-color">*/}
                                {/*        Perfil*/}
                                {/*    </DropdownToggle>*/}
                                {/*    <DropdownMenu right>*/}
                                {/*        <DropdownItem>*/}
                                {/*            Configurações*/}
                                {/*        </DropdownItem>*/}
                                {/*        <DropdownItem divider />*/}
                                {/*        <DropdownItem className="exit">*/}
                                {/*            <div>Sair</div>*/}
                                {/*        </DropdownItem>*/}
                                {/*    </DropdownMenu>*/}
                                {/*</UncontrolledDropdown>*/}
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}
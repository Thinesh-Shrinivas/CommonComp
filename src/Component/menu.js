import React,{ useState, useEffect } from 'react';
import { Nav, NavItem, NavLink, Navbar, NavbarBrand, NavbarToggler, Collapse, Container } from 'reactstrap';

function MainMenu(props){
    const [isOpen, changeState] = useState(false);
    const toggle = ()=> changeState(!isOpen);
    return(
        <React.Fragment>
            {Object.keys(props.dataParsed).length > 1 ?
            <Navbar color="light" light expand="md">
                <Container>
                    <NavbarBrand href={props.dataParsed.navBrand.href}>{props.dataParsed.navBrand.navBrandData}</NavbarBrand>
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                {props.dataParsed.navItem.map((firstArray,index) =>
                                <NavItem key={index}>
                                    <NavLink href={firstArray.href}>{firstArray.navdatItem}</NavLink>
                                </NavItem>
                                )}
                            </Nav>
                        </Collapse>
                </Container>
            </Navbar>
            :''}
        </React.Fragment>
    )
}

export default MainMenu;
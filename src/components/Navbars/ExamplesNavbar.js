
import React from "react";
import { Link, withRouter } from "react-router-dom";
// nodejs library that concatenates strings
import classnames from "classnames";

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

function ExamplesNavbar(props) {
  console.log("HEADER PROPS", props)
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 99 ||
        document.body.scrollTop > 99
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 100 ||
        document.body.scrollTop < 100
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

  const hideHeader = props.location.pathname.includes("chat");
  if (hideHeader) {
    return null;
  } else {
    return (
      <Navbar
        className={classnames("fixed-top", navbarColor)}
        color-on-scroll="300"
        expand="lg"
      >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              data-placement="bottom"
              to="/"
              title="EASY-Q Home"
              tag={Link}
            >
              {/* <img className="logo" src={require("../../assets/img/ELogo1024.png")} /> */}
              <img className="logo" src={require("../../assets/img/ELogo/500w/Elogo-500.png")} />
            EASY-Q
          </NavbarBrand>
            <button
              aria-expanded={navbarCollapse}
              className={classnames("navbar-toggler navbar-toggler", {
                toggled: navbarCollapse
              })}
              onClick={toggleNavbarCollapse}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            navbar
            isOpen={navbarCollapse}
          >
            <Nav navbar>
              <NavItem onClick={() => setNavbarCollapse(!navbarCollapse)} className="d-lg-none d-md-none d-block">
                <NavLink to="/" tag={Link}>
                  Home
              </NavLink>
              </NavItem>
              <NavItem onClick={() => setNavbarCollapse(!navbarCollapse)}>
                <NavLink to="/my-store" tag={Link}>
                  My Store
              </NavLink>
              </NavItem>
              <NavItem onClick={() => setNavbarCollapse(!navbarCollapse)}>
                <NavLink to="/events" tag={Link}>
                  Events
              </NavLink>
              </NavItem>
              {/* <NavItem>
              <NavLink to="/schedule" tag={Link}>
              Schedule
              </NavLink>
            </NavItem> */}
              <NavItem onClick={() => setNavbarCollapse(!navbarCollapse)}>
                <NavLink to="/messages" tag={Link}>
                  Messages
              </NavLink>
              </NavItem>
              <NavItem onClick={() => setNavbarCollapse(!navbarCollapse)}>
                <NavLink to="/profile" tag={Link}>
                  Profile
              </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/logout" tag={Link}>
                  Log Out
              </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default withRouter(ExamplesNavbar);

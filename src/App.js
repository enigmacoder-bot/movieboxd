import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Cards from "./components/Cards";

import Offcanvas from "react-bootstrap/Offcanvas";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/Cards.css";
import "./styles/App.css";
import logo from "./images/movieboxd-img.png";
import Footer from "./components/Footer";
import { useState } from "react";
// Themes
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes";
const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;
function App() {
  // state of theme
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const handleShow = () => {
    console.log("Started");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        {/* <div className="container"> */}
        {/* Nav Bar */}
        <>
          {["lg"].map((expand) => (
            <Navbar key={expand} expand={expand} className="mb-3">
              <Container fluid>
                <Navbar.Brand
                  href="#"
                  style={{ color: "blueviolet", fontWeight: "bold" }}
                  className="brand-name"
                >
                  <img src={logo} alt="logo" />
                  Movieboxd
                </Navbar.Brand>
                <Navbar.Toggle
                  aria-controls={`offcanvasNavbar-expand-${expand}`}
                  style={{ color: "orange" }}
                >
                  ☰
                </Navbar.Toggle>
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title
                      id={`offcanvasNavbarLabel-expand-${expand}`}
                    >
                      Menu
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                      <Nav.Link href="#action1" style={{ color: "grey" }}>
                        FILMS
                      </Nav.Link>
                      <Nav.Link href="#action2" style={{ color: "grey" }}>
                        LISTS
                      </Nav.Link>
                      <Nav.Link href="#action2" style={{ color: "grey" }}>
                        MEMBERS
                      </Nav.Link>
                      <Nav.Link href="#action2" style={{ color: "grey" }}>
                        JOURNAL
                      </Nav.Link>
                      <button onClick={() => themeToggler()}>Toggle</button>
                      {/* <NavDropdown
                      title="Dropdown"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    > */}
                      {/* <NavDropdown.Item href="#action3">
                        Action
                      </NavDropdown.Item> */}
                      {/* <NavDropdown.Item href="#action4">
                        Another action
                      </NavDropdown.Item> */}
                      {/* <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Something else here
                      </NavDropdown.Item>
                    </NavDropdown> */}
                    </Nav>
                    <Form className="d-flex">
                      <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                      />
                      <Button variant="outline-success">Search</Button>
                    </Form>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          ))}
        </>
        {/* Button */}
        {/* Text Section */}
        <div style={{ textAlign: "center" }} className="main-area">
          <img src={logo} alt="Main Logo" />
          <h1>Movieboxd</h1>
          <p>
            Track films you’ve watched. Save those you want to see. Tell your
            friends what’s good.
          </p>
        </div>
        <div
          className="start"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            className="start-btn"
            style={{ margin: "1rem" }}
            variant="success"
            onClick={() => handleShow}
          >
            Get Started - It's Free
          </Button>
        </div>
        {/* End of Button */}
        <Cards />
        {/* Footer */}
        <Footer />
        {/* </div> */}
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;

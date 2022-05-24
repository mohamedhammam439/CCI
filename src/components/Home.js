import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Logo2 from "../senaa.jpg";

const Home = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="أتصل بنا" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                   e-mail
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  whatsapp
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  التحديثات
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  المناقصات
                </NavDropdown.Item>
              </NavDropdown>{" "}
              <NavDropdown title="الخدمات" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                شكاوي و اقتراحات
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                الميزانيات
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                التحديثات
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                المناقصات
              </NavDropdown.Item>
            </NavDropdown>{" "}
              <NavDropdown title="الحسابات" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">الحسابات</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  الميزانيات
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  التحديثات
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  المناقصات
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link">الملف الشخصي</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <img alt="logo" className="nav-logo img-fluid" src={Logo2} />
        </Container>
      </Navbar>
      <div className="home">
        <h1>Home</h1>
      </div>
    </>
  );
};

export default Home;

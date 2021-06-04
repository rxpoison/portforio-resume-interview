import {useEffect, useState} from "react";

// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  Modal, 
  ModalHeader, 
  ModalBody, 
  ModalFooter,
  FormGroup,
  Label
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "./components/Header";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import { profiles, works } from "./components/profile"
import AboutMe from "./components/AboutMe";
import WorkHistory from "./components/WorkHistory";
import Portfolio from "./components/Portfolio";

function ProfilePage() {
  const [modal, setModal] = useState(false)
  useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  const toggle = () => setModal(!modal)
  
  return (
    <>
      <div className="wrapper">
        <ProfilePageHeader data={profiles()} />
        <div className="section">
          <Container>
            <div className="button-container">
              <Button className="btn-round mt-3" onClick={toggle} color="info" size="lg">
                Contact me
              </Button>
            </div>
            <AboutMe />
            <WorkHistory data={works()} />
            <Portfolio />
          </Container>
        </div>
        <DefaultFooter />
      </div>
      <div>

      <Modal isOpen={modal} toggle={toggle} className="">
        <ModalHeader toggle={toggle}>Contact me :D</ModalHeader>
        <ModalBody>
       
          <FormGroup className="text-th">
            <Row>
              <Col md="3" className="text-right">
                Name : 
              </Col>
              <Col md="9" className="pl-0">
                Chanathip Thongmont (ชนาธิป ทองมนต์)
              </Col>
            </Row>
          </FormGroup>
          <FormGroup className="text-th">
            <Row>
              <Col md="3" className="text-right">
                Phone : 
              </Col>
              <Col md="9" className="pl-0">
                (+66) 918636554
              </Col>
            </Row>
          </FormGroup>
          <FormGroup className="text-th">
            <Row>
              <Col md="3" className="text-right">
                Email : 
              </Col>
              <Col md="9" className="pl-0">
                rxpoison.ct@gmail.com
              </Col>
            </Row>
          </FormGroup>
          
          
        </ModalBody>
      </Modal>
    </div>
    </>
  );
}

export default ProfilePage;

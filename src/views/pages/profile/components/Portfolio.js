import { useState } from "react";
import {
  Row,
  Col
} from "reactstrap";

import printLabel from "assets/img/project/print-label.gif"
import stockRealtime from "assets/img/project/stock-realtime.gif"

function Portfolio(data) {
  const [pills, setPills] = useState("1");
  const TimelineWork = () => {
    return (
      <Row>
        <Col className="ml-auto mr-auto" md="12">
          <h4 className="title text-center">My Portfolio</h4>
        </Col>
        <Col md="12">
          <h5 className="title text-center my-0 pt-0">Amasscar</h5>
          <Row>
            <Col md="12" className="text-th">
              <h5 className="text-muted description mb-2">
                Amasscar application can call garage worker to check your car and repair it, Amasscar can tracking you and garage with google map location.</h5>
            </Col>
            <Col md="12">
              <Row>
                <Col md="4" className="mb-3">
                  <img src="https://rxpoison.github.io/img/project/amass%20car%2005.jpg" alt="chammy-git" />
                </Col>
                <Col md="8" className="mb-3">
                  <img src="https://rxpoison.github.io/img/project/amass%20car%2001.jpg" alt="chammy-git" />
                </Col>
                <Col md="6" className="mb-3">
                  <img src="https://rxpoison.github.io/img/project/amass%20car%2002.jpg" alt="chammy-git" />
                </Col>
                <Col md="6" className="mb-3">
                  <img src="https://rxpoison.github.io/img/project/amass%20car%2003.jpg" alt="chammy-git" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col md="12 my-4"><hr /></Col>
        <Col md="12">
          <h5 className="title text-center my-0 pt-0">Tepprathanpornpharmacy</h5>
          <Row>
            <Col md="12" className="text-th">
              <h5 className="text-muted description mb-2">Ecommerce for Tepprathanpornpharmacy to selling product and making promotion.</h5>
            </Col>
            <Col md="12">
              <Row>
                <Col md="12" className="mb-3">
                  <img className="w-100" src="https://rxpoison.github.io/img/project/tep%2001.jpg" alt="chammy-git" />
                </Col>
                <Col md="6" className="mb-3">
                  <img src="https://rxpoison.github.io/img/project/tep%2002.jpg" alt="chammy-git" />
                </Col>
                <Col md="6" className="mb-3">
                  <img src="https://rxpoison.github.io/img/project/tep%2003.jpg" alt="chammy-git" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col md="12 my-4"><hr /></Col>
        <Col md="12">
          <h5 className="title text-center my-0 pt-0">ERP - HRM</h5>
          <Row>
            <Col md="12" className="text-th">
              <h5 className="text-muted description mb-2">ERP in HRM module for RODTANK K.C. METAL SHEET PUBLIC CO.,LTD</h5>
            </Col>
            <Col md="12">
              <Row>
                <Col md="12" className="mb-3">
                  <img src="https://rxpoison.github.io/img/project/kc-01.png" alt="chammy-git" />
                </Col>
                <Col md="6" className="mb-3">
                  <img src="https://rxpoison.github.io/img/project/kc-02.png" alt="chammy-git" />
                </Col>
                <Col md="6" className="mb-3">
                  <img src="https://rxpoison.github.io/img/project/kc-03.png" alt="chammy-git" />
                </Col>
                <Col md="6" className="mb-3">
                  <img src="https://rxpoison.github.io/img/project/kc-04.png" alt="chammy-git" />
                </Col>
                <Col md="6" className="mb-3">
                  <img src="https://rxpoison.github.io/img/project/kc-05.png" alt="chammy-git" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col md="12 my-4"><hr /></Col>
        <Col md="12">
          <h5 className="title text-center my-0 pt-0">Softprompt - POS UI</h5>
          <Row>
            <Col md="12" className="text-th">
              <h5 className="text-muted description mb-2">รThis POS program in POS machine and can make promotion, table setting, payment.</h5>
            </Col>
            <Col md="12">
              <Row>
                <Col md="12" className="mb-3">
                  <img className="w-100" src="https://rxpoison.github.io/img/project/pos-01.png" alt="chammy-git" />
                </Col>
                <Col md="6" className="mb-3">
                  <img src="https://rxpoison.github.io/img/project/pos-02.png" alt="chammy-git" />
                </Col>
                <Col md="6" className="mb-3">
                  <img src="https://rxpoison.github.io/img/project/pos-03.png" alt="chammy-git" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col md="12 my-4"><hr /></Col>
        <Col md="12">
          <h5 className="title text-center my-0 pt-0">LINE BOT API - Currency</h5>
          <Row>
            <Col md="12" className="text-th">
              <h5 className="text-muted description mb-2">Mini project deploy with Heroku using with Node js and connect to other api</h5>
            </Col>
            <Col md="12">
              <Row>
                <Col md="4" className="mb-3">
                  <img className="w-100" src="https://rxpoison.github.io/img/project/line-01.png" alt="chammy-git" />
                </Col>
                <Col md="4" className="mb-3">
                  <img src="https://rxpoison.github.io/img/project/line-02.jpg" alt="chammy-git" />
                </Col>
                <Col md="4" className="mb-3">
                  <img src="https://rxpoison.github.io/img/project/line-03.jpg" alt="chammy-git" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col md="12 my-4"><hr /></Col>
        <Col md="12">
          <h5 className="title text-center my-0 pt-0">KKU ICEM PROJECT</h5>
          <Row>
            <Col md="12" className="text-th">
              <h5 className="text-muted description mb-2">This project for Faculty of Medicine, Khon Kaen University, Thailand. Examination in real time to fine the one for Winner team.</h5>
            </Col>
            <Col md="12">
              <Row>
                <Col md="12" className="mb-3">
                  <img className="w-100" src="https://rxpoison.github.io/img/project/icem-01.png" alt="chammy-git" />
                </Col>
                <Col md="6" className="mb-3">
                  <img src="https://rxpoison.github.io/img/project/icem-04.png" alt="chammy-git" />
                </Col>
                <Col md="6" className="mb-3">
                  <img src="https://rxpoison.github.io/img/project/icem-06.png" alt="chammy-git" />
                </Col>
                <Col md="12" className="mb-3">
                  <img src="https://rxpoison.github.io/img/project/icem-07.png" alt="chammy-git" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col md="12 my-4"><hr /></Col>
        <Col md="12">
          <h5 className="title text-center my-0 pt-0">Print express label custom</h5>
          <Row>
            <Col md="12" className="text-th">
              <h5 className="text-muted description mb-2">Can create print label with logistics from customer order and print.</h5>
            </Col>
            <Col md="12">
              <Row>
                <Col md="12" className="mb-3">
                  <img className="w-100" src={printLabel} alt="chammy-git" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col md="12 my-4"><hr /></Col>
        <Col md="12">
          <h5 className="title text-center my-0 pt-0">Cf manager with Stock realtime</h5>
          <Row>
            <Col md="12" className="text-th">
              <h5 className="text-muted description mb-2">Can view real time stock product to sold.</h5>
            </Col>
            <Col md="12">
              <Row className="d-flex justify-content-center">
                <Col md="4" className="mb-3">
                  <img className="w-100" src={stockRealtime} alt="chammy-git" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col md="12 my-4"><hr /></Col>
      </Row>
    )
  }
  
  return (
   <TimelineWork />
  )
}

export default Portfolio;

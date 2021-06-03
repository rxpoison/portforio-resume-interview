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
              <h5 className="text-muted description mb-2">เป็นระบบสำหรับให้ผู้ใช้งานด้านรถยนต์เรียกบริการช่างจากอู่บริเวณใกล้เคียงมาตรวจสอบรถยนต์ในกรณีที่เกิดปัญหา โดยจะ Map นำทางให้ช่างมาหาผู้ใช้งานภายในเขตของ กทม</h5>
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
              <h5 className="text-muted description mb-2">เป็นระบบสำหรับขายอาหารเสริม, ยา, เกี่ยวกับความสวยความงานของผู้หญิง โดยมีระบบเกี่ยวกับการขาย โปรโมชั่น รวมถึงตะกร้าสินค้า และหลังบ้านมีระบบ POS ที่คอยจัดการสินค้าต่างๆของร้านค้า</h5>
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
              <h5 className="text-muted description mb-2">พัฒนาระบบ ERP ในส่วนของ HRM เพื่อจัดการระบบงานฝ่าย HRM ทั่วทั้งหมด 20 สาขา ทั่วประเภทไทยของบริษัท </h5>
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
              <h5 className="text-muted description mb-2">ระบบ POS สำหรับร้านอาหารที่ต้องการจัดการร้านค้าตัวเอง มีการจัดการโปรโมชั่นเสริม การจัดโต๊ะ การคิดเงิน พัฒนามาใช้กับเครื่อง POS โดยเฉพาะ</h5>
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
              <h5 className="text-muted description mb-2">มินิโปรเจคเล็กๆ ในการลองทำ Line bot api ตอบรับข้อความจากผู้ใช้ โดยโจทน์คือใช้ API ภายนอกในการดึงค่าเงิน เพื่อนำมาแปลงค่าเงินอย่างง่าย โดยในมินิโปรเจคนี้ได้ทดลองใช้ Express JS ในการทำ Webhook กับ Line Developer พร้อมกับ Deploy โปรเจคที่ Heroku</h5>
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
              <h5 className="text-muted description mb-2">เป็นระบบประชาสัมพันธ์ งานแข่งขันตอบปัญหาทางการแพทย์ระดับนานาชาติ คณะแพทย์ศาสตร์ มหาวิทยาลัยขอนแก่น ที่ถูกจัดขึ้นทุกปี โดยระบบพัฒนาขึ้นด้วย Laravel ใน Docker (Laradock) รวมถึงใช้งาน Pm2 ในการจัดการ Socket.io ในการทำ Event การสอบแบบ Real time โดยทั้งหมดนั้น Deploy โปรเจคไว้ใน Ubuntu ที่ Server ของ Digital ocean และยังได้ป้องกันความปลอดภัยด้วย Cloudflare</h5>
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
              <h5 className="text-muted description mb-2">เป็นการจัดการรูปแบการปริ้นใบปะหน้าสำหรับส่งของ โดยสามารถเลือกรูปแบบได้หลายรูปแบบ</h5>
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
              <h5 className="text-muted description mb-2">สำหรับให้ทางพ่อค้าแม่ค้าดู Stock สินค้าแบบ Realtime ในระหว่าง Live ขายของได้</h5>
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

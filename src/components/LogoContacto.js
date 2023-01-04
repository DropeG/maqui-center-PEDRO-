import LogoImg from "../assets/img/logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Typography } from "antd";
import { PhoneFilled } from "@ant-design/icons";
import { Container, Col, Row, Image } from "react-bootstrap";

function LogoContacto() {
  return (
    <div>
      <Container fluid>
      <Row>
        <Col>
          <Image
            className="img-logo"
            src={LogoImg}
            alt="logo display"
            style={{ width: "22rem" }}
          />
        </Col>

        <Col className="phone-img">
          <PhoneFilled className="tel-icon" />
        </Col>
        <Col>
          <Row className="fono">Fono</Row>
          <Row className="contacto">(+56) 2 2623 3000</Row>
        </Col>
      </Row>
      
    </Container>
    </div>
  )
}

export default LogoContacto;

import Logo from "../assets/img/logo.png";
import "../styles/Home.css";
import { Container, Col, Row, Image } from "react-bootstrap";
import { Typography } from "antd";
import { PhoneFilled } from "@ant-design/icons";
const { Title } = Typography;

function Home() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Image
            className="img-logo"
            src={Logo}
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
  );
}

export default Home;

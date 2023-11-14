import { Container, Col, Row } from "react-grid-system";
import { AboutMe } from "@/components/molecules/AboutMe";
import { Skills } from "@/components/organisms";

const About = () => {
  return (
    <>
      <Container fluid>
        <Row justify="center">
          <Col
            sm={12}
            lg={8}
            xxl={6}
            style={{
              marginTop: "160px",
            }}
          >
            <AboutMe />
          </Col>
        </Row>
        <Row justify="center">
          <Col
            sm={12}
            lg={8}
            xxl={6}
            style={{
              marginTop: "50px",
            }}
          >
            <Skills />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;

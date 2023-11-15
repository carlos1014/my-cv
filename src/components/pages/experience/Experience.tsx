import { Container, Col, Row } from "react-grid-system";
import { ExperienceEasy, ExperienceTcs } from "@/components/molecules";

const Experience = () => {
  return (
    <>
      <Container fluid>
        <Row justify="center">
          <Col
            sm={12}
            lg={8}
            xxl={6}
            style={{
              marginTop: "120px",
            }}
          >
            <ExperienceEasy />
            <ExperienceTcs />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Experience

import { Container, Col, Row } from "react-grid-system";
import ExperienceList from "@/components/molecules/ExperienceList/ExperienceList";

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
            <ExperienceList />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Experience

import { Container, Col, Row } from "react-grid-system";
import { EducationList } from "@/components/molecules/EducationList";

const Education = () => {
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
            <EducationList />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Education

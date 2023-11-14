import { Container, Col, Row } from "react-grid-system";
import { ExperimentsList } from "@/components/molecules/ExperimentsList";

const Experiments = () => {
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
            <ExperimentsList />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Experiments

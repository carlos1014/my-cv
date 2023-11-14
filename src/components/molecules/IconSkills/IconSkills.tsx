import listsIconsDark from "@/data/listsIconsDark";
import listsIconsLight from "@/data/listsIconsLight";
import {
  Icon,
  TitleIcon,
  ContainerIcon,
  ContainerListIcon,
} from "./IconsSkills.style";
import { Container, Col, Row } from "react-grid-system";


// Definitions
export type SkillsProps = {
  name: string;
  image: string;
};

const IconSkills = () => {
  const isLight = window.localStorage.getItem("theme") === "light";
 
  return (
    <Container fluid>
      <Row debug>
        {!isLight &&(
          <>
            {listsIconsDark.map((item: SkillsProps) => {
              return (
                <Col
                  xs={6}
                  md={4}
                  sm={4}
                  lg={2}
                  xxl={2}
                  style={{
                    marginRight: "0px",
                  }}
                  key={item.name}
                >
                  <ContainerListIcon>
                    <ContainerIcon>
                      <Icon
                        src={item.image}
                        alt={item.name}
                        className="active"
                      ></Icon>
                      <TitleIcon>{item.name}</TitleIcon>
                    </ContainerIcon>
                  </ContainerListIcon>
                </Col>
              );
            })}
          </>
        )} 
        
        {isLight && (
          <>
            {listsIconsLight.map((item: SkillsProps) => {
              return (
                <Col
                  xs={6}
                  md={4}
                  sm={4}
                  lg={2}
                  xxl={2}
                  style={{
                    marginRight: "0px",
                  }}
                >
                  <ContainerListIcon>
                    <ContainerIcon>
                      <Icon
                        src={item.image}
                        alt={item.name}
                        className="st0"
                      ></Icon>
                      <TitleIcon>{item.name}</TitleIcon>
                    </ContainerIcon>
                  </ContainerListIcon>
                </Col>
              );
            })}
          </>
        )} 
        
      </Row>
    </Container>
  );
};

export default IconSkills;

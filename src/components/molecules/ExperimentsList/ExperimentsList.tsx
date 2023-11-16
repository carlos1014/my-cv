import {
  TextExperiments,
  ContainerLinks,
  ImageExperiment,
  TitleExperiments,
  LinkExperiment,
  TextLinkExperiment,
  ContainerCard,
} from "./ExperimentsList.style";
import { useTranslation } from "react-i18next";
import { Row, Col } from "react-grid-system";
import Memo from "@/assets/experiments/memo.jpg";
import Cv from "@/assets/experiments/mycv.jpg";
import Starwars from "@/assets/experiments/starwars.jpg";
import { FaGithub, FaTools } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

const ExperimentsList = () => {
  const { t } = useTranslation();

  const onGetCvGit = () => {
    window.open("https://github.com/carlos1014/my-cv", "_blank");
  };

  const onGetMemoGit = () => {
    window.open("https://github.com/carlos1014/memory-game-react", "_blank");
  };

  const onGetMemoWeb = () => {
    window.open("https://memorymorty.netlify.app", "_blank");
  };
  
  return (
    <>
      <Row>
        <Col
          sm={12}
          lg={6}
          xxl={6}
          style={{
            marginTop: "20px",
          }}
        >
          <ContainerCard>
            <ImageExperiment src={Cv} alt="Cv" />
            <TitleExperiments>{t("experiments.mycv.title")}</TitleExperiments>
            <TextExperiments>{t("experiments.mycv.text")}</TextExperiments>
            <ContainerLinks>
              <LinkExperiment>
                <FaLink />
                <TextLinkExperiment>
                  {t("experiments.common.online")}
                </TextLinkExperiment>
              </LinkExperiment>
              <LinkExperiment onClick={onGetCvGit}>
                <FaGithub />
                <TextLinkExperiment>
                  {t("experiments.common.git")}
                </TextLinkExperiment>
              </LinkExperiment>
            </ContainerLinks>
          </ContainerCard>
        </Col>
        <Col
          sm={12}
          lg={6}
          xxl={6}
          style={{
            marginTop: "20px",
          }}
        >
          <ContainerCard>
            <ImageExperiment src={Memo} alt="Memo" />
            <TitleExperiments>{t("experiments.memo.title")}</TitleExperiments>
            <TextExperiments>{t("experiments.memo.text")}</TextExperiments>
            <ContainerLinks>
              <LinkExperiment onClick={onGetMemoWeb}>
                <FaLink />
                <TextLinkExperiment>
                  {t("experiments.common.online")}
                </TextLinkExperiment>
              </LinkExperiment>
              <LinkExperiment onClick={onGetMemoGit}>
                <FaGithub />
                <TextLinkExperiment>
                  {t("experiments.common.git")}
                </TextLinkExperiment>
              </LinkExperiment>
            </ContainerLinks>
          </ContainerCard>
        </Col>
        <Col
          sm={12}
          lg={6}
          xxl={6}
          style={{
            marginTop: "20px",
          }}
        >
          <ContainerCard>
            <ImageExperiment src={Starwars} alt="Memo" />
            <TitleExperiments>
              {t("experiments.starwars.title")}
            </TitleExperiments>
            <TextExperiments>{t("experiments.starwars.text")}</TextExperiments>
            <ContainerLinks>
              <LinkExperiment>
                <FaTools />
                <TextLinkExperiment>
                  {t("experiments.common.under")}
                </TextLinkExperiment>
              </LinkExperiment>
            </ContainerLinks>
          </ContainerCard>
        </Col>
      </Row>
    </>
  );
};

export default ExperimentsList;

import { CardGlass } from "@/components/atoms";
import {
  ContainerText,
  Title,
  Container
} from "./ExperimentsList.style";
import { useTranslation } from "react-i18next";

const ExperimentsList = () => {

  const { t } = useTranslation();
  return (
    <>
      <CardGlass>
        <Container>
          <ContainerText>
            <Title>{t("experiments.coming")}</Title>
          </ContainerText>
        </Container>
      </CardGlass>

    </>
  );
};

export default ExperimentsList;

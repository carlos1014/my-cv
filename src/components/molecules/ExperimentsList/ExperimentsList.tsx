import { CardGlass } from "@/components/atoms";
import {
  ContainerExperiments,
  ContainerTextExperiments,
  TitleExperiments
} from "./ExperimentsList.style";
import { useTranslation } from "react-i18next";

const ExperimentsList = () => {

  const { t } = useTranslation();
  return (
    <>
      <CardGlass>
        <ContainerExperiments>
          <ContainerTextExperiments>
            <TitleExperiments>{t("experiments.coming")}</TitleExperiments>
          </ContainerTextExperiments>
        </ContainerExperiments>
      </CardGlass>

    </>
  );
};

export default ExperimentsList;

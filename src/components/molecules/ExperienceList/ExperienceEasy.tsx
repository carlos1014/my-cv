import LogoEasy from "@/assets/logosExperience/easy.png";
import { CardGlass } from "@/components/atoms";
import {
  ContainerEasy,
  ContainerTextEasy,
  DateEasy,
  DurationEasy,
  LogoCompanyEasy,
  SubTitleEasy,
  TextEasy,
  TitleEasy,
} from "./ExperienceEasy.style";
import { useTranslation } from "react-i18next";

const ExperienceEasy = () => {
  const { t } = useTranslation();
  return (
    <>
      <CardGlass>
        <ContainerEasy>
          <LogoCompanyEasy src={LogoEasy} alt="Easy"/>
          <ContainerTextEasy>
            <TitleEasy>{t("experience.cencosud.company")}</TitleEasy>
            <SubTitleEasy>{t("experience.cencosud.position")}</SubTitleEasy>
            <DateEasy>{t("experience.cencosud.date")}</DateEasy>
            <DurationEasy>{t("experience.cencosud.duration")}</DurationEasy>
          </ContainerTextEasy>
        </ContainerEasy>
        <TextEasy
          dangerouslySetInnerHTML={{
            __html: t("experience.cencosud.description"),
          }}
        ></TextEasy>
      </CardGlass>


    </>
  );
};

export default ExperienceEasy;

import LogoEasy from "@/assets/logosExperience/easy.png";
import { CardGlass } from "@/components/atoms";
import {
  LogoCompany,
  ContainerText,
  Title,
  SubTitle,
  Text,
  Container,
  Date,
  Duration,
} from "./ExperienceList.style";
import { useTranslation } from "react-i18next";

const ExperienceEasy = () => {
  const { t } = useTranslation();
  return (
    <>
      <CardGlass>
        <Container>
          <LogoCompany src={LogoEasy} alt="Easy"/>
          <ContainerText>
            <Title>{t("experience.cencosud.company")}</Title>
            <SubTitle>{t("experience.cencosud.position")}</SubTitle>
            <Date>{t("experience.cencosud.date")}</Date>
            <Duration>{t("experience.cencosud.duration")}</Duration>
          </ContainerText>
        </Container>
        <Text
          dangerouslySetInnerHTML={{
            __html: t("experience.cencosud.description"),
          }}
        ></Text>
      </CardGlass>


    </>
  );
};

export default ExperienceEasy;

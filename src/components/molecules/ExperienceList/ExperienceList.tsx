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
// Assets
import LogoEasy from "@/assets/logos-experience/easy.png";
import LogoTcsDark from "@/assets/logos-experience/tcsDark.png";
import LogoTcsLight from "@/assets/logos-experience/tcsLight.png";
import LogoIpp from "@/assets/logos-experience/Logo_ipp.png";
import LogoOpensoft from "@/assets/logos-experience/logo_opensoft.jpg";
import LogoIg from "@/assets/logos-experience/logo_ig.png";

const ExperienceList = () => {
    const theme = (localStorage.getItem("theme") || "") 
  const { t } = useTranslation();
  return (
    <>
      <CardGlass>
        <Container>
          <LogoCompany src={LogoEasy} alt="Me"></LogoCompany>
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

      <CardGlass
        style={{
          marginTop: "50px",
        }}
      >
        <Container>
          <LogoCompany src={(theme === 'dark' ? LogoTcsDark : LogoTcsLight)} alt="Me"></LogoCompany>
          <ContainerText>
            <Title>{t("experience.tcs.company")}</Title>
            <SubTitle>{t("experience.tcs.position")}</SubTitle>
            <Date>{t("experience.tcs.date")}</Date>
            <Duration>{t("experience.tcs.duration")}</Duration>
          </ContainerText>
        </Container>
        <Text
          dangerouslySetInnerHTML={{
            __html: t("experience.tcs.description"),
          }}
        ></Text>
      </CardGlass> 

      <CardGlass
        style={{
          marginTop: "50px",
        }}
      >
        <Container>
          <LogoCompany src={LogoIpp} alt="Me"></LogoCompany>
          <ContainerText>
            <Title>{t("experience.ipp.company")}</Title>
            <SubTitle>{t("experience.ipp.position")}</SubTitle>
            <Date>{t("experience.ipp.date")}</Date>
            <Duration>{t("experience.ipp.duration")}</Duration>
          </ContainerText>
        </Container>
        <Text
          dangerouslySetInnerHTML={{
            __html: t("experience.ipp.description"),
          }}
        ></Text>
      </CardGlass>

      <CardGlass
        style={{
          marginTop: "50px",
        }}
      >
        <Container>
          <LogoCompany src={LogoOpensoft} alt="Me"></LogoCompany>
          <ContainerText>
            <Title>{t("experience.opensoft.company")}</Title>
            <SubTitle>{t("experience.opensoft.position")}</SubTitle>
            <Date>{t("experience.opensoft.date")}</Date>
            <Duration>{t("experience.opensoft.duration")}</Duration>
          </ContainerText>
        </Container>
        <Text
          dangerouslySetInnerHTML={{
            __html: t("experience.opensoft.description"),
          }}
        ></Text>
      </CardGlass> 

      <CardGlass
        style={{
          marginTop: "50px",
        }}
      >
        <Container>
          <LogoCompany src={LogoIg} alt="Me"></LogoCompany>
          <ContainerText>
            <Title>{t("experience.imagenglobal.company")}</Title>
            <SubTitle>{t("experience.imagenglobal.position")}</SubTitle>
            <Date>{t("experience.imagenglobal.date")}</Date>
            <Duration>{t("experience.imagenglobal.duration")}</Duration>
          </ContainerText>
        </Container>
        <Text
          dangerouslySetInnerHTML={{
            __html: t("experience.imagenglobal.description"),
          }}
        ></Text>
      </CardGlass>            
     
    </>
  );
};

export default ExperienceList;

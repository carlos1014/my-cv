import Easy from "@/assets/logosExperience/easy.png"
import LogoTcsDark from "@/assets/logosExperience/tcsDark.png";
import LogoTcsLight from "@/assets/logosExperience/tcsLight.png";
import Ipp from "@/assets/logosExperience/ipp.png";
import LogoOpensoft from "@/assets/logosExperience/logo_opensoft.jpg";
import LogoIg from "@/assets/logosExperience/logo_ig.png";
import { CardGlass } from "@/components/atoms";
import {
  ContainerText,
  Title,
  SubTitle,
  Text,
  Container,
  Date,
  Duration
} from "./ExperienceList.style";
import { useTranslation } from "react-i18next";


const ExperienceList = () => {
    const theme = (localStorage.getItem("theme") || "") 
  const { t } = useTranslation();
  return (
    <>
      <CardGlass>
        <Container>
          <img src={Easy} alt="Easy" className="logoCompany"/>
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
          <img src={(theme === 'dark' ? LogoTcsDark : LogoTcsLight)} alt="Tcs" className="logoCompany"/>
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
          <img src={Ipp} alt="Ipp" className="logoCompany"/>
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
          <img src={LogoOpensoft} alt="Opensoft" className="logoCompany"/>
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
          <img src={LogoIg} alt="LogoIg" className="logoCompany"/>
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

import LogoTcsDark from "@/assets/logosExperience/tcsDark.png";
import LogoTcsLight from "@/assets/logosExperience/tcsLight.png";
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
const theme = localStorage.getItem("theme") || "";

const ExperienceTcs = () => {
  const { t } = useTranslation();
  return (
    <>
      <CardGlass
        style={{
          marginTop: "50px",
        }}
      >
        <Container>
          <LogoCompany
            src={theme === "dark" ? LogoTcsDark : LogoTcsLight}
            alt="Tcs"
          />
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
    </>
  );
};

export default ExperienceTcs;

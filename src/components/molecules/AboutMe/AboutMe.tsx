import { CardGlass } from "@/components/atoms";
import { ContainerText, PhotoMe, Title, SubTitle, Text } from "./AboutMe.style";
import { useTranslation } from "react-i18next";
// Assets
import ImageMe from "@/assets/images/me.png";

const AboutMe = () => {
  const { t } = useTranslation();
  return (
    <CardGlass>
      <PhotoMe src={ImageMe} alt="Me"></PhotoMe>
      <ContainerText>
        <Title>{t("presentation.name")}</Title>
        <SubTitle>{t("presentation.position")}</SubTitle>
        <Text
          dangerouslySetInnerHTML={{
            __html: t("presentation.description"),
          }}
        ></Text>
      </ContainerText>
    </CardGlass>
  );
};

export default AboutMe;

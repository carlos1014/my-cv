import { CardGlass } from "@/components/atoms";
import {
  ContainerText,
  Company,
  Name,
  Container,
  Date,
} from "./EducationList.style";
import { useTranslation } from "react-i18next";

const EducationList = () => {
  const { t } = useTranslation();
  return (
    <>
      <CardGlass>
        <Container>
          <ContainerText>
            <Company>{t("education.udemy3.company")}</Company>
            <Name>{t("education.udemy3.name")}</Name>
            <Date>{t("education.udemy3.date")}</Date>
          </ContainerText>
          <ContainerText>
            <Company>{t("education.aws.company")}</Company>
            <Name>{t("education.aws.name")}</Name>
            <Date>{t("education.aws.date")}</Date>
          </ContainerText>          
          <ContainerText>
            <Company>{t("education.udemy2.company")}</Company>
            <Name>{t("education.udemy2.name")}</Name>
            <Date>{t("education.udemy2.date")}</Date>
          </ContainerText>          

          <ContainerText>
            <Company>{t("education.udemy1.company")}</Company>
            <Name>{t("education.udemy1.name")}</Name>
            <Date>{t("education.udemy1.date")}</Date>
          </ContainerText>
          <ContainerText>
            <Company>{t("education.ibm.company")}</Company>
            <Name>{t("education.ibm.name")}</Name>
            <Date>{t("education.ibm.date")}</Date>
          </ContainerText>          
          <ContainerText>
            <Company>{t("education.mac.company")}</Company>
            <Name>{t("education.mac.name")}</Name>
            <Date>{t("education.mac.date")}</Date>
          </ContainerText>
          <ContainerText>
            <Company>{t("education.digicap.company")}</Company>
            <Name>{t("education.digicap.name")}</Name>
            <Date>{t("education.digicap.date")}</Date>
          </ContainerText>
          <ContainerText>
            <Company>{t("education.language.company")}</Company>
            <Name>{t("education.language.name")}</Name>
            <Date>{t("education.language.date")}</Date>
          </ContainerText>
          <ContainerText>
            <Company>{t("education.duoc.company")}</Company>
            <Name>{t("education.duoc.name")}</Name>
            <Date>{t("education.duoc.date")}</Date>
          </ContainerText>
        </Container>
      </CardGlass>
    </>
  );
};

export default EducationList;

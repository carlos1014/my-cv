import LogoTcsDark from "@/assets/logosExperience/tcsDark.png";
import LogoTcsLight from "@/assets/logosExperience/tcsLight.png";
import { CardGlass } from "@/components/atoms";
import {
  ContainerTcs,
  ContainerTextTcs,
  DateTcs,
  DurationTcs,
  LogoCompanyTcs,
  SubTitleTcs,
  TextTcs,
  TitleTcs,
} from "./ExperienceTcs.style";
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
        <ContainerTcs>
          <LogoCompanyTcs
            src={theme === "dark" ? LogoTcsDark : LogoTcsLight}
            alt="Tcs"
          />
          <ContainerTextTcs>
            <TitleTcs>{t("experience.tcs.company")}</TitleTcs>
            <SubTitleTcs>{t("experience.tcs.position")}</SubTitleTcs>
            <DateTcs>{t("experience.tcs.date")}</DateTcs>
            <DurationTcs>{t("experience.tcs.duration")}</DurationTcs>
          </ContainerTextTcs>
        </ContainerTcs>
        <TextTcs
          dangerouslySetInnerHTML={{
            __html: t("experience.tcs.description"),
          }}
        ></TextTcs>
      </CardGlass>
    </>
  );
};

export default ExperienceTcs;

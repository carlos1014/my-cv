import { CardGlass } from "@/components/atoms";
import IconSkills from "@/components/molecules/IconSkills/IconSkills";
import { TitleSkills } from ".";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();
  return (
    <CardGlass>
      <TitleSkills>{t("presentation.skills")}</TitleSkills>
      <IconSkills />
    </CardGlass>
  );
};

export default Skills;

import { FaEnvelope, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import {
  Container,
  ContainerLogo,
  FooterStyle,
  InStyle,
  MailStyle,
  WhatsappStyle,
} from "./Footer.style";
import { lightTheme, darkTheme } from "@/theme/Theme";
import LogoWhite from "@/assets/images/logo_white.png";
import LogoBlack from "@/assets/images/logo_black.png";

// Definitions
export type Props = {
  isDark: boolean;
  colorLight: string;
  colorDark: string;
  style: string;
  styleLogo: string;
};

const Defaults = {
  isDark: undefined,
  colorLight: darkTheme.colors.title,
  colorDark: lightTheme.colors.title,
  style: undefined,
  styleLogo: undefined,
};

const onGetWhatApp = () => {
  window.open(
    "https://api.whatsapp.com/send?phone=56998304615&text=¡Hola!",
    "_blank"
  );
};

const onGetMail = () => {
  window.open("mailto:carlosanmartin@hotmail.com", "_blank");
};

const onGetLinkedin = () => {
  window.open(
    "https://www.linkedin.com/in/carlos-ignacio-san-mart%C3%ADn-trujillo-88824644/",
    "_blank"
  );
};


const onGetHome = () => {
  window.open(
    "/"
  );
};
const Footer = (props: Props) => {
  // Props
  const isDark = window.localStorage.getItem("theme") === "light";
  const { colorLight, colorDark } = props;
  const style = {
    color: isDark ? colorDark : colorLight,
  };

  return (
    <FooterStyle>
      <ContainerLogo>
        <img src={isDark ? LogoBlack : LogoWhite} alt="" className="imgLogo" onClick={() => onGetHome()} />
      </ContainerLogo>
      <Container>
        <WhatsappStyle>
          <FaWhatsappSquare style={style} onClick={() => onGetWhatApp()} />
        </WhatsappStyle>
        <MailStyle>
          <FaEnvelope style={style} onClick={() => onGetMail()} />
        </MailStyle>
        <InStyle>
          <FaLinkedin style={style} onClick={() => onGetLinkedin()} />
        </InStyle>
      </Container>
    </FooterStyle>
  );
};

Footer.defaultProps = Defaults;

export default Footer;

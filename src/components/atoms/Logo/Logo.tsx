import LogoWhite from '@/assets/images/logo_white.png';
import LogoBlack from '@/assets/images/logo_black.png';
import { ContainerLogo } from './Logo.style';

const Logo = () => {
    const theme = (localStorage.getItem("theme") || "");
    const onGetHome = () => {
      window.open(
        "/", "_self"
      );
    };
        
  return (

    <ContainerLogo>
        <img src={(theme === 'light' ? LogoBlack : LogoWhite)} alt="" className="imgLogo" onClick={onGetHome} />
    </ContainerLogo>

  )
}

export default Logo

import LogoWhite from '@/assets/images/logo_white.png';
import LogoBlack from '@/assets/images/logo_black.png';
import { ContainerLogo } from './Logo.style';

const Logo = () => {
    const theme = (localStorage.getItem("theme") || "") 
        
  return (

    <ContainerLogo>
        <img src={(theme === 'light' ? LogoBlack : LogoWhite)} alt="" className="imgLogo" />
    </ContainerLogo>

  )
}

export default Logo

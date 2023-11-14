import LogoWhite from '@/assets/images/logo_white.png';
import LogoBlack from '@/assets/images/logo_black.png';
import { Container } from './Logo.style';

const Logo = () => {
    const theme = (localStorage.getItem("theme") || "") 
        
  return (
    <Container>
        <img src={(theme === 'light' ? LogoBlack : LogoWhite)} alt="" className="imgLogo" />
    </Container>
  )
}

export default Logo

import React, { useEffect, useState } from 'react'
import { LogoContainer, MenuIconContainer, NavbarButton, NavbarLink, NavbarLinksContainer, NavbarWrapper, Overlay } from './NavbarStyles'
import Logo from '../../../public/assets/img/logo.svg';
import MenuIcon from '../../../public/assets/img/icon-hamburger.svg'
import CrossIcon from '../../../public/assets/img/icon-close.svg'
const Navbar = () => {

    const [isToggle, setIsToggle] = useState(false)
    
    const handleNavbarMenu = () => setIsToggle(!isToggle);

    const scrollCloseMenu = () => {
        if(isToggle === false) return;
        setIsToggle(!isToggle)
    }

        document.addEventListener('scroll', scrollCloseMenu)

  return (
    <NavbarWrapper>
        <LogoContainer>
            <img src={Logo} alt="" />
        </LogoContainer>

        <NavbarLinksContainer isToggle={isToggle}>
            <li><NavbarLink>Home</NavbarLink></li>
            <li><NavbarLink>About</NavbarLink></li>
            <li><NavbarLink>Contact</NavbarLink></li>
            <li><NavbarLink>Blog</NavbarLink></li>
            <li><NavbarLink>Careers</NavbarLink></li>
            
        </NavbarLinksContainer>
        <MenuIconContainer onClick={handleNavbarMenu}>
            <img src={isToggle ? CrossIcon : MenuIcon} alt="" />
        </MenuIconContainer>

        <Overlay isToggle={isToggle}/>
        <NavbarButton>Request Invite</NavbarButton>
    </NavbarWrapper>
  )
}

export default Navbar
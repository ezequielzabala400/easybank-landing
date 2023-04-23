import React from 'react'
import { BtnDesktopContainer, HeroContainer, HeroImageContainer, HeroImageDesktop, HeroInfoContainer, HeroInfoDesktop, HeroParagraph, HeroParagraphDesktop, HeroTitle, HeroTitleDesktop } from './HeroStyles'
import HeroImage from '../../../public/assets/img/image-mockups.png'
import Button from '../UI/Button/Button'
import heroBgMobile from '../../../public/assets/img/bg-intro-mobile.svg'
import heroBgDesktop from '../../../public/assets/img/bg-intro-desktop.svg'
const Hero = () => {
  return (
    <HeroContainer>
        <HeroImageContainer image={heroBgMobile}>
            <img src={HeroImage} alt="mockups-image" />
        </HeroImageContainer>
        <HeroInfoContainer>
            <HeroTitle>
                Next generation digital banking
            </HeroTitle>
            <HeroParagraph>
                Take your financial life online. Your Easybank account will be a one-stop-shop for spending.
                saving, budgeting, investing, and much more.
            </HeroParagraph>
            <Button>Request Invite</Button>
        </HeroInfoContainer>

        <HeroImageDesktop image={heroBgDesktop}>
            <img src={HeroImage} alt="mockups-image" />
        </HeroImageDesktop>

        <HeroInfoDesktop>
            <HeroTitleDesktop>
                Next generation digital banking
            </HeroTitleDesktop>
            <HeroParagraphDesktop>
                Take your financial life online. Your Easybank account will be a one-stop-shop for spending.
                saving, budgeting, investing, and much more.
            </HeroParagraphDesktop>
            <BtnDesktopContainer>
                <Button>Request Invite</Button>
            </BtnDesktopContainer>
        </HeroInfoDesktop>
    </HeroContainer>
  )
}

export default Hero
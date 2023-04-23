import React from 'react'
import { BtnDesktopContainer, HeroContainer, HeroImageContainer, HeroImageDesktop, HeroInfoContainer, HeroInfoDesktop, HeroParagraph, HeroParagraphDesktop, HeroTitle, HeroTitleDesktop } from './HeroStyles'
import HeroImage from '../../../public/assets/img/image-mockups.png'
import Button from '../UI/Button/Button'
const Hero = () => {
  return (
    <HeroContainer>
        <HeroImageContainer>
            <img src={HeroImage} alt="" />
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

        <HeroImageDesktop>
            <img src={HeroImage} alt="" />
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
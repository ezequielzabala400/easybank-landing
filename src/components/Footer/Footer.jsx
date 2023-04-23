import React from 'react'
import { ButtonContainer, FooterContainer, FooterIcons, FooterIconsContainer, FooterLinks, FooterWrapper, Icon } from './FooterStyles'
import Logo from '../../../public/assets/img/LogoWhite.svg'
import {FaFacebook} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaPinterest} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import Button from '../UI/Button/Button'
const Footer = () => {
  return (
    <FooterWrapper>
        <FooterContainer>
            <FooterIconsContainer>
            <img src={Logo} alt="" />
    
            <FooterIcons>
                <Icon><FaFacebook /></Icon>
                <Icon><FaYoutube /></Icon>
                <Icon><FaTwitter /></Icon>             
                <Icon><FaPinterest /></Icon>
                <Icon><FaInstagram /></Icon>
            </FooterIcons>
            </FooterIconsContainer>

            <FooterLinks>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Privacy Policy</a></li>
            </FooterLinks>

            <ButtonContainer>
                <Button>Request Invite</Button>
                <small>© Easybank, All Rights Reserved</small>
            </ButtonContainer>
        </FooterContainer>
    </FooterWrapper>
  )
}

export default Footer
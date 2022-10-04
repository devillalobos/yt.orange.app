import React from 'react'
import styled from 'styled-components'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa'

const FooterContainer = styled.footer`
    background: var(--second);
    z-index: 10 !important;
`
const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`

const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px){
        padding-top: 32px;
    } 
`
const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px){
        flex-direction: column;
    } 
`
const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width:160px;
    box-sizing: border-box;
    color: var(--complement);

    @media screen and (max-width: 420px){
        margin: 0;
        padding: 10px;
        width: 100%;      
    } 
`
const FooterLinkTitle = styled.h1`
    font-size: 14px;
    margin-bottom: 16px;
`

const FooterLink = styled.a`
    color: var(--primary);
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
    &:hover{
        cursor: pointer;
    }
`
const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`
const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px){
        flex-direction: column;     
    } 
`
const Logo = styled.img`
    height: 40px;
    margin-bottom: 10px;
    cursor: pointer;
`;
const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 16px;
`
const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`
const SocialIconLink = styled.a`
    color: var(--primary);
    font-size: 24px;
`
const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/signin">Testimonials</FooterLink>
                            <FooterLink to="/signin">Carrers</FooterLink>
                            <FooterLink to="/signin">Terms of Services</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                            <FooterLink to="/signin">Submit Video</FooterLink>
                            <FooterLink to="/signin">Ambassadors</FooterLink>
                            <FooterLink to="/signin">Agency</FooterLink>
                            <FooterLink to="/signin">Influencer</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to="/signin">Contact</FooterLink>
                            <FooterLink to="/signin">Support</FooterLink>
                            <FooterLink to="/signin">Destinations</FooterLink>
                            <FooterLink to="/signin">Sponsorships</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Bussiness</FooterLinkTitle>
                            <FooterLink to="https://www.instagram.com/yt.naranja">Instagram</FooterLink>
                            <FooterLink to="https://twitter.com/naranjauser">Twitter</FooterLink>
                            <FooterLink to="/signin">Facebook</FooterLink>
                            <FooterLink to="/signin">YouTube</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <Logo src="" />
                        <WebsiteRights>YT Naranja © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="https://www.instagram.com/yt.naranja" target="_blank" arial-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="https://twitter.com/naranjauser" target="_blank" arial-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="//" target="_blank" arial-label="YouTube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="//" target="_blank" arial-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
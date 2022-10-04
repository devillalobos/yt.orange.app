import React, { useState } from 'react'
import styled from 'styled-components';
import Link from 'next/link'
import Flag from 'react-world-flags'
import bundle from '../i18n'
import { useRouter } from "next/router";
import { FaUser, FaCaretDown, FaCaretUp, FaRandom, FaBars, FaSearch, FaCloudMoon } from 'react-icons/fa'

const NavbarContainer = styled.nav`
    font-size: 12px !important;
    color: var(--primary) !important;
    background-color: ${({ isBackgroundActive }) => (isBackgroundActive ? 'rgba(0,0,0,.6)' : 'var(--secondcomplement)')};
    transition: all 0.1s ease-in;
    position: sticky;
    top: 0px;
    z-index:1;
`;

const NavContainer = styled.div`
    padding-right: 5.25rem; 
    padding-left: 5.25rem; 
    margin-right: auto !important;
    margin-left: auto !important;
    background: var(--primary) !important;
    background-color: transparent !important;
    height: 60px !important;
    display: flex!important;
    justify-content: space-between!important;
    flex-direction: row!important;
    align-items: center!important;
    border-bottom: solid 4px ${({ isBackgroundActive }) => (isBackgroundActive ? 'var(--complement)' : 'rgba(0,0,0,.6)')};
    @media screen and (max-width: 767px) {
        padding-right: 1.25rem; 
        padding-left: 1.25rem; 
    }
`;

const SidebarContainer = styled.aside`
    position: absolute;
    z-index: 999;
    width: 80%;
    background: var(--secondcomplement);
    display: grid;
    align-items: center;
    left: 0;
    transition: all .4s;
    transform: translateX(${({ isOpen }) => (isOpen ? '0%' : '-150%')});
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0%')};
    height: 100%;
    overflow: hidden;
    margin-top: -44px;
`;

const NavIcon = styled(FaBars)`
    color: var(--second);
    font-size: 25px;
`;

const Icon = styled.div`
    user-select: none;
    @media screen and (max-width: 767px) {
        display: none!important;
    }
`

const IconLink = styled.a`
    display: block!important;
`

const IconContainer = styled.div`
    display: inline-block;
    position: relative;
    padding-bottom: 0;
    width: 95px;
    height: 50px;
`
const StyledLink = styled(Link)`
    cursor: pointer;
`;

const IconImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    z-index: 1;
`

const ToolbarContainer = styled.div`
    text-align: right !important;
    color: var(--second) !important;
    text-decoration: uppercase !important;
    flex-shrink: 0 !important;
    @media screen and (max-width: 767px) {
        display: none!important;
    }
`

const SelectContainer = styled.div`
    display: flex!important;
    padding-bottom: 0.625rem;
    padding-top: 0.625rem;
    align-items: center!important;
`

const SelectSection = styled.div`
    position: relative !important;
    display: flex!important;
    flex-direction: row!important;
    margin-right: 1.25rem;
    @media screen and (min-width: 1010px) {
        margin-right: 1.875rem;
    }
    &:after{
        position: absolute !important;
        top: 0px !important;
        bottom: 0px !important;
        right: 0px !important;
        width: 1px !important;
        border-right: 2px solid var(--primary) !important;
        content: ' ' !important;
        pointer-events: none !important;
    }
`

const SelectionContainer = styled.div`
    align-items: center!important;
    display: flex!important;
    &:after{
        position: absolute !important;
        top: 0px !important;
        bottom: 0px !important;
        right: 0px !important;
        width: 1px !important;
        border-right: 1px solid var(--primary) !important;
        content: ' ' !important;
        pointer-events: none !important;
    }
`

const RandomButton = styled.button`
    padding: 6px 18px;
    margin-left: 20px;
    margin-right: 20px;
    border-radius: 18px;
    border: none;
    outline: none;
    font-size: 18px;
    color: #fff;
    cursor: pointer;
    background-color: var(--primary);
    transition: all 0.1s ease-in;
    user-select: none;
    &:hover {    
        background-color: var(--second);
        color: #fff;
    }
`

const RandomIcon = styled(FaRandom)`
    color: var(--second);
    &:hover{
        color: var(--primary);
    }
    @media screen and (min-width: 865px){
        display: none;
    }
`;

const RandomText = styled.span`
    color: var(--second);
    color: #fff;
    margin-left: 10px;
    &:hover{
        color: var(--primary);
    }
    @media screen and (max-width: 865px){
        display: none;
    }
`;

const NavMenu = styled.ul`
    cursor: pointer;
    align-self: center;
    list-style: none;
    margin: 0;
    user-select: none;
    list-style-type: none;
    justify-content: end;
    position: relative;
    font-size: 1rem;
    line-height: 1.375;
    padding-left: 1.25rem;
    padding-right: 0.3125rem;
    padding-right: 1.25rem;
    &:hover{
        color: var(--primary);
    }
`

const DownIcon = styled(FaCaretDown)`
    color: var(--primary);
    margin-left: 10px;
`;

const NavItem = styled.li`
    display: flex;
    align-items: center;
    height: 80px;
    height: inherit !important;
`

const ButtonSection = styled.div`
    align-items: center!important;
    display: flex!important;
    &:hover{
        color: var(--primary) !important;
    }
`

const SignUpButton = styled.a`
    font-size: 1rem;
    line-height: 1.375;
    text-align: center!important;
    color: var(--second) !important;
    text-decoration: none !important;
    user-select: none;
`

const SignUpIcon = styled(FaUser)`
    color: var(--second);
    font-size: 20px;
    margin-left: 5px;
`;

const UpIcon = styled(FaCaretUp)`
    color: var(--primary);
    margin-left: 10px;
`;

const DropdownMenu = styled.ul`
    margin-left: -20px;
    background: var(--primary);
    width: 200px;
    position: absolute;
    top: 41px;
    list-style: none;
    text-align: start;
    list-style-type: none;
    border-radius:  0 0 18px 18px;
`;

const MenuItem = styled.li`
    display: block;
    height: 100%;
    width: 200px;
    margin-left: -40px;
    text-decoration: none;
    color: #fff;
    padding: 16px;
    &:hover{
        background: var(--second);
    }
    &:last-child {
        border-radius: 0 0 18px 18px;
    }
`

const CountryFlag = styled(Flag)`
    margin-right: 24px;
    margin-left: 15px;
`

const MidIcon = styled.div`
    cursor: pointer;
    @media screen and (min-width: 768px) {
        display: none!important;
    }
`
const MidIconLink = styled.a`
    
`
const MidIconContainer = styled.div`
    /* class */
    padding-bottom: 0;
    width: 95px;
    height: 50px;
    /* picture-container */
    display: inline-block;
    position: relative;
`
const MidIconImage = styled.img`
    /* picture-inner */
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
`

const SignUpIconContainer = styled.div`
    @media screen and (min-width: 768px) {
        display: none!important;
    }
`
const NightIconContainer = styled.div`
    @media screen and (min-width: 768px) {
        display: none!important;
    }
`

const SearchIcon = styled(FaSearch)`
    color: var(--second);
    font-size: 20px;
`;

const NightIcon = styled(FaCloudMoon)`
    color: var(--second);
    font-size: 20px;
`;

const SearchContainer = styled.div`
    align-content: center !important;
    @media screen and (min-width: 768px){
        display: none;
    }
`

const Search = styled.input`
    margin-top: 2px;
    margin-left: 20px;
    margin-right: 20px;
    border-radius: 18px;
    outline: none;
    border: none;
    font-size: 18px;
    font-weight: 100;
    color: var(--primary);
    background-color: var(--second);
    transition: all 0.1s ease-in;
    font-size: 18px;
    user-select: none;
    padding: 6px 18px;
    ::placeholder {
        color: var(--complement);
        filter: opacity(0.7);
    }
`
const Navbar = ({ themeToggler, setSearchText, searchText }) => {
    const router = useRouter();
    const [search, setSearch] = useState(true);
    const [dropdownLenguage, setDropdownLenguage] = useState(false);
    const [lenguage, setLenguage] = useState(false);
    const [sidemenu1, setSideMenu1] = useState(false);
    const [sidemenu2, setSideMenu2] = useState(false);
    const [sidemenu3, setSideMenu3] = useState(false);

    const Items = [{
        title: bundle.getText("component.navbar.menu.channel"),
        path: '/channel',
        iconname: "home",
        showDropDown: sidemenu3,
        setDropdown: function () {
            onShowDropMenu3();
        },
        Child: [{
            iconname: "fire",
            title: bundle.getText("component.navbar.menu.stars.hot"),
            key: "hot",
            path: '/stars'
        }, {
            iconname: "view",
            title: bundle.getText("component.navbar.menu.stars.view"),
            key: "view",
            path: '/stars'
        }, {
            iconname: "like",
            title: bundle.getText("component.navbar.menu.stars.like"),
            key: "like",
            path: '/stars'
        }]
    },
    {
        title: bundle.getText("component.navbar.menu.stars"),
        path: '/stars',
        iconname: "home",
        showDropDown: sidemenu1,
        setDropdown: function () {
            onShowDropMenu1();
        },
        Child: [{
            iconname: "fire",
            title: bundle.getText("component.navbar.menu.stars.hot"),
            key: "hot",
            path: '/stars'
        }, {
            iconname: "view",
            title: bundle.getText("component.navbar.menu.stars.view"),
            key: "view",
            path: '/stars'
        }, {
            iconname: "like",
            title: bundle.getText("component.navbar.menu.stars.like"),
            key: "like",
            path: '/stars'
        }]
    },
    {
        title: bundle.getText("component.navbar.menu.scenes"),
        path: '/scenes',
        iconname: "video",
        showDropDown: sidemenu2,
        setDropdown: function () {
            onShowDropMenu2();
        },
        Child: [{
            iconname: "fire",
            title: bundle.getText("component.navbar.menu.scenes.hot"),
            path: '/scenes'
        }, {
            iconname: "view",
            title: bundle.getText("component.navbar.menu.scenes.view"),
            path: '/scenes'
        }, {
            iconname: "like",
            title: bundle.getText("component.navbar.menu.scenes.like"),
            path: '/scenes'
        }]
    }];

    const Languages = [{
        title: bundle.getText("component.navbar.lang.menu.es"),
        country: 'es'
    }, {
        title: bundle.getText("component.navbar.lang.menu.en"),
        country: 'us'
    }
    ];

    const onChangeLanguage = (e) => {
        const locale = e === "us" ? "en" : "es";
        router.push(router.asPath, router.asPath, { locale })
    };

    const onShowDropdownLenguage = () => {
        setSideMenu1(false);
        setSideMenu2(false);
        setSideMenu3(false);
        setDropdownLenguage(!dropdownLenguage);
    };

    const onShowDropMenu1 = () => {
        setDropdownLenguage(false);
        setSideMenu2(false);
        setSideMenu3(false);
        setSideMenu1(!sidemenu1);
    };

    const onShowDropMenu2 = () => {
        setDropdownLenguage(false);
        setSideMenu1(false);
        setSideMenu3(false);
        setSideMenu2(!sidemenu2);
    };

    const onShowDropMenu3 = () => {
        setDropdownLenguage(false);
        setSideMenu1(false);
        setSideMenu2(false);
        setSideMenu3(!sidemenu3);
    };

    const onLangugeClick = () => {
        setSideMenu2(false);
        setSideMenu1(false);
        setLenguage(!lenguage);
    };

    const onSearchClick = () => {
        setSearch(!search);
    };
    const onChangeMode = () => {
        themeToggler();
    };
    const onSearch = (e) => {
        setSearchText(e.target.value);
    };
    const onEnter = (e) => {
        if (e.code === "Enter") {
            //alert(e.target.value);
        }
    };
    const onSideClick = () => { };
    return (
        <NavbarContainer>
            <NavContainer>
                {/* <SidebarContainer /> */}
                <NavIcon onClick={onSideClick} />
                <Icon>
                    <IconLink>
                        <IconContainer>
                            <StyledLink href="/">
                                <IconImage src="/assets/images/logo.png" />
                            </StyledLink>
                        </IconContainer>
                    </IconLink>
                </Icon>
                <ToolbarContainer>
                    <SelectContainer>
                        <SelectSection>
                            <SelectionContainer>
                                <RandomButton>
                                    <RandomIcon />
                                    <RandomText>
                                        {bundle.getText("component.navbar.button.random")}
                                    </RandomText>
                                </RandomButton>
                                {Items && Items.map((item, index) => {
                                    return (
                                        <NavMenu key={index} onClick={item.setDropdown} >
                                            <span>
                                                {item.title}
                                            </span>
                                            {item.Child ? item.showDropDown ? <UpIcon /> : <DownIcon /> : <></>}
                                            {item.showDropDown && <DropdownMenu >
                                                {item.Child && item.Child.length && item.Child.map((child, childindex) => {
                                                    return (
                                                        <MenuItem key={childindex} >
                                                            <a to={child.path}>{child.title} </a>
                                                        </MenuItem>
                                                    );
                                                })}
                                            </DropdownMenu>}
                                        </NavMenu>
                                    );
                                })}
                                <NavMenu>
                                    <NavItem onClick={onShowDropdownLenguage} >
                                        {bundle.getText("component.navbar.menu.lang")}
                                        {dropdownLenguage ? <UpIcon /> : <DownIcon />}
                                        {dropdownLenguage &&
                                            <DropdownMenu onClick={onLangugeClick}>
                                                {Languages.map((item, index) => {
                                                    return (
                                                        <MenuItem key={index} onClick={() => onChangeLanguage(item.country)} >
                                                            <span>
                                                                {item.title}
                                                            </span>
                                                            <CountryFlag height="24" width="24" code={item.country} />
                                                        </MenuItem>
                                                    );
                                                })}
                                            </DropdownMenu>
                                        }
                                    </NavItem>
                                </NavMenu>
                            </SelectionContainer>
                        </SelectSection>
                        <ButtonSection>
                            <SignUpButton>
                                {bundle.getText("component.navbar.button.signup")}
                            </SignUpButton>
                            <SignUpIcon />
                        </ButtonSection>
                    </SelectContainer>
                </ToolbarContainer>
                {search ?
                    <MidIcon>
                        <MidIconLink>
                            <MidIconContainer>
                                <Link href="/">
                                    <MidIconImage src="/assets/images/logo.png" />
                                </Link>
                            </MidIconContainer>
                        </MidIconLink>
                    </MidIcon> :
                    <SearchContainer>
                        <Search onChange={onSearch} onKeyUp={onEnter} placeholder={bundle.getText("component.navbar.menu.search.placeholder")} />
                    </SearchContainer>
                }
                {search ?
                    <NightIconContainer>
                        <NightIcon onClick={onChangeMode} />
                    </NightIconContainer> : <></>}
                <SignUpIconContainer>
                    <SearchIcon onClick={onSearchClick} />
                </SignUpIconContainer>
            </NavContainer>
        </NavbarContainer>
    )
}

export default Navbar
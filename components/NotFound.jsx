import React from 'react'
import styled from 'styled-components'
import bundle from '../i18n';

const ImageBackground = styled.img`
    background-color: white;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    object-fit: cover;
    height: 300px;
    width: 100%;
    display: ${({ visible }) => (visible ? 'none !important' : 'block')};
`;

const Title = styled.h3`
    line-height: 1.15;
    font-size: 1.2rem;
    color: var(--second);
`;
const NotFound = () => {
    return (
        <>
            <Title>{bundle.getText("component.not.found.title")}</Title>
            <ImageBackground loading="lazy" src="/assets/images/NotFound.gif" />
        </>
    )
}

export default NotFound
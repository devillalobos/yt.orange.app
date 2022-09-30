import React, { useEffect, useState } from 'react'
import { useRouter } from "next/router";
import { FaRegEye, FaThumbsUp, FaTv, FaCheckCircle } from 'react-icons/fa'
import Link from 'next/link';
import styled from 'styled-components'
import formatter from '../helpers/formatter'
import bundle from '../i18n'

const VideoContainer = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans",\n\n "Droid Sans", "Helvetica Neue", sans-serif;
    height: 400px;
`;

const Container = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    height: 400px;
    margin: 0 5px 5px 0px;
`;

const FramePictureImage = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    color: inherit;
    z-index: 6;
    font-size: 16px;
    position: absolute;
    text-align: center;
    top: 0;
    height: 30px;
    width: 100px;
`;

const Badge = styled.div`
    border-radius: 2px;
    border: 2px solid ${({ type }) => (type === 'advertisement' ? 'var(--primary)' : 'var(--second)')};
    background-color: ${({ type }) => (type === 'advertisement' ? 'var(--primary)' : 'var(--second)')};
    color: ${({ type }) => (type === 'advertisement' ? 'var(--complement)' : '#fff')};
    margin-top: 0px;
    margin-left: 0px;
    text-align: center;
    padding: 2px;
    border-radius: 0 0 10px 0;
`;

const IOSImageBackground = styled.img`
    background: white;
    background-color: white;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    object-fit: cover;
    height: 300px;
    width: 100%;
    display: ${({ visible }) => (visible ? 'none !important' : 'block')};
`;

const VideoBackground = styled.video`
    background: white;
    background-color: white;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    object-fit: cover;
    height: 300px;
    width: 100%;
    display: ${({ visible }) => (visible ? 'none !important' : 'block')};
`;

const ImageBackground = styled.img`
    background-color: white;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    object-fit: cover;
    height: 300px;
    width: 100%;
    display: ${({ visible }) => (visible ? 'none !important' : 'block')};
`;

const Metadata = styled.div`
    display: grid;
    box-shadow: rgb(0 0 0 / 10%) 0px 10px 20px -5px, rgb(0 0 0 / 10%) 0px 1px 4px;
    background-color: var(--second);
    padding: 8px 15px 15px 15px;
    grid-template:
        "Actors Date" 0.8fr
        "Title ViewsLikes" 1fr / minmax(0px, 1fr) auto;
    gap: 0.25rem 0.5rem;
    -webkit-box-align: center;
    align-items: center;
`;

const Actors = styled.div`
    color: var(--primary);
    grid-area:  Actors / Actors / Actors / Actors;
    overflow: hidden;
    font-weight: bold;
    font-size: 16px;
    text-overflow: ellipsis;
    overflow:hidden;
    display: -webkit-box !important;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    white-space: normal;
    text-align: justify;
    text-justify: inter-word;
`;

const StyledLink = styled(Link)`
    font-size: 12rem;
    margin: 12px 0 4px 0;
    cursor: pointer !important;
`;

const VideoName = styled.p`
    margin: 0;
    text-align: left;
    margin: auto;
    cursor: pointer;
`;

const Date = styled.div`
    grid-area: Date / Date / Date / Date;
    place-self: center end;
    color: rgb(214, 214, 214);
    font-size: 0.8125rem;
    display: flex;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    justify-content: space-between;
`;

const Name = styled.div`
    margin-top: auto;
    grid-area: Title / Title / Title / Title;
    overflow: hidden;
    font-size: 0.8125rem;
    margin-bottom: 6px;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    color: var(--complement) !important;
    text-overflow: ellipsis;
    overflow:hidden;
    display: -webkit-box !important;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    white-space: normal;
    text-align: justify;
    text-justify: inter-word;
    display:flex;
    align-items:stretch;
    justify-content:center;
`;

const Info = styled.span`
    color: rgb(214, 214, 214);
    grid-area: ViewsLikes / ViewsLikes / ViewsLikes / ViewsLikes;
    -webkit-box-pack: end;
    justify-content: flex-end;
    margin: 0px;
    font-size: 0.8125rem;
    align-self: end;
    &:last-child{
        margin: 0px;
    }
`;

const StarsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    transition: 2s;
    @media screen and (max-width: 500px){
        margin-left: 0;
    }
`;

const ProfileImage = styled.div`
    display: flex;
    border-radius: 80%;
    padding-right: 10px;
`;

const FramePicture = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    color: inherit;
    border-radius: 50%;
    z-index: 6;
`;

const ObjectImage = styled.div`
    display: flex;
    background-color: var(--second);
    border-radius: 50%;
`;

const ImageBackgroundTest = styled.img`
    margin-left: 5px;
    background-color: var(--second);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    object-fit:  ${({ type }) => (type === 'channel' ? 'contain' : 'cover')};
    width: 30px !important;
    height: 30px !important;
    border-radius: 50%;
`;

const StarName = styled.p`
    margin: 0;
    text-align: center;
    margin: auto;
    width: 50%;
    cursor: pointer;
    &:hover {
        color: var(--primary);
    }
`;

const Data = styled.div`
    grid-area: ViewsLikes / ViewsLikes / ViewsLikes / ViewsLikes;
    -webkit-box-pack: end;
    margin-bottom: 0px;
    font-size: 0.8125rem;
    align-self: center;
    display: flex;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    justify-content: space-between;
    flex-direction: column;
`;

const ChannelIcon = styled(FaTv)`
    margin-left: 10px;
    color: var(--complement);
`;

const StarIcon = styled(FaCheckCircle)`
    margin-left: 10px;
    color: var(--complement);
`;

const LikeIcon = styled(FaThumbsUp)`
    margin-left: 10px;
    margin-right: 10px;
    width: 100%;
    color: var(--complement);
`;

const ViewIcon = styled(FaRegEye)`
    margin-left: 10px;
    width: 100%;
    color: var(--complement);
`;

const Percentage = styled.div`
    display: flex;
    align-items: center;
    -webkit-justify-content: baseline !important;
    justify-content: baseline !important;
    &:hover {
        color: var(--primary);
    }
    &:hover ${ChannelIcon} {
        color: var(--primary);
    }
    &:hover ${StarIcon} {
        color: var(--primary);
    }    
    &:hover ${LikeIcon} {
        color: var(--primary);
    }
    &:hover ${ViewIcon} {
        color: var(--primary);
    }
    @media screen and (max-width: 500px){
        margin-left: 0;
    }
`;

const VideoCard = ({ id, name, type, release_date, thumbnail_gif, thumbnail, stars, owners }) => {

    const router = useRouter();
    const [platform, setPlatform] = useState(false);
    const [hover, setHover] = useState(false);

    const handleclick = (e) => {
        try {
            setHover(hover);
            const vid = e.target;
            vid.play().then((res) => {
            }).catch((err) => {
                alert("On Play Throught: " + err.message)
            });
        } catch (error) {
            alert(error.message);
        }
    }

    const handleVideoMouseEnter = (e) => {
        try {
            setHover(true);
            const vid = e.target;
            vid.muted = true
            vid.play();
        } catch (error) {
            alert("error")
        }
    }

    const handleVideoMouseLeave = (e) => {
        setHover(false);
        const vid = e.target;
        vid.muted = false
        vid.currentTime = 0
        vid.pause()
    }

    const handleMouseEnter = () => {
        setHover(true);
    }

    const handleMouseLeave = () => {
        setHover(false);
    }

    const formatLocalDate = (value) => {
        return formatter.formatDate(value, router.locale);
    }

    useEffect(() => {
        setPlatform(window.navigator.platform);
    }, []);

    return (
        <VideoContainer>
            <Container>
                <FramePictureImage>
                    <Badge type={type}>
                        {bundle.getText("component.card.type." + type)}
                    </Badge>
                </FramePictureImage>
                {platform === "iPhone" ? <IOSImageBackground muted playsinline loop autoPlay visible={!hover} preload="metadata" src={thumbnail_gif} /> :
                    <VideoBackground muted playsinline autoPlay loop preload="none" onClick={handleclick} visible={!hover} onMouseEnter={handleVideoMouseEnter} onMouseLeave={handleVideoMouseLeave}
                        src={thumbnail_gif} type="video/mp4" />
                }
                <ImageBackground visible={hover} loading="lazy" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} src={thumbnail} />
                <Metadata>
                    <Actors>
                        <StyledLink
                            href={{
                                pathname: `/watch/[video]`,
                                query: { video: id },
                            }}>
                            <VideoName>
                                {name}
                            </VideoName>
                        </StyledLink>
                    </Actors>
                    <Date>
                        {formatLocalDate(release_date)}
                    </Date>
                    <Name>
                        <Info>
                            <StarsContainer>
                                {stars && stars.length !== 0 ? stars.map((star) => (
                                    <StyledLink key={star.id}
                                        href={{
                                            pathname: `/stars/[star]`,
                                            query: { star: star.id },
                                        }}>
                                        <ProfileImage>
                                            <FramePicture>
                                                <ObjectImage>
                                                    <ImageBackgroundTest loading="lazy" src={star.thumbnail} title={star.name} />
                                                    <StarName>
                                                        {star.name}
                                                    </StarName>
                                                </ObjectImage>
                                            </FramePicture>
                                        </ProfileImage>
                                    </StyledLink>
                                )) : []}
                            </StarsContainer>
                        </Info>
                    </Name>
                    <Data>
                        <Info>
                            <Percentage>
                                <ProfileImage>
                                    <FramePicture>
                                        <ObjectImage>
                                            <ImageBackgroundTest loading="lazy" type={owners.length && owners[0].type} src={owners.length && owners[0].thumbnail} />
                                        </ObjectImage>
                                    </FramePicture>
                                </ProfileImage>
                                <StyledLink
                                    href={{
                                        pathname: `/channels/[channel]`,
                                        query: { channel: owners[0].company },
                                    }}>
                                    <StarName>
                                        {owners.length && owners[0].name}
                                    </StarName>
                                </StyledLink>
                                <ChannelIcon />
                            </Percentage>
                        </Info>
                    </Data>
                </Metadata>
            </Container>
        </VideoContainer>
    )
}

export default VideoCard
import React from 'react'
import VideoCard from '../components/VideoCard'
import Slider from 'react-slick';
import styled from 'styled-components'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Container = styled.div`
    min-height: 420px;
    padding: 0px 0.5rem;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
`;

const Title = styled.h3`
    line-height: 1.15;
    font-size: 1.2rem;
    color: var(--second);
`;

const SlickSlider = styled(Slider)`
    width: 100%;
    min-height: 340px !important;
`;
export default function VideoCarouselContainer({ videos, title }) {
    let settings = {
        arrows: false,
        dots: true,
        speed: 500,
        initialSlide: 0,
        slidesToShow: 4,
        slidesToScroll: 6,
        responsive: [
            {
                breakpoint: 1820,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    dots: true
                }
            },
            {
                breakpoint: 1480,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    dots: true
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: true
                }
            },
            {
                breakpoint: 920,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true
                }
            },
            {
                breakpoint: 680,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]
    };
    return (
        <>
            <Container>
                <Title>{title}</Title>
                <SlickSlider {...settings}>
                    {videos && videos.length !== 0 ? videos.map(video =>
                        <VideoCard key={video.id} {...video} />
                    ) : []}
                </SlickSlider>
            </Container>
        </>
    )
}
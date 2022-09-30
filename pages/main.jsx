import React from 'react'
import VideoCard from '../components/VideoCard'

export default function main({ videos }) {
    return (
        <>
            {videos && videos.length !== 0 ? videos.map(video =>
                <VideoCard key={video.id} {...video} />
            ) : []}
        </>
    )
}
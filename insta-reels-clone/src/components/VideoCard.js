import React, { useRef, useState } from 'react'
import './VideoCard.css'

const VideoCard = () => {
    // kinda like a pointer, pointing to something. for pointing to vids here
    const videoRef = useRef(null)
    const [isVidPlaying, setIsVidPlaying] = useState(false)

    const onVideoPress = () => {
        if (isVidPlaying) {
            //stop vid
            //play vid //takes the current video videroRef pointer is pointing to, and pauses it
            videoRef.current.pause();
            setIsVidPlaying(false)
        }
        else {
            //play vid //takes the current video videroRef pointer is pointing to, and plays it
            videoRef.current.play();
            setIsVidPlaying(true)
        }
    }


    return (
        <div className='videoCard'>
            <video className='videoPlayer'
                ref={videoRef}
                onClick={onVideoPress}
                src='/videos/1564674844-disney.mp4'
                alt='IG reel video'
                loop
            />
        </div>
    )
}

export default VideoCard

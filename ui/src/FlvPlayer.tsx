import React, { useRef, useEffect } from 'react';
import FLVJS from 'flv.js';

interface MyFlvPlayerProps {
    url: string;
}

export const FlvPlayer: React.FC<MyFlvPlayerProps> = ({ url }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const playerRef = useRef<FLVJS.Player | null>(null);

    useEffect(() => {
        if (FLVJS.isSupported()) {
            playerRef.current = FLVJS.createPlayer({
                type: 'flv',
                url: url,
            });
            playerRef.current.attachMediaElement(videoRef.current!);
            playerRef.current.load();
            playerRef.current.play();
        }
    }, [url]);

    return (
        <div>
            <video ref={videoRef} controls width="100%" style={{height: "calc(100vh - 10px)"}}></video>
        </div>
    );
};


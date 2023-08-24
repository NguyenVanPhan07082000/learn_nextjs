// components/AudioPlayer.tsx

import { Stack } from '@mui/material';
import { useEffect, useRef } from 'react';

interface AudioPlayerProps {
    source: string;
    autoPlay?: boolean;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ source, autoPlay = false }) => {
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        if (autoPlay && audioRef.current) {
            audioRef.current.play();
        }
    }, [autoPlay]);

    const handleMouseOver = () => {
        const audio = new Audio(source);
        audio.play();
    };

    return (
        <Stack>
            <audio ref={audioRef} controls autoPlay={autoPlay} loop>
                <source src={source} type="audio/mp3" />
                Your browser does not support the audio element.
            </audio>
        </Stack>
    );
};

export default AudioPlayer;

'use client'
import { useEffect, useState } from 'react';
import { Howl } from 'howler';

const AudioPlayer = ({ src }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [sound, setSound] = useState(null);

    useEffect(() => {
        const newSound = new Howl({
            src: [src],
            volume: 0.5,
            html5: true,
            onend: () => {
                // Se llama cuando la pista de audio llega al final
                setIsPlaying(false);
            },
        });

        setSound(newSound);

        // Iniciar la reproducción después de un segundo
        const playAfterDelay = setTimeout(() => {
            newSound.play();
            setIsPlaying(true);
        }, 1000);

        return () => {
            clearTimeout(playAfterDelay);
            newSound.unload();
        };
    }, [src]);

    const togglePlayPause = () => {
        if (isPlaying) {

            sound.pause();
        } else {
            setIsPlaying(true);
            sound.play();
        }

        setIsPlaying(!isPlaying);
    };

    return (
        <div>
            <button onClick={togglePlayPause} className='absolute top-0 right-0 buttons-navigation  mt-6 mr-6 text-brown'>
                {isPlaying ? <svg xmlns="http://www.w3.org/2000/svg" className='size-12 md:size-20 p-2 md:p-4' fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z" />
                </svg>
                    : <svg xmlns="http://www.w3.org/2000/svg" fill="none" className='size-12 md:size-20 p-2 md:p-4' viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                    </svg>
                }
            </button>
        </div>
    );
};

export default AudioPlayer;
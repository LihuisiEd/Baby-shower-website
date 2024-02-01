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

        return () => {
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
        <div className='z-50'>
            <button onClick={togglePlayPause} className='absolute top-0 right-0 bg-white rounded-full motion-safe:animate-bounce shadow-xl shadow-amber-600/10  focus:animate-none mt-6 mr-6 p-4 text-brown'>
                {isPlaying ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd" d="M19.952 1.651a.75.75 0 0 1 .298.599V16.303a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.403-4.909l2.311-.66a1.5 1.5 0 0 0 1.088-1.442V6.994l-9 2.572v9.737a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.402-4.909l2.31-.66a1.5 1.5 0 0 0 1.088-1.442V5.25a.75.75 0 0 1 .544-.721l10.5-3a.75.75 0 0 1 .658.122Z" clip-rule="evenodd" />
                </svg>

                    : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-zinc-400">
                        <path fill-rule="evenodd" d="M19.952 1.651a.75.75 0 0 1 .298.599V16.303a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.403-4.909l2.311-.66a1.5 1.5 0 0 0 1.088-1.442V6.994l-9 2.572v9.737a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.402-4.909l2.31-.66a1.5 1.5 0 0 0 1.088-1.442V5.25a.75.75 0 0 1 .544-.721l10.5-3a.75.75 0 0 1 .658.122Z" clip-rule="evenodd" />
                    </svg>

                }
            </button>
        </div>
    );
};

export default AudioPlayer;
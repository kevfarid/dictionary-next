'use client';

import { Play, Pause } from 'lucide-react';
import { useAudioPlayer } from '../hooks/use-audio-player';
import { useMemo } from 'react';

type AudioPlayerProps = {
  audioUrl?: string;
};

function ButtonSound({ audioUrl = '' }: AudioPlayerProps) {
  const { isPlaying, togglePlayPause, audioRef, handleAudioEnd } =
    useAudioPlayer({ audioUrl });

  const playPauseButton = useMemo(
    () =>
      isPlaying ? (
        <Pause className='w-5 h-5' fill='currentColor' />
      ) : (
        <Play className='w-5 h-5' fill='currentColor' />
      ),
    [isPlaying]
  );

  if (!audioUrl) return null;

  return (
    <div className='relative flex items-center justify-center'>
      <button
        type='button'
        aria-label={isPlaying ? 'Pausar audio' : 'Reproducir audio'}
        onClick={togglePlayPause}
        className='text-purple-500 flex items-center justify-center h-12 w-12 rounded-full bg-purple-300 hover:bg-purple-100 transition-all duration-200 ease-in-out cursor-pointer'
      >
        {playPauseButton}
      </button>
      <audio
        ref={audioRef}
        src={audioUrl}
        preload='auto'
        onEnded={handleAudioEnd}
      />
    </div>
  );
}

export default ButtonSound;

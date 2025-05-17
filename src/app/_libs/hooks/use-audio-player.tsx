'use client';

import { useState, useRef, useEffect, useCallback, useMemo } from 'react';

type UseAudioPlayerProps = {
  audioUrl: string;
};

export function useAudioPlayer({ audioUrl }: UseAudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = audioUrl;
      audioRef.current.load();
    }
  }, [audioUrl]);

  const togglePlayPause = useCallback(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying((prev) => !prev);
    }
  }, [isPlaying]);

  const handleAudioEnd = useCallback(() => {
    setIsPlaying(false);
  }, []);

  const controller = useMemo(
    () => ({
      isPlaying,
      togglePlayPause,
      audioRef,
      handleAudioEnd,
    }),
    [isPlaying, togglePlayPause, handleAudioEnd]
  );

  return controller;
}

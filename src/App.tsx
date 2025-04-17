// TODO: Optimize the navigations
import { useEffect } from 'react';

import { ConfigProvider } from 'antd';
import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';

import BackgroundMusic from '@/assets/audios/background-music.mp3';
import { antdTheme } from '@/configs/antd/antdTheme.config';
import { router } from '@/routes';

import { useComponentStore } from './stores/common';

function App() {
  const { isBackgroundMusicMuted } = useComponentStore((state) => state);

  // play background music
  useEffect(() => {
    const backgroundMusic = document.getElementById('background_music');
    if (!isBackgroundMusicMuted) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (backgroundMusic as any)?.play();
    } else if (backgroundMusic && isBackgroundMusicMuted) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (backgroundMusic as any)?.pause();
    }
  }, [isBackgroundMusicMuted]);
  return (
    <HelmetProvider>
      <ConfigProvider theme={antdTheme}>
        {/* Background Music */}
        <audio
          id="background_music"
          src={BackgroundMusic}
          controls
          loop
          style={{ display: 'none' }}
        />

        {/* Route */}
        <RouterProvider router={router} />
      </ConfigProvider>
    </HelmetProvider>
  );
}

export default App;

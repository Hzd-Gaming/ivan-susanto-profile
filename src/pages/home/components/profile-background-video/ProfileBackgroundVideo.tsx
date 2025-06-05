import { useEffect, useRef } from 'react';

import BackgroundProfileVideoSrc from '@/assets/videos/profile-background-compressed.mp4';
import './ProfileBackgroundVide.scss';

const ProfileBackgroundVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef?.current) {
      const videoRefCur = videoRef.current;
      videoRefCur.ontimeupdate = () => {
        const videoCurTime = videoRefCur?.currentTime;
        const videoDuration = videoRefCur?.duration;
        const lagTimeTolerance = 0.5;

        if (videoCurTime + lagTimeTolerance >= videoDuration) {
          videoRefCur.currentTime = 6.25;
        }
      };
    }
  }, [videoRef]);

  return (
    <video
      ref={videoRef}
      className="profile-background-video"
      autoPlay
      muted
      loop>
      <source src={BackgroundProfileVideoSrc} />
    </video>
  );
};

export default ProfileBackgroundVideo;

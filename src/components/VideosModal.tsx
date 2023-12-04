import React, { Children, MutableRefObject, useEffect, useState,useRef } from 'react';
import iconClose from '../assets/icon-close.png'
interface VideosModalProps {
  videosName: string;
}

const VideosModal: React.FC<VideosModalProps> = ({ videosName }) => {
  // const [videoSrc, setVideoSrc] = useState<string>('');
  const iframe: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const iframeVideo: MutableRefObject<HTMLIFrameElement | null> = useRef(null);

  const openVideoPopup = (src: string) => {
    iframeVideo.current?.setAttribute('src',src+'?autoplay=1&rel=0');
    iframe.current?.classList.add('show-video');
  };

  const closeVideoPopup = () => {
        iframe.current?.classList.remove('show-video');
        iframeVideo.current?.setAttribute('src','');
  };



  return (
    <div className='body-videos'>
      <div className='container wrapper-videos' >
        <div className="flex flex-wrap relative w-[1200px]">
          <div className="lg:w-1/3 md:w-1/2 sm:w-1/2 p-4">
            <div className="iframe-video" onClick={() => { openVideoPopup("https://www.youtube.com/embed/rfSWR3L21zc?si=FRCK_P5bMTEuORZD") }}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/rfSWR3L21zc?si=FRCK_P5bMTEuORZD"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <h2>some title</h2>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 sm:w-1/2 p-4">
            <div className="iframe-video" onClick={() => { openVideoPopup("https://www.youtube.com/embed/zDNdN80QlfM?si=EMA-FswROHQ-SBw0") }}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/zDNdN80QlfM?si=EMA-FswROHQ-SBw0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <h2 >some title</h2>

            </div>

          </div>
          <div className="lg:w-1/3 md:w-1/2 sm:w-1/2 p-4">
            <div className="iframe-video" onClick={() => { openVideoPopup("https://www.youtube.com/embed/S4_WxmvcOeo?si=clO8FH0rZnl5NmZN") }}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/S4_WxmvcOeo?si=clO8FH0rZnl5NmZN"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <h2>some title</h2>

            </div>
          </div>
        </div>
      </div>
      <div className="video-popup" ref={iframe}>
        <div className="iframe-wrapper">
          <iframe width="100%" height="100%" src="" title="YouTube video player" ref={iframeVideo}
            frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <button className="close-btn" style={{ backgroundImage: `url(${iconClose})`, scale: '2', backgroundColor: 'white' }} onClick={()=>{closeVideoPopup()}}></button>
      </div>

    </div>
  );
};

export default VideosModal;

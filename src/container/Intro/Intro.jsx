import React, { useRef, useState } from "react";

import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
// import { meal } from "../../constants";

import "./Intro.css";

const Intro = () => {
  const [playVideo, setplayVideo] = useState(false);
  const vidRef = useRef();

  const handleVideo = () => {
    setplayVideo(prevPlayVideo => !prevPlayVideo);
    playVideo ? vidRef.current.pause() : vidRef.current.play();
  };

  const videoUrl =
    "https://www.youtube.com/embed/fNab9GluTs4?controls=0?modestbranding?rel=0?autoplay=1?loop=1";

  return (
    <div className="app__video">
      <iframe
        className="app__video_iframe"
        src={videoUrl}
        title="meal video"
        frameborder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>

      {/* <video
        src={meal}
        ref={vidRef}
        type="vide/mp4"
        loop
        controls={false}
        muted
      />
      <div
        className="app__video-overlay flex__center"
        onClick={handleVideo}
        style={{ background: playVideo ? "transparent" : " " }}
      >
        <div className="app__video-overlay_circle flex__center">
          {playVideo ? (
            <BsPauseFill style={{ color: "#fff", fontSize: "2rem" }} />
          ) : (
            <BsFillPlayFill style={{ color: "#fff", fontSize: "2rem" }} />
          )}
        </div>
      </div> */}
    </div>
  );
};

export default Intro;

import { useEffect, useRef, useState } from "react";

export default function VideoPlayer() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  function handlePlay() {
    videoRef.current.play();
    setPlaying(true);
  }
  function handlePause() {
    videoRef.current.pause();
    setPlaying(false);
  }

  return (
    <div className="max-w-[500px] space-y-4 p-8 mx-auto">
      <h1 className="text-center font-bold text-3xl">Video Oynatıcı</h1>
      <video
        src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
        poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
        ref={videoRef}
      />
      <div className="flex justify-between">
        <button
          className={` font-semibold ${
            !playing
              ? "text-orange-500/40 cursor-not-allowed"
              : "text-orange-500 "
          }`}
          onClick={handlePause}
          disabled={!playing}
        >
          Duraklat
        </button>
        <div>{playing ? "Oynuyor" : "Duraklatıldı"}</div>
        <button
          className={` font-semibold ${
            playing
              ? "text-indigo-500/40 cursor-not-allowed"
              : "text-indigo-500 "
          }`}
          onClick={handlePlay}
          disabled={playing}
        >
          Oynat
        </button>
      </div>
    </div>
  );
}

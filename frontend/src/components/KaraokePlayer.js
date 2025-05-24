import React from "react";

const KaraokePlayer = ({ karaokeData }) => {
  return (
    <div>
      <audio controls className="w-full">
        <source src={karaokeData.audioUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div className="mt-4 text-lg text-gray-800">
        <p>{karaokeData.lyrics}</p>
      </div>
    </div>
  );
};

export default KaraokePlayer;
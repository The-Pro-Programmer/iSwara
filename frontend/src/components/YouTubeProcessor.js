import React, { useState } from "react";

const YouTubeProcessor = ({ userScale, setKaraokeData }) => {
  const [youtubeUrl, setYoutubeUrl] = useState("");

  const processYouTube = () => {
    // Simulate backend processing and scale conversion
    console.log("Processing YouTube song with user scale:", userScale);
    setTimeout(() => {
      setKaraokeData({
        audioUrl: "https://example.com/karaoke.mp3",
        lyrics: "Here are your lyrics..."
      });
    }, 2000);
  };

  return (
    <div>
      <input
        type="text"
        value={youtubeUrl}
        onChange={(e) => setYoutubeUrl(e.target.value)}
        placeholder="Enter YouTube Link"
        className="border p-2 rounded w-full mb-2"
      />
      <button
        onClick={processYouTube}
        className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700"
      >
        Process Song
      </button>
    </div>
  );
};

export default YouTubeProcessor;
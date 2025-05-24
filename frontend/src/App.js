import React, { useState } from "react";
import AudioRecorder from "./components/AudioRecorder";
import YouTubeProcessor from "./components/YouTubeProcessor";
import KaraokePlayer from "./components/KaraokePlayer";
import "./App.css";

function App() {
  const [userScale, setUserScale] = useState(0);
  const [karaokeData, setKaraokeData] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">iSwara - AI Powered Karaoke</h1>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-white rounded-2xl shadow-md p-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Step 1: Record or Upload Your Voice</h2>
          <AudioRecorder setUserScale={setUserScale} />
        </div>

        <div className="bg-white rounded-2xl shadow-md p-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Step 2: Provide YouTube Song Link</h2>
          <YouTubeProcessor userScale={userScale} setKaraokeData={setKaraokeData} />
        </div>
      </div>

      {karaokeData && (
        <div className="bg-white rounded-2xl shadow-md p-4 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Step 3: Play Karaoke</h2>
          <KaraokePlayer karaokeData={karaokeData} />
        </div>
      )}
    </div>
  );
}

export default App;

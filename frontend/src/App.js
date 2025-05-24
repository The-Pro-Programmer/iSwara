import React, { useState } from "react";
import AudioRecorder from "./components/AudioRecorder";

function App() {
  const [userScale, setUserScale] = useState("");

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🎵 iSwara Voice Scale Detector</h1>
      <AudioRecorder setUserScale={setUserScale} />
      {userScale && (
        <div className="mt-4 text-lg">
          Detected Scale: <strong>{userScale}</strong>
        </div>
      )}
    </div>
  );
}

export default App;

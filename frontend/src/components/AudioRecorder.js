import React, { useState } from "react";

const AudioRecorder = ({ setUserScale }) => {
  const [recording, setRecording] = useState(false);

  const startRecording = async () => {
    setRecording(true);
    // TODO: Add logic for recording audio and sending to backend
    console.log("Recording started...");
  };

  const stopRecording = async () => {
    setRecording(false);
    console.log("Recording stopped.");
    // Simulate detected scale for demonstration
    const detectedScale = 2; // Placeholder for actual AI scale detection
    setUserScale(detectedScale);
  };

  return (
    <div>
      <button
        onClick={recording ? stopRecording : startRecording}
        className="bg-purple-600 text-white px-4 py-2 rounded-xl hover:bg-purple-700"
      >
        {recording ? "Stop Recording" : "Start Recording"}
      </button>
    </div>
  );
};

export default AudioRecorder;
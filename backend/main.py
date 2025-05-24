from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from detect_scale import detect_pitch_from_audio

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, restrict to your frontend domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/detect-scale/")
async def detect_scale(audio: UploadFile = File(...)):
    scale = await detect_pitch_from_audio(audio)
    return {"scale": scale}

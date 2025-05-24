import librosa
import numpy as np
import tempfile

async def detect_pitch_from_audio(uploaded_file):
    with tempfile.NamedTemporaryFile(delete=False, suffix=".wav") as temp:
        temp.write(await uploaded_file.read())
        temp.flush()
        y, sr = librosa.load(temp.name)
        pitches, magnitudes = librosa.piptrack(y=y, sr=sr)
        pitch_values = pitches[magnitudes > np.median(magnitudes)]
        if len(pitch_values) == 0:
            return "Could not detect pitch"
        dominant_pitch = np.median(pitch_values)
        note = librosa.hz_to_note(dominant_pitch)
        return note

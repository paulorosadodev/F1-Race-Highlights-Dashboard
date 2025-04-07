import os

from dotenv import load_dotenv

load_dotenv() 

import google.generativeai as genai

def get_gemini_client():
    api_key = os.getenv("GOOGLE_API_KEY")

    genai.configure(api_key=api_key)

    model = genai.GenerativeModel(model_name="gemini-1.5-flash")

    return model

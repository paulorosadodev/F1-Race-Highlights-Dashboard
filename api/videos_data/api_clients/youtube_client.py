import os

from dotenv import load_dotenv

load_dotenv()

from googleapiclient.discovery import build

def get_youtube_client():
    api_key = os.getenv("YOUTUBE_API_KEY")
    return build("youtube", "v3", developerKey=api_key)

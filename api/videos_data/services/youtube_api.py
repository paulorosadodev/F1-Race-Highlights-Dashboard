from videos_data.api_clients.youtube_client import get_youtube_client

youtube = get_youtube_client()

def fetch_videos_data():
    playlist_id = "PLfoNZDHitwjUv0pjTwlV1vzaE0r7UDVDR"

    playlist_request = youtube.playlistItems().list(
        part="snippet,contentDetails",
        playlistId=playlist_id,
        maxResults=25
    )
    playlist_response = playlist_request.execute()

    video_data_list = []

    for item in playlist_response["items"]:
        video_id = item["contentDetails"]["videoId"]
        snippet = item["snippet"]
        title = snippet.get("title")
        published_at = snippet.get("publishedAt")
        description = snippet.get("description")
        thumbnail_url = snippet.get("thumbnails", {}).get("medium", {}).get("url")
        thumbnail_url_large = snippet.get("thumbnails", {}).get("high", {}).get("url")

        stats_request = youtube.videos().list(
            part="statistics",
            id=video_id
        )
        stats_response = stats_request.execute()
        stats = stats_response["items"][0]["statistics"]

        view_count = int(stats.get("viewCount", 0))
        like_count = int(stats.get("likeCount", 0))
        comment_count = int(stats.get("commentCount", 0))

        video_data = {
            "title": title,
            "video_id": video_id,
            "description": description,
            "published_at": published_at,
            "thumbnail_url": thumbnail_url,
            "thumbnail_url_large": thumbnail_url_large,
            "view_count": view_count,
            "like_count": like_count,
            "comment_count": comment_count,
        }

        video_data_list.append(video_data)

    return video_data_list

def fetch_comments_from_video(video_id):
    comments = []

    request_comments = youtube.commentThreads().list(
        part="snippet",
        videoId=video_id,
        maxResults=100,
        textFormat="plainText",
        order="relevance"
    )
    response_comments = request_comments.execute()

    for item in response_comments.get("items", []):
        comment = item["snippet"]["topLevelComment"]["snippet"]["textDisplay"]
        comments.append(comment)

    return comments


def get_video_statistics(video_data_list):

    if not video_data_list:
        return {}

    least_viewed = min(video_data_list, key=lambda x: x["view_count"])
    most_viewed = max(video_data_list, key=lambda x: x["view_count"])

    least_liked = min(video_data_list, key=lambda x: x["like_count"])
    most_liked = max(video_data_list, key=lambda x: x["like_count"])

    least_commented = min(video_data_list, key=lambda x: x["comment_count"])
    most_commented = max(video_data_list, key=lambda x: x["comment_count"])

    oldest_video = min(video_data_list, key=lambda x: x["published_at"])
    latest_video = max(video_data_list, key=lambda x: x["published_at"])

    total_views = sum(video["view_count"] for video in video_data_list)
    total_likes = sum(video["like_count"] for video in video_data_list)
    total_comments = sum(video["comment_count"] for video in video_data_list)
    video_count = len(video_data_list)
    avg_likes = total_likes // video_count if video_count else 0
    avg_views = total_views // video_count if video_count else 0

    return {
        "video_count": video_count,
        "total_views": total_views,
        "total_likes": total_likes,
        "total_comments": total_comments,
        "average_views": avg_views,
        "average_likes": avg_likes,
        "period": {
            "start": oldest_video["published_at"],
            "end": latest_video["published_at"]
        },
        "oldest_video": oldest_video,
        "latest_video": latest_video,
        "most_viewed": most_viewed,
        "least_viewed": least_viewed,
        "most_liked": most_liked,
        "least_liked": least_liked,
        "most_commented": most_commented,
        "least_commented": least_commented,
        "videos": video_data_list
    }

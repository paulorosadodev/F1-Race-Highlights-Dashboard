import { VideoData } from "./VideoData";

export type DashboardData = {
    total_views: number;
    total_likes: number;
    total_comments: number;
    video_count: number;
    average_views: number;
    average_likes: number;
    period: {
        start: string;
        end: string;
    };
    latest_video: VideoData;
    most_viewed: VideoData;
    least_viewed: VideoData;
    most_liked: VideoData;
    least_liked: VideoData;
    most_commented: VideoData;
    least_commented: VideoData;
    oldest_video: VideoData;
    videos: VideoData[];
};
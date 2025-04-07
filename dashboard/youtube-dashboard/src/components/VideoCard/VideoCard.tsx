import { VideoData } from "../../@types/VideoData";
import { VideoWrapper } from "./styles";
import { formatNumber } from "../../utils/formatNumber";

import { Eye, ThumbsUp, ChatCircle } from "@phosphor-icons/react";
import { formatDate } from "../../utils/formatDate";
import { Link } from "react-router-dom";

type Props = {
    video: VideoData | null;
};

export function VideoCard({ video }: Props) {
    return (
        <VideoWrapper>
            <Link to={`/video/${video?.video_id}`}>
                <img src={video?.thumbnail_url ?? ""} alt={video?.title ?? ""} />
                <div className="video-data">
                    <h2>{video?.title}</h2>
                    <div className="video-number-data">
                        <span><Eye size={16} /> {formatNumber(video?.view_count.toString() ?? "")}</span>
                        <span><ThumbsUp size={16} /> {formatNumber(video?.like_count.toString() ?? "")}</span>
                        <span><ChatCircle size={16} /> {formatNumber(video?.comment_count.toString() ?? "")}</span>
                    </div>
                    <p className="date">{formatDate(video?.published_at ?? "")}</p>
                </div>
            </Link>
        </VideoWrapper>
    );
}

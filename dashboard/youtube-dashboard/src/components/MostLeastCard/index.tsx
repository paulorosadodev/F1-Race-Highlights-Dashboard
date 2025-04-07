import { VideoData } from "../../@types/VideoData";
import { formatNumber } from "../../utils/formatNumber";
import { MostLeastWrapper, StyledLink } from "./styles";
import {Eye, ThumbsUp, ChatCircle} from "@phosphor-icons/react";

type Props = {
    video: VideoData | null;
    type: {
        metric: "view" | "like" | "comment",
        rank: "most" | "least",
    }
};

const icon = {
    view: <Eye />,
    like: <ThumbsUp />,
    comment: <ChatCircle />
};

export function MostLeastCard({ video, type }: Props){

    const data = {
        view: video?.view_count,
        like: video?.like_count,
        comment: video?.comment_count,
    };

    return(
        <MostLeastWrapper>
            <StyledLink to={`/video/${video?.video_id}`}>
                {/* <img src={video?.thumbnail_url_large ?? ""} /> */}
                <img src={video?.thumbnail_url ?? ""} />
                <h3>{video?.title}</h3>
                {icon[type.metric]}
                <p>{formatNumber(data[type.metric]?.toString() ?? "")}</p>
            </StyledLink>
        </MostLeastWrapper>
    );

}
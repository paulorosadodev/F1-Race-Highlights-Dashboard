import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useVideos } from "../../hooks/useVideos";

import { VideoData } from "../../@types/VideoData";

import Loading from "../../components/Loading";
import { SummaryCards } from "../../components/SummaryCards";

import { fetchVideoDetails } from "../../api/endpoints/video-comments";

import { CommentsWrapper, DataWrapper, SummaryWrapper, TextWrapper, VideoDetailsWrapper } from "./styles";

type CommentsResponse = string[];
type SummaryResponse = string;

export default function VideoDetails() {
    const { id } = useParams<{ id: string }>();
    const { dashboard, loading, error } = useVideos();
    const [video, setVideo] = useState<VideoData>({} as VideoData);
    const [comments, setComments] = useState<CommentsResponse>([]);
    const [summary, setSummary] = useState<SummaryResponse>("");
    const [summaryLoading, setSummaryLoading] = useState(true);
    const [commentsLoading, setCommentsLoading] = useState(true);


    useEffect(() => {
        if (dashboard?.videos) {
            const videoTemp = dashboard.videos.find((video) => video.video_id === id);
            if (videoTemp) setVideo(videoTemp);
        }
    }, [dashboard, id]);

    useEffect(() => {
        if (!id) return;

        const loadDetails = async () => {
            try {
                setSummaryLoading(true);
                setCommentsLoading(true);
                const { summary, comments } = await fetchVideoDetails(id);
                setSummary(summary);
                setComments(comments);
            } catch (err) {
                console.error("Erro ao buscar detalhes do vídeo:", err);
            } finally {
                setSummaryLoading(false);
                setCommentsLoading(false);
            }
        };

        loadDetails();
    }, [id]);

    return (
        <VideoDetailsWrapper>
            {loading ? (
                <Loading />
            ) : error ? (
                <h1 id="error">Erro ao buscar vídeos</h1>
            ) : (
                <>
                    <DataWrapper>
                        <TextWrapper>
                            <h1>{video.title}</h1>
                            <p>{video.description}</p>
                            <SummaryCards
                                totalViews={video.view_count}
                                totalLikes={video.like_count}
                                totalComments={video.comment_count}
                                publishedAt={video.published_at}
                            />
                        </TextWrapper>
                        <a href={`https://www.youtube.com/watch?v=${video.video_id}`} target="_blank" rel="noreferrer">
                            <img src={video.thumbnail_url_large} alt="Thumbnail" />
                        </a>
                    </DataWrapper>
                    <SummaryWrapper>
                        <h2>O que estão comentando?</h2>
                        {summaryLoading ? (
                            <Loading />
                        ) : summary.length > 0 ? (
                            <p>{summary}</p> 
                        ) : (
                            <p>Sem resumo disponível</p>
                        )}
                    </SummaryWrapper>
                    <CommentsWrapper>
                        <h2>Principais comentários</h2>
                        {commentsLoading ? (
                            <Loading />
                        ) : comments.length > 0 ? (
                            <ul>
                                {comments.map((comment, index) => (
                                    <li key={index}>{comment}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>Sem comentários disponíveis</p>
                        )}
                    </CommentsWrapper>
                    <br />
                </>
            )}
        </VideoDetailsWrapper>
    );
}

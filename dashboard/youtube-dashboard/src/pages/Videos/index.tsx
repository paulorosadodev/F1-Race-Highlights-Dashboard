import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import { useVideos } from "../../hooks/useVideos";
import { VideoCard } from "../../components/VideoCard/VideoCard";
import { VideosWrapper, VideoContainer, SearchInput, SortSelect, DirectionButton, InputWrapper, SortInput } from "./styles";
import { ArrowDown, ArrowUp } from "@phosphor-icons/react";
import { VideoData } from "../../@types/VideoData";

export function Videos() {
    const { dashboard, loading, error } = useVideos();
    const [searchTerm, setSearchTerm] = useState("");
    const [sortField, setSortField] = useState("date");
    const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
    const [filteredVideos, setFilteredVideos] = useState<VideoData[]>([]);


    const videos = dashboard?.videos ?? [];

    useEffect(() => {
        const filteredVideosTemp = videos
            .filter((video) =>
                video.title?.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .sort((a, b) => {
                const getValue = (video: VideoData) => {
                    switch (sortField) {
                    case "views": return video.view_count;
                    case "likes": return video.like_count;
                    case "comments": return video.comment_count;
                    case "date": return new Date(video.published_at).getTime();
                    default: return 0;
                    }
                };
    
                const valueA = getValue(a);
                const valueB = getValue(b);
    
                return sortDirection === "asc" ? valueA - valueB : valueB - valueA;
            });
        setFilteredVideos(filteredVideosTemp);

    }, [videos, sortField, sortDirection, searchTerm]);

    return (
        <VideosWrapper>
            <InputWrapper>
                <SearchInput
                    type="text"
                    placeholder="Pesquisar vídeos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <SortInput>
                    <SortSelect
                        value={sortField}
                        onChange={(e) => setSortField(e.target.value)}
                    >
                        <option value="views">Visualizações</option>
                        <option value="likes">Curtidas</option>
                        <option value="comments">Comentários</option>
                        <option value="date">Data de postagem</option>
                    </SortSelect>

                    <DirectionButton onClick={() =>
                        setSortDirection(prev => prev === "asc" ? "desc" : "asc")
                    }>
                        {sortDirection === "asc" ? <ArrowUp size={20} /> : <ArrowDown size={20} />}
                    </DirectionButton>
                </SortInput>
            </InputWrapper>

            {loading ? (
                <Loading />
            ) : error ? (
                <h1>Erro ao buscar vídeos</h1>
            ) : (
                <VideoContainer>
                    {filteredVideos.map((video) => (
                        <VideoCard key={video.video_id} video={video} />
                    ))}
                </VideoContainer>
            )}
        </VideosWrapper>
    );
}

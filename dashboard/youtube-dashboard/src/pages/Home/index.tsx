import { useVideos } from "../../hooks/useVideos";
import { formatDate } from "../../utils/formatDate";
import { CountChartsWrapper, HomeWrapper, MostLeastVideosWrapper } from "./styles";

import Loading from "../../components/Loading";
import { SummaryCards } from "../../components/SummaryCards";
import { TopVideosChart } from "../../components/TopVideoCharts";
import { ViewsOverTimeChart } from "../../components/ViewsOverTimeChart";
import { MostLeastCard } from "../../components/MostLeastCard";

import {TrendUp, TrendDown} from "@phosphor-icons/react";
import { useEffect, useState } from "react";

export function Home() {

    const { dashboard, loading, error } = useVideos();
    const [viewsOverTime, setViewsOverTime] = useState<{date: string, views: number}[]>([]);

    useEffect(() => {
        if (dashboard?.videos) {
            const viewsOverTimeTemp = dashboard.videos.map(video => ({
                date: formatDate(video.published_at ?? ""),
                views: Number(video.view_count),
            }));
            setViewsOverTime(viewsOverTimeTemp);
        }
    }, [dashboard]);

    return(
        <HomeWrapper>
            {loading ? (
                <Loading />
            ) : error ? (
                <h1>Erro ao buscar vídeos</h1>
            ) : (
                <>
                    <SummaryCards
                        totalViews={dashboard.total_views}
                        totalLikes={dashboard.total_likes}
                        totalComments={dashboard.total_comments}
                        totalVideos={dashboard.video_count}
                        oldestDate={formatDate(dashboard.oldest_video?.published_at ?? "")}
                        newestDate={formatDate(dashboard.latest_video?.published_at ?? "")}
                    />
                    <CountChartsWrapper>
                        <TopVideosChart className="chart views" data={dashboard.videos} metric="view_count" />
                        <TopVideosChart className="chart likes" data={dashboard.videos} metric="like_count" />
                    </CountChartsWrapper>
                    <ViewsOverTimeChart className="chart views-over-time" data={viewsOverTime} />
                    <MostLeastVideosWrapper>
                        <div className="most-least-container">
                            <div className="least-container">
                                <h2><TrendDown className="down" /> Menos visualizado</h2>
                                <MostLeastCard type={{metric: "view", rank: "least"}} video={dashboard.least_viewed}/>
                            </div>
                            <div className="most-container">
                                <h2><TrendUp className="up" /> Mais visualizado</h2>
                                <MostLeastCard type={{metric: "view", rank: "most"}} video={dashboard.most_viewed}/>
                            </div>
                        </div>
                        <div className="most-least-container">
                            <div className="least-container">
                                <h2><TrendDown className="down" /> Menos curtido</h2>
                                <MostLeastCard type={{metric: "like", rank: "least"}} video={dashboard.least_liked}/>
                            </div>
                            <div className="most-container">
                                <h2><TrendUp className="up" /> Mais curtido</h2>
                                <MostLeastCard type={{metric: "like", rank: "most"}} video={dashboard.most_liked}/>
                            </div>
                        </div>
                        <div className="most-least-container">
                            <div className="least-container">
                                <h2><TrendDown className="down" /> Menos comentado</h2>
                                <MostLeastCard type={{metric: "comment", rank: "least"}} video={dashboard.least_commented}/>
                            </div>
                            <div className="most-container">
                                <h2><TrendUp className="up" /> Mais comentado</h2>
                                <MostLeastCard type={{metric: "comment", rank: "most"}} video={dashboard.most_commented}/>
                            </div>
                        </div>
                    </MostLeastVideosWrapper>
                </>
            )}
        </HomeWrapper>
    );

}

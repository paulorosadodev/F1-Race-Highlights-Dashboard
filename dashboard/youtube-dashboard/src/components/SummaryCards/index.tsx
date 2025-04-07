import { Eye, ThumbsUp, ChatCircle, VideoCamera, CalendarBlank } from "@phosphor-icons/react";
import { CardContainer, MetricCard } from "./styles";
import { formatDate } from "../../utils/formatDate";

type SummaryProps = {
    totalViews?: number;
    totalLikes?: number;
    totalComments?: number;
    totalVideos?: number;
    oldestDate?: string;
    newestDate?: string;
    publishedAt?: string;
};

export function SummaryCards({
    totalViews,
    totalLikes,
    totalComments,
    totalVideos,
    oldestDate,
    newestDate,
    publishedAt
}: SummaryProps) {
    return (
        <CardContainer>
            {totalViews && 
                <MetricCard>
                    <Eye size={32} weight="duotone" />
                    <div>
                        <h3>Visualizações</h3>
                        <strong>{totalViews.toLocaleString("pt-BR")}</strong>
                    </div>
                </MetricCard>
            }

            {totalLikes && 
                <MetricCard>
                    <ThumbsUp size={32} weight="duotone" />
                    <div>
                        <h3>Curtidas</h3>
                        <strong>{totalLikes.toLocaleString("pt-BR")}</strong>
                    </div>
                </MetricCard>
            }
            
            {totalComments &&
                <MetricCard>
                    <ChatCircle size={32} weight="duotone" />
                    <div>
                        <h3>Comentários</h3>
                        <strong>{totalComments.toLocaleString("pt-BR")}</strong>
                    </div>
                </MetricCard>
            }

            {totalVideos && 
                <MetricCard>
                    <VideoCamera size={32} weight="duotone" />
                    <div>
                        <h3>Vídeos</h3>
                        <strong>{totalVideos.toLocaleString("pt-BR")}</strong>
                    </div>
                </MetricCard>
            }

            {(oldestDate && newestDate) && 
                <MetricCard>
                    <div className="icon-wrapper">
                        <CalendarBlank size={32} weight="duotone" />
                    </div>
                    <div className="text">
                        <h3>Período</h3>
                        <strong>
                            {oldestDate} à {newestDate}
                        </strong>
                    </div>
                </MetricCard>
            }

            {publishedAt && 
                <MetricCard>
                    <div className="icon-wrapper">
                        <CalendarBlank size={32} weight="duotone" />
                    </div>
                    <div className="text">
                        <h3>Publicado em</h3>
                        <strong>{formatDate(publishedAt)}</strong>
                    </div>
                </MetricCard>
            }

        </CardContainer>
    );
}

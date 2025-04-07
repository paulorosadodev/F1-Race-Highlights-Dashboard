import { useTheme } from "styled-components";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

import { VideoData } from "../../@types/VideoData";
import { ChartContainer, CustomTooltip } from "./styles";

interface TopVideosChartProps {
    data: VideoData[];
    metric: "view_count" | "like_count" | "comment_count";
    className: string;
}

const title = {
    "view_count": "Mais vistos",
    "like_count": "Mais curtidos",
    "comment_count": "Mais comentados"
};

export function TopVideosChart({ data, metric, ...props }: TopVideosChartProps) {

    const theme = useTheme();

    const sorted = [...data]
        .sort((a, b) => Number(b[metric]) - Number(a[metric]))
        .slice(0, 5)
        .reverse();

    return (
        <ChartContainer {...props}>
            <h2>{title[metric]}</h2>
            <ResponsiveContainer  width="100%" height="100%">
                <BarChart className="responsive-container"
                    layout="vertical"
                    data={sorted}
                    margin={{ top: 10, right: 30, left: 80, bottom: 10 }}
                >
                    <XAxis type="number" tickFormatter={(value) => value.toLocaleString("pt-BR")} />
                    <YAxis
                        dataKey="title"
                        type="category"
                        width={200}
                        tickFormatter={(value: string) => {
                            const raceHighlightsPattern = /^Race Highlights \| (\d{4}) (.+)$/;
                            const match = value.match(raceHighlightsPattern);
                            if (match) {
                                const [, year, gpName] = match;
                                return `${gpName} ${year}`;
                            }
                            return value;
                        }}
                    />
                    <Tooltip
                        content={({ active, payload }) => {
                            if (!active || !payload?.length) return null;
                            const item = payload[0].payload;

                            const handleClick = () => {
                                if (item.video_id) {
                                    window.open(`https://www.youtube.com/watch?v=${item.video_id}`, "_blank");
                                }
                            };

                            return (
                                <CustomTooltip onClick={handleClick}>
                                    <img
                                        src={item.thumbnail_url}
                                        width={120}
                                        style={{ borderRadius: 6, marginBottom: 8 }}
                                    />
                                    <p>{item.title}</p>
                                    <p>
                                        {metric === "view_count" && `👁️ ${item.view_count?.toLocaleString()}`}
                                        {metric === "like_count" && `👍 ${item.like_count?.toLocaleString()}`}
                                        {metric === "comment_count" && `💬 ${item.comment_count?.toLocaleString()}`}
                                    </p>
                                </CustomTooltip>
                            );
                        }}
                    />
                    <Bar dataKey={metric} fill={theme["red-700"]}>
                        {sorted.map((_, index) => (
                            <Cell key={index} fill={theme["red-500"]} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </ChartContainer>
    );
}
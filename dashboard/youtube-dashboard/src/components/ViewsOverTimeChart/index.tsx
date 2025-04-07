import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import styled, { useTheme } from "styled-components";
import { ChartWrapper } from "./styles";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    data: { date: string; views: number }[];
}


export const ViewsOverTimeChart = ({ data, className }: Props) => {
    const theme = useTheme();

    return (
        <ChartWrapper className={className}>
            <h2>Visualizações ao longo do tempo</h2>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={[...data].reverse()} margin={{ top: 10, right: 30, left: 40, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke={theme["carbon-700"]} />
                    <XAxis dataKey="date" stroke={theme["gray-500"]} />
                    <YAxis stroke={theme["gray-500"]} tickFormatter={(value) => value.toLocaleString("pt-BR")} />
                    <Tooltip content={<CustomTooltip />} />
                    <Line type="monotone" dataKey="views" stroke={theme["red-700"]} strokeWidth={3} />
                </LineChart>
            </ResponsiveContainer>
        </ChartWrapper>
    );
};

const TooltipContainer = styled.div`
    background: ${({ theme }) => theme["gray-800"]};
    color: ${({ theme }) => theme["white"]};
    padding: 8px 12px;
    border-radius: 8px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
    font-size: 14px;
`;

interface CustomTooltipProps {
    active?: boolean;
    payload?: any;
    label?: string;
}

export const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
    if (active && payload && payload.length) {
        return (
            <TooltipContainer>
                <p><strong>Data:</strong> {label}</p>
                <p><strong>Visualizações:</strong> {payload[0].value.toLocaleString("pt-BR")}</p>
            </TooltipContainer>
        );
    }

    return null;
};

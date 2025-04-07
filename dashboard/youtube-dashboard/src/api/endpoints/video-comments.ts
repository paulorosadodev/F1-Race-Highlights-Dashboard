import api from "../axios";

const ONE_HOUR = 1000 * 60 * 60;

type VideoDetails = {
    summary: string;
    comments: string[];
};

export const fetchVideoDetails = async (id: string): Promise<VideoDetails> => {
    const cacheKey = `video-details-${id}`;
    const cached = localStorage.getItem(cacheKey);

    if (cached) {
        const parsed = JSON.parse(cached);
        if (Date.now() - parsed.timestamp < ONE_HOUR) {
            return parsed.data;
        }
    }

    const res = await api.get<VideoDetails>(`video/${id}/comments`);
    const data = res.data;

    localStorage.setItem(
        cacheKey,
        JSON.stringify({ data, timestamp: Date.now() })
    );

    return data;
};

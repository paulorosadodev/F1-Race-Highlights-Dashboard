import { createContext, useEffect, useState } from "react";
import { DashboardData } from "../@types/DashboardData";
import { fetchHighlightVideos } from "../api/endpoints/highlight-videos";

type VideosContextType = {
    dashboard: DashboardData;
    loading: boolean;
    error: boolean;
};

const CACHE_KEY = "dashboard-cache";
const CACHE_DURATION = 60 * 60 * 1000; 

export const VideosContext = createContext<VideosContextType>({} as VideosContextType);

export function VideosProvider({ children }: { children: React.ReactNode }) {
    const [dashboard, setDashboard] = useState<DashboardData>({} as DashboardData);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(false);

    useEffect(() => {
        const loadDashboardData = async () => {
            try {
                const cachedData = localStorage.getItem(CACHE_KEY);

                if (cachedData) {
                    const { data, timestamp } = JSON.parse(cachedData);
                    const isValid = Date.now() - timestamp < CACHE_DURATION;

                    if (isValid) {
                        setDashboard(data);
                        setLoading(false);
                        return;
                    }
                }

                const freshData = await fetchHighlightVideos();
                setDashboard(freshData);

                localStorage.setItem(
                    CACHE_KEY,
                    JSON.stringify({ data: freshData, timestamp: Date.now() })
                );
            } catch (err) {
                console.error("Erro ao buscar dados do dashboard:", err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        loadDashboardData();
    }, []);

    return (
        <VideosContext.Provider value={{ dashboard, loading, error }}>
            {children}
        </VideosContext.Provider>
    );
}

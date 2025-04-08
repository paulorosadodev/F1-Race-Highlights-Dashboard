import api from "../axios";
import { DashboardData } from "../../@types/DashboardData";

export const fetchHighlightVideos = async (retries = 5, delay = 1000): Promise<DashboardData> => {
    for (let i = 0; i < retries; i++) {
        try {
            const res = await api.get<DashboardData>("videos/");
            return res.data;
        } catch (error) {
            if (i === retries - 1) throw error; 
            console.warn(`Tentativa ${i + 1} falhou. Tentando novamente em ${delay}ms...`);
            await new Promise((resolve) => setTimeout(resolve, delay));
        }
    }
    throw new Error("Falha ao buscar os vídeos de highlights.");
};

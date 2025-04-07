import api from "../axios";
import { DashboardData } from "../../@types/DashboardData";

export const fetchHighlightVideos = async (): Promise<DashboardData> => {
    const res = await api.get<DashboardData>("videos/");
    return res.data;
};

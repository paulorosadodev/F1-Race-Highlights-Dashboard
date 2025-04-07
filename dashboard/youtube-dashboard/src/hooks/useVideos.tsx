import { useContext } from "react";
import { VideosContext } from "../contexts/VideoContext";

export function useVideos() {
    return useContext(VideosContext);
}

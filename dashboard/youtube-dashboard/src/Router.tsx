import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Videos } from "./pages/Videos";
import { Home } from "./pages/Home";
import { DefaultLayout } from "./layouts/DefaultLayout";
import VideoDetails from "./pages/VideoDetails";

export function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/videos" element={<Videos />} />
                    <Route path="/video/:id" element={<VideoDetails />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

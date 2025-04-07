import { ThemeProvider } from "styled-components";

import { Router } from "./Router";

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { VideosProvider } from "./contexts/VideoContext";

function App() {

    return (
        <ThemeProvider theme={defaultTheme}>
            <VideosProvider>
                <Router />
                <GlobalStyle />
            </VideosProvider>
        </ThemeProvider>
    );
}

export default App;

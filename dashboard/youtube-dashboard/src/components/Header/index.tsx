import formula1Logo from "../../assets/formula-1-logo.png";
import { HeaderWrapper } from "./styles";

import { NavLink } from "react-router-dom";

export default function Header() {

    return(
        <HeaderWrapper>
            <img src={formula1Logo} />
            <h1>2024 F1 Race Highlights</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to={"/"}>Início</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/videos"}>Vídeos</NavLink>
                    </li>
                </ul>
            </nav>
        </HeaderWrapper>
    );

}

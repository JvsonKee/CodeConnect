import React from "react";
import UserNameSurfaceStyle from "./UsernameSurfaceStyle.styled";
import Headline from "../typography/Headline";

function UserNameSurface(){
    return <UserNameSurfaceStyle>
        <Headline text={"PixelPioneer"}/>
        <Headline text={"(She/Her)"}/>
    </UserNameSurfaceStyle>
}

export default UserNameSurface;
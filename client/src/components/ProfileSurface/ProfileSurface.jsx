import React from "react";
import ProfileSurfaceStyle from "./ProfileSurfaceStyle.style";
import CircularImage from "../CircularImage/CircularImage";
import ProfilePic from "../../assets/profile-pic.jpg";

function ProfileSurface(){
    return <ProfileSurfaceStyle>
                <CircularImage src={ProfilePic} alt="User Profile Picture"/>
            </ProfileSurfaceStyle>;
}

export default ProfileSurface;
import React from "react";
import ProfileSurfaceStyle from "./ProfileSurfaceStyle.style";
import CircularImage from "../CircularImage/CircularImage";
import ProfilePic from "../../assets/profile-pic.jpg";
import UserNameSurface from "../UserNameSurface/UsernameSurface";

function ProfileSurface(){
    return <ProfileSurfaceStyle>
                <CircularImage src={ProfilePic} alt="User Profile Picture"/>
                <UserNameSurface/>
            </ProfileSurfaceStyle>;
}

export default ProfileSurface;
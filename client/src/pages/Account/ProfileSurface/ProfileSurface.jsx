import React from "react";
import ProfileSurfaceStyle from "./ProfileSurfaceStyle.style";
import CircularImage from "../CircularImage/CircularImage";
import ProfilePic from "../../../assets/profile-pic.jpg"
import DisplaySurfaceStyle from "../DisplaySurfaceStyle.styled";
import Headline from "../typography/Headline";
import { TagStyle, TagText } from "../TagStyle";
import { BioStyle } from "../BioStyle.styled";
import Body from "../typography/Body";

function ProfileSurface(){
    return <ProfileSurfaceStyle>
                <CircularImage src={ProfilePic} alt="User Profile Picture"/>
                <DisplaySurfaceStyle>
                    <Headline text={"PixelPioneer"}/>
                    <Headline text={"(She/Her)"}/>
                </DisplaySurfaceStyle>
                <DisplaySurfaceStyle>
                    <TagStyle>
                        <TagText>Teacher</TagText>
                    </TagStyle>
                    <TagStyle>
                        <TagText>Web Development, Full-Stack, +1 More</TagText>
                    </TagStyle>
                </DisplaySurfaceStyle>
                <BioStyle>
                <Body text={"Oh wow this is my bio!!!"}/>
                </BioStyle>
            </ProfileSurfaceStyle>;
            
}

export default ProfileSurface;
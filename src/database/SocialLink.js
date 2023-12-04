class SocialMediaLink {
    constructor(socialMedia, username, link) {
      this.socialMedia = socialMedia;
      this.username = username;
      this.link = link;
    }
  
    setSocialMedia(newSocialMedia) {
      this.socialMedia = newSocialMedia;
    }
  
    getSocialMedia() {
      return this.socialMedia;
    }
  
    setUsername(newUsername) {
      this.username = newUsername;
    }
  
    getUsername() {
      return this.username;
    }
  
    setLink(newLink) {
      this.link = newLink;
    }
  
    getLink() {
      return this.link;
    }
  }
  
  export default SocialMediaLink;
  
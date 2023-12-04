class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
        this.profilePicture = null;
        this.posts = [];
        this.biography = "";
        this.education = "";
        this.workStatus = "";
        this.socialMedia = []
    }

    setUsername(newUsername) {
        this.username = newUsername;
    }

    getUsername() {
        return this.username;
    }

    setPassword(newPassword) {
        this.password = newPassword;
    }

    getPassword() {
        return this.password;
    }

    setProfilePicture(picture) {
        this.profilePicture = picture;
    }

    getProfilePicture() {
        return this.profilePicture;
    }

    addPost(post) {
        this.posts.push(post);
    }    
    
    getPosts() {
        return this.posts;
    }

    setBiography(input) {
        this.biography = input;
    }

    getBiography() {
        return this.biography;
    }

    setWorkStatus(status) {
        this.workStatus = status;
    }

    getWorkStatus() {
        return this.workStatus;
    }

    setSocialMedia(socialMedia) {
        this.socialMedia = socialMedia;
    }

    getSocialMedia() {
        return this.socialMedia;
    }
}

export default User
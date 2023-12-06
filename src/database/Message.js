class Message {
    constructor(author, profilepic, content) {
        // not using user obj, just name :)
        this.author = author;
        this.profilepic = profilepic;
        this.content = content;
    }

    getUsername() {
        return this.author;
    }
    getProfilePic() {
        return this.profilepic;
    }
    getContent(){
        return this.content;
    }
    getMessageInformation() {
        return {
            author: this.author,
            profilepic: this.profilepic,
            content: this.content,
        }
    }
}

export default Message
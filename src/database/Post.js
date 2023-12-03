class Post {
    constructor(author, title, content, topic,  timeStamp, id) {
        this.author = author;
        this.title = title;
        this.content = content;
        this.topic = topic;
        this.timeStamp = timeStamp;
        this.id = id;
        this.likes = 0;
        this.comments = [];
    }

    like() {
        this.likes++;
    }

    unlike() {
        this.likes--;
    }

    addComment(comment) {
        this.comments.push(comment);
    }

    getPostInformation() {
        return {
            author: this.author,
            title: this.title,
            content: this.content,
            topic: this.topic,
            timeStamp: this.timeStamp,
            id: this.id,
            likes: this.likes,
            comments: this.comments
        }
    }
}

export default Post
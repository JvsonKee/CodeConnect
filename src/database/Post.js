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
        this.url = "/CodeConnect/".concat(String(author.getUsername()),"/",String(id));
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

    getAuthor() {
        return {
            author: this.author
        }
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

    getPostURL(){
        return { 
            url: this.url
        }
    }
}

export default Post
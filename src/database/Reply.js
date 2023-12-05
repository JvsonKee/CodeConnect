class Reply {
    constructor(author, content, timeStamp, id) {
        this.author = author;
        this.content = content;
        this.timeStamp = timeStamp;
        this.id = id; // starting from 0 for each thread
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

export default Reply
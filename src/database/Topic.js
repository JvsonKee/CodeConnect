class Topic {
    constructor(name) {
        this.name = name;
        this.posts = [];
    }

    getName() {
        return this.name;
    }

    addPost(post) {
        this.posts.push(post);
    }

    getPosts() {
        return this.posts;
    }
}

export default Topic
class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
        this.posts = [];
    }

    setUsername(newUserName) {
        this.username = newUserName;
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

    addPost(post) {
        this.posts.push(post);
    }    
    
    getPosts() {
        return this.posts;
    }
}

export default User
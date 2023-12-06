import User from "./User"
import Post from "./Post"
import Reply from "./Reply"
import proPic1 from "../assets/MainUserPfp.png"
import proPic2 from "../assets/profile3.jpg"
import proPic3 from "../assets/userPfp3.png"
import kirbyPic from "../assets/userPfp.png"
import booPic from "../assets/userPfp2.png"
import SocialMediaLink from "./SocialLink";
import Topic from "./Topic"

export const userDatabase = [];
export const postDatabase = [];
export const topicDatabase = [];

const user1 = new User("PixelPioneer", "123");
user1.setProfilePicture(proPic1);
user1.setBiography("OMG this is my bio!!")
const ghLink = new SocialMediaLink("github", "PixelPioneer")
const twitterLink = new SocialMediaLink("twitter", "PixelPioneer")
user1.setSocialMedia([twitterLink, ghLink])
user1.role = "Teacher"
user1.interests = ["Web Development", "React", "UX Design"]

const user2 = new User("madscientist", "password");
user2.setProfilePicture(proPic2);
const twitterLink2 = new SocialMediaLink("twitter", "madscientist123")
user2.setSocialMedia([twitterLink2])
user2.role = "Student"
user2.interests = ["Game Development", "C++"]

const user3 = new User("supasonic", "password");
user3.setProfilePicture(proPic3);
const twitterLink3 = new SocialMediaLink("github", "supasupasonicc")
user3.setSocialMedia([twitterLink3])
user3.role = "Student"
user3.interests = ["Machine Learning", "C++", "Mobile Dev"]

const user4 = new User("Kirby", "password");
user4.setProfilePicture(kirbyPic);
const twitterLink4 = new SocialMediaLink("twitter", "bottomLessStomach1")
user4.setSocialMedia([twitterLink4])
user4.role = "Student"
user4.interests = ["Desktop Development", "C++", "Embedded Devices"]

const user5 = new User("Boo", "password");
user5.setProfilePicture(booPic);
const twitterLink5 = new SocialMediaLink("twitter", "hahaScaredYou")
user5.setSocialMedia([twitterLink5])
user5.role = "Teacher"
user5.interests = ["Assembly", "Binary"]

userDatabase.push(user1);
userDatabase.push(user2);
userDatabase.push(user3);
userDatabase.push(user4);
userDatabase.push(user5);

const user1Post = new Post(user1, "Learning React", "I am learning React for a school project, what are the best resources to learn from?", "React", "12 minutes ago", postDatabase.length);
postDatabase.push(user1Post);
user1.addPost(user1Post);
user1Post.likes = 1;

const user2Post = new Post(user2, "Growtopia - My new game!", "I've been developing my farming game, Growtopia, for the last 2 years. I am excited to finally announce a public beta. I would appreciate if you guys checked it out!", "Game Development", "1 hour ago", postDatabase.length);
postDatabase.push(user2Post);
user2.addPost(user2Post);
user2Post.likes = 93

const user3Post = new Post(user3, "Internship Help", "I'm in my third year of university and I'm want to start applying to internships. I've never had an interview before and I was wondering what the process is normally like?", "Career", "2 hours ago", postDatabase.length);
postDatabase.push(user3Post);
user3.addPost(user3Post);
user3Post.likes = 18;

const user1Post2 = new Post(user1, "IDE for python", "What are the best IDE's for learning python?", "Python", "3 hours ago", postDatabase.length);
postDatabase.push(user1Post2);
user1.addPost(user1Post2);
user1Post2.likes = 30

const user2Post2 = new Post(user2, "New project", "Checkout my project. Done in all python", "Python", "4 hours ago", postDatabase.length);
postDatabase.push(user2Post2);
user2.addPost(user2Post2);
user2Post2.likes = 136


// First Post
const user1PostReply1 = new Reply(user1, "no this is fake", "1 second ago", postDatabase.at(0).length)
const user1PostReply2 = new Reply(user2, "This is actually real, I agree with this post", "1 second ago", user1PostReply1.comments.length)
postDatabase.at(0).addComment(user1PostReply1);
user1PostReply1.addComment(user1PostReply2);

const user1PostReply3 = new Reply(user1, "hahahahahh well this makes sense", "1 second ago", postDatabase.at(0).length)
const user1PostReply4 = new Reply(user2, "This is actually real, I agree with this post", "1 second ago", 0)
const user1PostReply5 = new Reply(user2, "wow! im talking to myself", "1 second ago", 0)
const user1PostReply6 = new Reply(user2, "blah blah blah", "1 second ago", 1)
postDatabase.at(0).addComment(user1PostReply3);
user1PostReply3.addComment(user1PostReply4);
user1PostReply4.addComment(user1PostReply5);
user1PostReply4.addComment(user1PostReply6);

// Second Post
const user2PostReply1 = new Reply(user1, "no this is fake", "1 second ago", postDatabase.at(1).length)
postDatabase.at(1).addComment(user2PostReply1);
const user2PostReply2 = new Reply(user1, "no this is fake", "1 second ago", postDatabase.at(1).length)
postDatabase.at(1).addComment(user2PostReply2);

// Third Post
const user3PostReply1 = new Reply(user1, "no this is fake", "1 second ago", postDatabase.at(2).length)
postDatabase.at(2).addComment(user3PostReply1);
const user3PostReply2 = new Reply(user1, "no this is fake", "1 second ago", postDatabase.at(2).length)
postDatabase.at(2).addComment(user3PostReply2);


// Topics
const t1 = new Topic("Web Development");
const t2 = new Topic("React");
const t3 = new Topic("Python");
const t4 = new Topic("JavaScript");
const t5 = new Topic("Data Structures");
const t6 = new Topic("Networks");
const t7 = new Topic("Game Development");
const t8 = new Topic("HTML");
const t9 = new Topic("CSS");
const t11 = new Topic("Career");

topicDatabase.push(t1);
topicDatabase.push(t2);
topicDatabase.push(t3);
topicDatabase.push(t4);
topicDatabase.push(t5);
topicDatabase.push(t6);
topicDatabase.push(t7);
topicDatabase.push(t8);
topicDatabase.push(t9);
topicDatabase.push(t11);

postDatabase.forEach((post) => {
    topicDatabase.forEach((topic) => {
        if (post.topic === topic.name) {
            topic.posts.push(post)
        }
    })
})
import User from "./User"
import Post from "./Post"
import Reply from "./Reply"
import proPic1 from "../assets/MainUserPfp.png"
import proPic2 from "../assets/profile3.jpg"
import proPic3 from "../assets/userPfp3.png"
import SocialMediaLink from "./SocialLink";

export const userDatabase = [];
export const postDatabase = [];

function pushPostToDatabase(title, topic, description, timeStamp) {
  let id = postDatabase.length;
  const userKey = localStorage.getItem("userDatabaseKey");
  const user = userDatabase[userKey];
  const postToAdd = new Post(user,title,description,topic,timeStamp,id);
  postDatabase.push(postToAdd);
  alert("done");
};

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

const user3 = new User("supasonic", "password");
user3.setProfilePicture(proPic3);

userDatabase.push(user1);
userDatabase.push(user2);
userDatabase.push(user3);

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

export default pushPostToDatabase;
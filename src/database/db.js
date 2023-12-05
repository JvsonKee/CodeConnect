import User from "./User"
import Post from "./Post"
import Reply from "./Reply"
import proPic1 from "../assets/MainUserPfp.png"
import proPic2 from "../assets/profile3.jpg"
import proPic3 from "../assets/userPfp3.png"
import SocialMediaLink from "./SocialLink";

export const userDatabase = [];
export const postDatabase = [];
export const topicDatabase = ["React", "Game Development", "Career", "Embedded Development",
                              "Web Development","Python", "Dynamic Programming","JavaScript",
                              "Full-Stack Development","Data Structures","Networks","Cybersecurity",
                              "HTML","CSS","Data Science"];

export function pushPostToDatabase(title, topic, description, timeStamp) {
  let id = postDatabase.length;
  const userKey = localStorage.getItem("userDatabaseKey");
  const user = userDatabase[userKey];
  const postToAdd = new Post(user,title,description,topic,timeStamp,id);
  postDatabase.push(postToAdd);
};

export function pushReplyToDatabase(post, replyLevel1, replyLevel2, description) {
  const userKey = localStorage.getItem("userDatabaseKey");
  const user = userDatabase[userKey];
  if (replyLevel1 == -1 && replyLevel2 == -1) {
    // this is a comment on the main thread
    const replyToAdd = new Reply(user, description, "1 second ago", post.comments.length);
    post.addComment(replyToAdd);
  }
  else if(replyLevel1 >=0 && replyLevel2 == -1) {
    // this is a comment to a comment
    const replyToAdd = new Reply(user, description, "1 second ago", post.comments.at(replyLevel1).comments.length);
    post.comments.at(replyLevel1).addComment(replyToAdd);
  }
  else {
    // this is a comment to a comment to a comment
    const replyToAdd = new Reply(user, description, "1 second ago", post.comments.at(replyLevel1).comments.at(replyLevel2).comments.length);
    post.comments.at(replyLevel1).comments.at(replyLevel2).addComment(replyToAdd);
  }
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

const user1Post = new Post(user1, "Learning React", "I am learning React for a school project, what are the best resources to learn from?", topicDatabase[0], "3 months ago", postDatabase.length);
postDatabase.push(user1Post);
user1.addPost(user1Post);
user1Post.likes = 1;

const user2Post = new Post(user2, "Growtopia - My new game!", "I've been developing my farming game, Growtopia, for the last 2 years. I am excited to finally announce a public beta. I would appreciate if you guys checked it out!", topicDatabase[1], "1 month ago", postDatabase.length);
postDatabase.push(user2Post);
user2.addPost(user2Post);
user2Post.likes = 93

const user3Post = new Post(user3, "Internship Help", "I'm in my third year of university and I'm want to start applying to internships. I've never had an interview before and I was wondering what the process is normally like?", topicDatabase[2], "2 hours ago", postDatabase.length);
postDatabase.push(user3Post);
user3.addPost(user3Post);
user3Post.likes = 18;

// First Post
const user1PostReply1 = new Reply(user1, "Update: I started watching a youtube tutorial, but I'm finding it hard to follow... maybe after all this struggle I'll start my own channel", "3 months ago", postDatabase.at(0).length)
const user1PostReply2 = new Reply(user2, "This is actually such a big problem in the community! So many 'flashy' tutorials out there with bad content", "2 months ago", user1PostReply1.comments.length)
postDatabase.at(0).addComment(user1PostReply1);
user1PostReply1.addComment(user1PostReply2);

const user1PostReply3 = new Reply(user1, "Update 2: Yep! I am definitely starting my own channel after I learn the basics, UGHh!", "2 months ago", postDatabase.at(0).length)
const user1PostReply4 = new Reply(user2, "Hey any update on this? Did you end up making a youtube channel?", "1 month ago", 0)
const user1PostReply5 = new Reply(user2, "I would love to hear how you got started with react", "1 month ago", 0)
const user1PostReply6 = new Reply(user2, "wow! i'm talking to myself :(", "2 weeks ago", 1)
postDatabase.at(0).addComment(user1PostReply3);
user1PostReply3.addComment(user1PostReply4);
user1PostReply4.addComment(user1PostReply5);
user1PostReply4.addComment(user1PostReply6);

// Second Post
const user2PostReply1 = new Reply(user3, "Uhhhh hey you should update this post haha", "1 month ago", postDatabase.at(1).length)
postDatabase.at(1).addComment(user2PostReply1);
const user2PostReply2 = new Reply(user1, "Cool name! What does this app do? where can I access it? you forgot to link the beta I think :)", "1 month ago", postDatabase.at(1).length)
postDatabase.at(1).addComment(user2PostReply2);

// Third Post
const user3PostReply1 = new Reply(user1, "I totally felt confused and overwhelmed when trying to find an internship too! You're not alone in this. It gets better :)", "1 day ago", postDatabase.at(2).length)
postDatabase.at(2).addComment(user3PostReply1);
const user3PostReply2 = new Reply(user1, "Interview processes depend on the company! They usually start with some coding test or a screening interview, and then they focus more on your specific skills. DM me for more info?", "1 day ago", postDatabase.at(2).length)
postDatabase.at(2).addComment(user3PostReply2);
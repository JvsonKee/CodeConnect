import User from "./User"
import proPic1 from "../assets/MainUserPfp.png"
import proPic2 from "../assets/profile3.jpg"
import proPic3 from "../assets/userPfp3.png"
import Post from "./Post";
import SocialMediaLink from "./SocialLink";

export const userDatabase = [];

const user1 = new User("PixelPioneer", "123");
user1.setProfilePicture(proPic1);
user1.setBiography("Lörem ipsum besans epirat jag bal vårdskuld. Alol mavis. Plall valiga vibarade, till fonofaktisk tedonde. ")
const ghLink = new SocialMediaLink("Github", "PixelPioneer")
const twitterLink = new SocialMediaLink("Twitter", "PixelPioneer")
user1.setSocialMedia([twitterLink, ghLink])

const user2 = new User("madscientist", "password");
user2.setProfilePicture(proPic2);

const user3 = new User("supasonic", "password");
user3.setProfilePicture(proPic3);

userDatabase.push(user1);
userDatabase.push(user2);
userDatabase.push(user3);


export const postDatabase = [];

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
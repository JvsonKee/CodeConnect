import User from "./User"
import Post from "./Post"

export const userDatabase = [];
export const postDatabase = [];

function pushPostToDatabase(title, topic, description, timeStamp) {
  let id = postDatabase.length;
  const postToAdd = new Post("JasonSucksAtCoding69",title,description,topic,timeStamp,id);
  postDatabase.push(postToAdd);
};

const user1 = new User("PixelPioneer", "123", []);
const user2 = new User("madscientist", "password", []);

userDatabase.push(user1);
userDatabase.push(user2);

export default pushPostToDatabase;
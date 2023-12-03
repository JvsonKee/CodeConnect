import User from "./User"

export const userDatabase = [];

const user1 = new User("PixelPioneer", "123", []);
const user2 = new User("madscientist", "password", []);

userDatabase.push(user1);
userDatabase.push(user2);


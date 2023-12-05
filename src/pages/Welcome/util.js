import { userDatabase } from "../../database/db";

export function validUser(username, password) {
    for (let i = 0; i < userDatabase.length; i++) {
        if (userDatabase[i].getUsername() === username && userDatabase[i].getPassword() === password) {
            return true;
        }
    }
    return false;
}
import { validUser } from "./util";

const Authorization = {
    login: async (username, password) => {
      // Simulate server-side authentication
      if (validUser(username, password)) {
        return { success: true, user: { username: username } };
      } else {
        return { success: false, error: 'Invalid credentials' };
      }
    },

  };
  
  export default Authorization
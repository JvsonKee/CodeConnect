const Authorization = {
    login: async (username, password) => {
      // Simulate server-side authentication
      if (username === 'PixelPioneer' && password === '123') {
        return { success: true, user: { username: 'PixelPioneer' } };
      } else {
        return { success: false, error: 'Invalid credentials' };
      }
    },

  };
  
  export default Authorization
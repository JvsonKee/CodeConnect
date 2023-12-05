const AccountValidation = {
    createAccount: async (email, username, password, confirmPassword, isChecked) => {
      //Make sure account details are valid
      let isEmailValid = (email.includes("@") && email.includes(".com"));
      let regex = /[!@#$&]/; //define regex pattern for accepted special characters

      console.log(isEmailValid) //for debugging purposes

      if(!isEmailValid){//test whether the email address includes an @ and a .com
        return {success:false, error: 'Invalid email. An example of a proper email is \'user@email.com\''};
      }
      else if(!regex.test(password)){//check if password has special characters
        return {success:false, error: 'Password must contain at least one special character (!, @, #, $, &)'}
      }
      else if(password.length < 8){//check if password is long enough. Returns false if less than 8.
        return {success:false, error: 'Password must contain 8 or more characters'}
      }
      else if(password !== confirmPassword){//test whether the password field text matches the confirm password field text
        return {success:false, error: 'Passwords must match'}
      }
      else if(!isChecked){
        return {success:false, error: 'Please read and agree to the terms of service before proceeding.'}
      }
      else {//if no error, proceed to homepage. 
        return {success: true};
      }
    },

  };
  
  export default AccountValidation
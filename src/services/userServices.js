

export class AuthServices{

  async loginUser(data){
    let user;
    try {
      const response = await fetch(
        "http://localhost:8000/api/v1/users/login", 
        {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
      console.log("Response : ", response)
      if (!response.ok) {
        console.log("Failed to login!")
        return null;
      }
      
      const responseData = await response.json();
      user = responseData.data.user;
      console.log(user);
      console.log("Logged in successfully")
      return user;
    } catch (error) {
      console.log(error.message);
      return null;
    }
  }

  async registerUser(data){
    let user;
    try {
      
      const response = await fetch(
        "http://localhost:8000/api/v1/users/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      console.log("Response : ", response);
      console.log("got something !!");
      if (!response.ok) {
        console.log("Failed to register");
        return null;
      }

      const responseData = await response.json();
      console.log(responseData)
      // user = responseData.data.user;
      // console.log("User : ", userData);
      console.log("User registered successfully");
      // return user;

    } catch (error) {
        console.log(error.message);
      // return null;
    }
    return user;
  }
  async logoutUser(){
    try {
      const response = await fetch( 
        "http://localhost:8000/api/v1/users/logout",
        {
          method : "POST",
        }
      )
      setCookie("accessToken", null);
    } catch (error) {
        console.log(error.message);
      return false;
    }
    return true;
  }
}

const authServices = new AuthServices();
export default authServices;
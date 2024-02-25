import axios from "axios"
export const API_URL = 'http://localhost:8800';


export const getGoogleSignUp = async(accessToken) => {
       try {
         const user = await axios.get(
            "https://www.googleapis.com/oauth2/v3/userinfo", {
                headers:{ Authorization: `Bearer ${accessToken}`},
            }
         ).then((res) => res.data);
         if (user?.sub){
            const data ={
                name: user.name,
                email:user.email,
                emailVerified: user.email_verified,
                image: user.picture,
            };
            const result = await axios.post(`${API_URL}/auth/google-signup`, data);
            console.log(result);
            return result;
         }
        
       } catch (error) {
        const err = error?.response?.data || error?.response;
        console.log(error);
        return err;
        
       }
}


export const getGoogleSignIn = async (accessToken) => {
    try {
        const user = await axios.get(
            "https://www.googleapis.com/oauth2/v3/userinfo", {
                headers: { Authorization: `Bearer ${accessToken}` },
            }
        ).then((res) => res.data);

        if (user?.sub) {
            
            const data = {
                email: user.email,
            };

            const result = await axios.post(`${API_URL}/auth/google-signin`, data);

            console.log(result);
            return result;
        }

    } catch (error) {
        // Handle errors
        const err = error?.response?.data || error?.response;
        console.log(error);
        return err;
    }
};


export const emailSignUp = async(data) =>{
    try {
        const result = await axios.post(`${API_URL}/auth/register`, data);
        return result?.data;
        
    } catch (error) {
        const err = error?.response?.data || error?.response;
        console.log(error);
        return err;
        
    }
}

export const emailSignIn = async (data) => {
    try {
      const result = await axios.post(`${API_URL}/auth/login`, data);
      return result?.data;
    } catch (error) {
      const err = error?.response?.data || error?.response;
      console.log(error);
      return err;
    }
  };
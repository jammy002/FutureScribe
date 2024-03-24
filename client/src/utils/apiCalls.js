// import axios from "axios"
// export const API_URL = 'http://localhost:8800';


// export const getGoogleSignUp = async (accessToken) => {
//     try {
//         const user = await axios.get(
//             "https://www.googleapis.com/oauth2/v3/userinfo", {
//             headers: { Authorization: `Bearer ${accessToken}` },
//         }
//         ).then((res) => res.data);
//         if (user?.sub) {
//             const data = {
//                 name: user.name,
//                 email: user.email,
//                 emailVerified: user.email_verified,
//                 image: user.picture,
//             };
//             const result = await axios.post(`${API_URL}/auth/google-signup`, data);
//             console.log(result);
//             return result;
//         }

//     } catch (error) {
//         const err = error?.response?.data || error?.response;
//         console.log(error);
//         return err;

//     }
// }


// export const getGoogleSignIn = async (accessToken) => {
//     try {
//         const user = await axios.get(
//             "https://www.googleapis.com/oauth2/v3/userinfo", {
//             headers: { Authorization: `Bearer ${accessToken}` },
//         }
//         ).then((res) => res.data);

//         if (user?.sub) {

//             const data = {
//                 email: user.email,
//             };

//             const result = await axios.post(`${API_URL}/auth/google-signin`, data);

//             console.log(result);
//             return result;
//         }

//     } catch (error) {
//         // Handle errors
//         const err = error?.response?.data || error?.response;
//         console.log(error);
//         return err;
//     }
// };


// export const emailSignUp = async (data) => {
//     try {
//         const result = await axios.post(`${API_URL}/auth/register`, data);
//         return result?.data;

//     } catch (error) {
//         const err = error?.response?.data || error?.response;
//         console.log(error);
//         return err;

//     }
// }

// export const emailSignIn = async (data) => {
//     try {
//         const result = await axios.post(`${API_URL}/auth/login`, data);

//         return result?.data;
//     } catch (error) {
//         const err = error?.response?.data || error?.response;
//         console.log(error);
//         return err;
//     }
// };

// export const getSinglePost = async (id) => {
//     try {
//         const { data } = await axios.get(`${API_URL}/posts/${id}`);

//         return data?.data;
//     } catch (error) {
//         const err = error?.response?.data || error?.response;
//         console.log(error);
//         return err;
//     }
// };

// export const getPostComments = async (id) => {
//     try {
//         const { data } = await axios.get(`${API_URL}/posts/comments/${id}`);
//         return data?.data;
//     } catch (error) {
//         const err = error?.response?.data || error?.response;
//         console.log(error);
//         return err;

//     }
// };
// export const postComments = async (id, token, data) => {
//     try {
//         const result = await axios.post(`${API_URL}/posts/comment/${id}`, data,
//             {
//                 headers: { Authorization: "Bearer" + token },
//             });
//         return result?.data;
//     } catch (error) {
//         const err = error?.response?.data || error?.response;
//         console.log(error);
//         return err;

//     }
// };

// export const deletePostComments = async (id, token, postId) => {
//     try {
//         const result = await axios.delete(
//             `${API_URL}/posts/comment/${id}/${postId}`,
//             {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             }
//         );
//     } catch (error) {
//         const err = error?.response?.data || error?.response;
//         console.log(error);
//         return err;
//     }
// };
// export const getWriterInfo = async (id) => {
//     try {
//         const {data} = await axios.get(`${API_URL}/users/get-user/${id}`);
//            return data?.data;
//     } catch (error) {
//         const err = error?.response?.data || error?.response;
//         console.log(error);
//         return err;
//     }
// };

// export const followWriter = async (id, token) => {
//     try {
//         const res = await axios.post(`${API_URL}/users/follower/${id}`, null, {
//               headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });
//     } catch (error) {
//         const err = error?.response?.data || error?.response;
//         console.log(error);
//         return err;
//     }
// };


import axios from "axios";

export const API_URL = 'http://localhost:8800';

// Function to get user information from Google Sign Up
export const getGoogleSignUp = async (accessToken) => {
  try {
    const user = await axios.get(
      "https://www.googleapis.com/oauth2/v3/userinfo", {
      headers: { Authorization: `Bearer ${accessToken}` },
    }).then((res) => res.data);
    
    if (user?.sub) {
      const data = {
        name: user.name,
        email: user.email,
        emailVerified: user.email_verified,
        image: user.picture,
      };

      const result = await axios.post(`${API_URL}/auth/google-signup`, data);
      return result;
    }
  } catch (error) {
    console.error("Error in getGoogleSignUp:", error);
    return error?.response?.data || error?.response;
  }
};

// Function to get user information from Google Sign In
export const getGoogleSignIn = async (accessToken) => {
  try {
    const user = await axios.get(
      "https://www.googleapis.com/oauth2/v3/userinfo", {
      headers: { Authorization: `Bearer ${accessToken}` },
    }).then((res) => res.data);

    if (user?.sub) {
      const data = {
        email: user.email,
      };

      const result = await axios.post(`${API_URL}/auth/google-signin`, data);
      return result;
    }
  } catch (error) {
    console.error("Error in getGoogleSignIn:", error);
    return error?.response?.data || error?.response;
  }
};

// Function to perform email sign up
export const emailSignUp = async (data) => {
  try {
    const result = await axios.post(`${API_URL}/auth/register`, data);
    return result?.data;
  } catch (error) {
    console.error("Error in emailSignUp:", error);
    return error?.response?.data || error?.response;
  }
};

// Function to perform email sign in
export const emailSignIn = async (data) => {
  try {
    const result = await axios.post(`${API_URL}/auth/login`, data);
    return result?.data;
  } catch (error) {
    console.error("Error in emailSignIn:", error);
    return error?.response?.data || error?.response;
  }
};

// Function to get a single post
export const getSinglePost = async (id) => {
  try {
    const { data } = await axios.get(`${API_URL}/posts/${id}`);
    return data?.data;
  } catch (error) {
    console.error("Error in getSinglePost:", error);
    return error?.response?.data || error?.response;
  }
};

// Function to get comments for a post
export const getPostComments = async (id) => {
  try {
    const { data } = await axios.get(`${API_URL}/posts/comments/${id}`);
    return data?.data;
  } catch (error) {
    console.error("Error in getPostComments:", error);
    return error?.response?.data || error?.response;
  }
};

// Function to post a comment for a post
export const postComments = async (id, token, data) => {
  try {
    const result = await axios.post(`${API_URL}/posts/comment/${id}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return result?.data;
  } catch (error) {
    console.error("Error in postComments:", error);
    return error?.response?.data || error?.response;
  }
};

// Function to delete a comment for a post
export const deletePostComments = async (id, token, postId) => {
  try {
    const result = await axios.delete(
      `${API_URL}/posts/comment/${id}/${postId}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return result?.data;
  } catch (error) {
    console.error("Error in deletePostComments:", error);
    return error?.response?.data || error?.response;
  }
};

// Function to get writer information
export const getWriterInfo = async (id) => {
  try {
    const { data } = await axios.get(`${API_URL}/users/get-user/${id}`);
    return data?.data;
  } catch (error) {
    console.error("Error in getWriterInfo:", error);
    return error?.response?.data || error?.response;
  }
};

// Function to follow a writer
export const followWriter = async (id, token) => {
  try {
    const res = await axios.post(
      `${API_URL}/users/follower/${id}`,
      null,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return res?.data;
  } catch (error) {
    console.error("Error in followWriter:", error);
    return error?.response?.data || error?.response;
  }
};

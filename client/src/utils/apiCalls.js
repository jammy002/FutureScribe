import axios from "axios"
export const API_URL = 'http://localhost:8800';


export const getGoogleSignUp = async (accessToken) => {
    try {
        const user = await axios.get(
            "https://www.googleapis.com/oauth2/v3/userinfo", {
            headers: { Authorization: `bearer ${accessToken}` },
        }
        ).then((res) => res.data);
        if (user?.sub) {
            const data = {
                name: user.name,
                email: user.email,
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
            headers: { Authorization: `bearer ${accessToken}` },
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


export const emailSignUp = async (data) => {
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

export const getSinglePost = async (id) => {
    try {
        const tokendataString = localStorage.getItem('userInfo');
        let userId = null;
        
        if (tokendataString) {
            try {
                const tokendata = JSON.parse(tokendataString);
                if (tokendata && tokendata.user && tokendata.user._id) {
                    userId = tokendata.user._id;
                } else {
                    console.log("Error: Unable to access user _id");
                }
            } catch (error) {
                console.error("Error parsing tokendata:", error);
            }
        } else {
            console.log("Error: No userinfo found in local storage");
        }
        
        const { data } = await axios.get(`${API_URL}/posts/${id}?userId=${userId}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        return data?.data;
    } catch (error) {
        const err = error?.response?.data || error?.response;
        console.log(error);
        return err;
    }
};


export const getPostComments = async (id) => {
    try {
        const { data } = await axios.get(`${API_URL}/posts/comments/${id}`);
        return data?.data;
    } catch (error) {
        const err = error?.response?.data || error?.response;
        console.log(error);
        return err;

    }
};
export const postComments = async (id, token, data) => {
    try {
        const result = await axios.post(`${API_URL}/posts/comment/${id}`, data,
            {
                headers: { Authorization: `bearer ${token}` },
            });
        return result?.data;
    } catch (error) {
        const err = error?.response?.data || error?.response;
        console.log(error);
        return err;

    }
};

export const deletePostComments = async (id, token, postId) => {
    try {
        const result = await axios.delete(
            `${API_URL}/posts/comment/${id}/${postId}`,
            {
                headers: {
                    Authorization: `bearer ${token}`,
                },
            }
        );
        return result?.data;
    } catch (error) {
        const err = error?.response?.data || error?.response;
        console.log(error);
        return err;
    }
};
export const getWriterInfo = async (id) => {
    try {
        const { data } = await axios.get(`${API_URL}/users/get-user/${id}`);

        return data?.data;
    } catch (error) {
        const err = error?.response?.data || error?.response;
        console.log(error);
        return err;
    }
};

export const followWriter = async (id, token) => {
    try {
        const res = await axios.post(`${API_URL}/users/follower/${id}`, null, {
            headers: {
                Authorization: `bearer ${token}`,
            },
        });
        return res?.data;
    } catch (error) {
        const err = error?.response?.data || error?.response;
        console.log(error);
        return err;
    }
};
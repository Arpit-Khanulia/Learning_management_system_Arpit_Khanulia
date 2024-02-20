import { createSlice } from "@reduxjs/toolkit";

const accessToken = localStorage.getItem('accessToken') || null;
const currentRole = localStorage.getItem('role');

console.log('thiss is role', currentRole);



// Define the interface for the user data
interface UserData {
    _id: string;
    name:string;
    username: string;
    email: string;
    password: string;
    role:string
  }

  
  
  // Define the interface for the response object
  interface UserResponse {
    user: UserData ;
    accessToken: string|null;
  }

  // Define the initial state with blank data
const initialState: UserResponse = {
    user: {
      _id: "",
      name:"",
      username: "",
      email: "",
      password: "",
      role:currentRole || ""
    },
    accessToken: accessToken
  };

 const authUser = createSlice({

    initialState:initialState,
    name:'authUser',
    reducers:{
        saveUserAndToken: (state, action) => {
            localStorage.setItem('user', JSON.stringify(action.payload.user));
            localStorage.setItem('accessToken', action.payload.accessToken);
            localStorage.setItem('role', action.payload.user.role);
            state.user = action.payload.user;
            state.accessToken = action.payload.accessToken;
        }
    }
})


export const {saveUserAndToken} = authUser.actions;
export default authUser.reducer;
 
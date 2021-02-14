// Boiler plate actions
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";

// Update authentication state
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

// Save the profile data from Auth0 to the global state
export const ADD_PROFILE = "ADD_PROFILE";
export const REMOVE_PROFILE = "REMOVE_PROFILE";

// Track the changes and submit of the user submitted text of the form
export const USER_INPUT_CHANGE = "USER_INPUT_CHANGE";
export const USER_INPUT_SUBMIT = "USER_INPUT_SUBMIT";

// Save the profile data from Auth0 to the DB
export const SET_DB_PROFILE = "SET_DB_PROFILE";
export const REMOVE_DB_PROFILE = "REMOVE_DB_PROFILE";

// Fetch post data to the DB
export const FETCH_DB_POSTS = "FETCH_DB_POSTS";
export const REMOVE_DB_POSTS = "REMOVE_DB_POSTS";

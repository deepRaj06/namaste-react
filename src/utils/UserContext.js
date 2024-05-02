import { createContext } from "react";

// It shows fixed loggedInuser i.e. Default user
// But everytime user login they can have different different loggedInUser
// i.e. now How can we modify the loggedInUser


const UserContext = createContext({
    loggedInUser:   "Default User"
})

export default UserContext;
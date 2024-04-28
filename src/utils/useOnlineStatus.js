// to Create a custom hook
// Look, what input is required and what output need to be sent from hook

import { useEffect, useState } from "react";

// In this case no input is required
const useOnlineStatus = () => {

    const [onlineStatus, setOnlineStatus] = useState(true)

    // check if online
    // using online event listener - https://developer.mozilla.org/en-US/docs/Web/API/Window/online_event

    // to execute online event listener listener once
    useEffect(() => {

        window.addEventListener("offline", () => {
            setOnlineStatus(false);
        });

        window.addEventListener("online", () => {
            setOnlineStatus(true);
        });

    }, [])

    // onlineStatus is boolean
    return onlineStatus
}

export default useOnlineStatus;
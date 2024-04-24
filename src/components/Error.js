// React Router DOM provided special hook for Error i.e.
import { useRouteError } from "react-router-dom"
// What is hook ? --> Hook is a function which serves the purpose at the end of the day.

const Error = () => {

    // The hook which you have imported will give you details about an Error i.e.
    const err = useRouteError();
    // console.log(err, 'err')
    return(
        <div>
            <h1>Oops!!!</h1>
            <h2>Something went wrong!!</h2>
            <h3>{err.status}: {err.statusText}</h3>
        </div>
    )
}

export default Error
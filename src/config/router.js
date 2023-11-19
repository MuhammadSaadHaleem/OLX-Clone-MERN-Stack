import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Dashboard from "../views/Dashboard";
import SignIn from "../views/SignIn";
import PostAd from "../views/PostAd";
import AdDetails from "../views/AdDetails";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
    },
    {
        path: "/signIn",
        element: <SignIn />,
    },
    {
        path: "/postAd",
        element: <PostAd />,
    }
    ,
    {
        path: "/adDetails/:id",
        element: <AdDetails/>,
    }
]);

function Router() {

    return (

        <><RouterProvider router={router} /></>
    )
}

export default Router
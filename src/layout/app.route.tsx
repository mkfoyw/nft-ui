import { useRoutes } from "react-router-dom";
import { PageRouters } from "./app.pages.route";

const AppRoute = ()=>{
    return(
        useRoutes(PageRouters)
    )
}

export default AppRoute;
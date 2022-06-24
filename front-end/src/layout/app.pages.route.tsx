import GLayout from "./app.layout";

import Home from "../pages/home";
import Test from "../pages/test";


export const PageRouters:any[]=[
  {
    path: "/",
    element: <GLayout/>,
    children:[
        {
            path: "home",
            element: <Home/>
        },
        {
            path:"test",
            element: <Test/>
        }
    ]
  }
]
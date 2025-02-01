
//import React from 'react';
import Home from "../pages/home/Home.jsx";
// import About from "../pages/about/About.jsx";
// import Contact from "../pages/contacts/Contact.jsx";
// import Project from "../pages/projects/Project.jsx";
// import Service from "../pages/services/Service.jsx";
import RootLayout from "../layout/RootLayout.jsx";
// import NotFound from "../pages/notfound/NotFound.jsx";
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router";


function App() {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path={'/'} element={<RootLayout/>}>
                <Route index element={<Home/>} />
                {/*<Route path="project" element={<Project/>} />*/}
                {/*<Route path="service" element={<Service/>} />*/}
                {/*<Route path="about" element={<About/>} />*/}
                {/*<Route path="contact" element={<Contact/>} />*/}
                {/*<Route path='*' element={<NotFound/>} />*/}
            </Route>
        )
    )
    return (
        <>
            <RouterProvider router={router}/>
        </>
    );
}

export default App;

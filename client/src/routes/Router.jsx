import {createBrowserRouter} from "react-router-dom"
import MainLayout from "../layout/MainLayout"
import Home from "../pages/Home"
import Search from "../pages/Search"
import BookDetails from "../pages/BookDetails"
import Library from "../pages/Library"

const router = createBrowserRouter([
    {path: "/",
        element: <MainLayout />,
        children: [
            {path: "/", element: <Home />},
            {path: "/search", element: <Search />},
            {path: "/book/:id", element: <BookDetails />},
            {path: "/library", element: <Library/>},

        ],
    },
])

export default router;
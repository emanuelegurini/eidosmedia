import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import App from './App.jsx'
import {TodoProvider} from "./providers/TodoProvider.jsx";
import ErrorPage from "./pages/error-pages.jsx";
import {AboutPage} from "./pages/About.jsx";
import {ContactPage} from "./pages/Contact.jsx";
import DefaultLayout from "./components/DefaultLayout.jsx";
import {ProductPage} from "./pages/Product.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        Component: DefaultLayout,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                Component: App,
            },
            {
                path: "/about",
                Component: AboutPage,
            },
            {
                path: "/contact",
                Component: ContactPage,
            },
            {
                path: "/products/:id",
                Component: ProductPage,
            }
        ]
    },



])


createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}>
        <BrowserRouter>
            <TodoProvider>
            </TodoProvider>
        </BrowserRouter>
    </RouterProvider>
)

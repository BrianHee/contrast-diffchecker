import DiffEditor from "../components/DiffEditor";
import DiffForm from "../components/DiffForm";
import About from "../pages/About";
import Feedback from "../pages/Feedback";
import Error from '../pages/Error';


const ROUTES = [
    {
        name: 'home',
        path: '/',
        element: <DiffForm />
    },
    {
        name: 'diff',
        path: '/diff',
        element: <DiffEditor />
    },
    {
        name: 'about',
        path: '/about',
        element: <About />
    },
    {
        name: 'feedback',
        path: '/feedback',
        element: <Feedback />
    },
    {
        name: 'error',
        path: '*',
        element: <Error />
    }
]

export default ROUTES;

import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navber';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='container px-2 mx-auto'> <Outlet></Outlet></div>
        </div>
    );
};

export default Main;
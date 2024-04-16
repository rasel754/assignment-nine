import { Outlet } from 'react-router-dom';
import NavBar from '../navBar/NavBar';
import Banner from '../banner/Banner';
import Footer from '../footer/Footer';

const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;
import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>home | page</title>
            </Helmet>
            <h1 className='text-3xl'>this is home </h1>
        </div>
    );
};

export default Home;
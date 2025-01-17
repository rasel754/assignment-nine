import { Link } from "react-router-dom";
import error from "../../assets/error.jpg";
import { Helmet } from "react-helmet-async";
import 'animate.css';

const ErrorPage = () => {
  return (
    
    <div data-aos="zoom-in-down" className="text-center mt-32 space-y-6">
        <Helmet>
            <title>Error | page</title>
        </Helmet>
      <h1 className="text-2xl "><span className="font-extrabold text-4xl animate__rubberBand">404</span> - Not Found</h1>
      <p className="text-xl">Sorry, the page you are looking for does not exist.</p>
      <div className="grid place-content-center">
        <img className="h-40 w-40 " src={error} alt="" />
      </div>
      <Link to="/">
        <button className="btn btn-error font-semibold my-6 animate__rubberBand">Go Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;

import { HelmetData } from "react-helmet-async";
import { useParams } from "react-router-dom";

const EstateDetails = () => {
    const {id ,image}=useParams()
    return (
        <div>
            <HelmetData>
                <title>estate | details</title>
            </HelmetData>
            <h1>hello estate details</h1>
            {/* <img src={} alt="" /> */}
            <p>{id}</p>
        </div>
    );
};

export default EstateDetails;
import { HelmetData } from "react-helmet-async";
// import { useLoaderData, useParams } from "react-router-dom";

const EstateDetails = () => {
    // const  { id }= useParams();
    // console.log(id);
    // const idConvert = parseInt(id);
    // const cardDetails = useLoaderData();
    // // console.log(information);
    // const data = cardDetails.find((item) => item.id === idConvert);
    // console.log(data);

    // console.log(typeof parseeInt);
    return (
        <div>
            <HelmetData>
                <title>estate | details</title>
            </HelmetData>
            <div>
                {/* Additional content goes here */}
            </div>
            <h1>hello estate details </h1>
            {/* <img src={data.image} alt="" /> */}
            <p></p>
        </div>
    );
};

export default EstateDetails;

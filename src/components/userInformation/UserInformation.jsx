import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../../firebase/firebase.config";


const auth = getAuth(app);



const UserInformation = () => {
    const {user}=useContext(AuthContext);

    updateProfile(auth.currentUser,[
        {
            displayName: user.displayName,
            photoURL: user.photoURL,
            email: user.email
        }
    ])

     .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.error(err);
      });


    return (
        <div className="my-8  border-double border-4 border-indigo-600 py-5 w-2/4 mx-auto">
        <h2 className="text-3xl font-bold text-center">Users:{user.displayName}</h2>
        <p className="text-2xl font-medium text-center">
          user img : <div className="grid place-content-center"><img  src={user.photoURL} alt="this is users image   " /></div>
        </p>
        <p className="text-xl font-medium text-center">email:{user.email}</p>
      </div>
    );
};

export default UserInformation;
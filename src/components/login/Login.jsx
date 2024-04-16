import { Link } from "react-router-dom";
import { BsGoogle ,BsGithub } from "react-icons/bs";



const Login = () => {

    // const {signIn}=useContext(AuthContext);

    const handleGithub = ()=> {
        console.log("hello github");
    }
    const handleLogin = e => {
        e.preventDefault();
        const form =new FormData(e.currentTarget);
        console.log(form)

        // signIn(email,password)
        // .then( result => {
        //     console.log(result.user)})

        // .catch(error=>{
        //      console.error(error);
        //  })
    

    }
    return (
        <div>
      <div>
        <h1 className="text-3xl text-center mt-5">Login your account</h1>
        <form onSubmit={handleLogin} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-3">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <div className="flex  mx-auto mb-3 w-1/2 md:w-1/4 p-2 border-4">
            <span className="mx-auto flex gap-9">
            <button><BsGoogle onClick={handleGithub} className="text-3xl"></BsGoogle></button>
            <button><BsGithub className="text-3xl "></BsGithub></button>
            </span>
        </div>
        <p className="text-center ">do not have a account ? please <span className="text-red-700 font-semibold"><Link to="/register">Register</Link></span> </p>
      </div>
    </div>
    );
};

export default Login;
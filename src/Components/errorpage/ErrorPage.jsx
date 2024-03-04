import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
      
          <img
          className="w-[800px] mx-auto" 
           src={'https://i.ibb.co/vmsDBYt/Na-Nov-26.jpg'} alt="" />
 
        <Link to={'/'}>
       <div className=" flex justify-center my-10">
       <button className=" btn btn-outline text-primary text-xl "> Back to Home</button>
       </div>
        </Link>
      </div>
    );
};

export default ErrorPage;
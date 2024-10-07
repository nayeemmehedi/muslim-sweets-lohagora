
import LottieReact from "../../utls/LottieReact.js";
import read from "public/illustration/read.json";
import FormSignUp from "./FormSignUp.jsx";

const SignUp = () => {
  return (
    <div className="bg-zinc-800 grid grid-cols-2">
      <div className="ms-10 ps-10">
        {" "}
        <FormSignUp></FormSignUp>
      </div>
      <div>
        <LottieReact value={read}></LottieReact>
      </div>
    </div>
  );
};
export default SignUp;

// export  {SignUp};

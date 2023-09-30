import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [terms, setTerms] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const termsAccepted = e.target.terms.checked;
    console.log(email, password, termsAccepted);

    //reset error
    setRegisterError("");
    setSuccess("");

    if (password.length < 6) {
      setRegisterError("Password At Least 6 Characters ");
      return;
    } else if (
      !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(
        password
      )
    ) {
      setRegisterError(
        "Password minimum six characters, at least one letter, one number and one special character"
      );
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess("User created successfully");
      })
      .catch((error) => {
        console.error(error);
        setRegisterError(error.message);
      });
  };

  return (
    <div className="border p-8 m-12">
      <div className="mx-auto w-3/4 space-y-8">
        <h2 className="text-2xl font-bold">Registration Here</h2>
        <form onSubmit={handleRegister}>
          <input
            className="mb-4 w-full p-2"
            type="email"
            name="email"
            placeholder="Email Adress"
            required
          />
          <br />
          <div className="relative">
            <input
              className="mb-4 w-full p-2"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              required
            />
            <span
              className="absolute top-3 right-5"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </span>
          </div>
          <br />
          <input onChange={setTerms} type="checkbox" name="terms" id="terms" />
          <label className="pl-2" htmlFor="terms">
            Accept our terms and conditions.
          </label>
          <br />
          <br />
          <input
            className="btn btn-outline"
            type="submit"
            value="Register"
            id=""
          />
        </form>
        {registerError && (
          <p className="text-base text-red-600">{registerError}</p>
        )}
        {success && <p className="text-green-300">{success}</p>}
      </div>
    </div>
  );
};

export default Register;

import SignInForm from "../../../components/forms/sign-in-form";

function SignIn() {
  return (
    <div className="row d-flex">
      <h2 className="text-center">Sign In</h2>
      <div className="col-6 container">
        <SignInForm></SignInForm>
      </div>
    </div>
  );
}

export default SignIn;

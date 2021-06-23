import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { login } from "../../../services";

function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const history = useHistory();

  const onSubmit = async (formData) => {
    const loggedIn = await login(formData);
    localStorage.setItem("auth.token", JSON.stringify(loggedIn.token));
    history.replace("/users");
  };
  return (
    <form
      className="container d-flex  flex-column"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email Address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          value="eve.holt@reqres.in"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="text-danger form-text">
            {errors.email.type === "required" && "E-Mail is required."}
          </span>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Email Address
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          value="cityslicka"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <span className="text-danger form-text">
            {errors.password.type === "required" && "Password is required."}
          </span>
        )}
      </div>
      <button className="btn btn-primary" type="submit">
        Login
      </button>
    </form>
  );
}

export default SignInForm;

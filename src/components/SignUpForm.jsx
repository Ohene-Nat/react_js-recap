import {useForm} from "react-hook-form";

function SignUpForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    function onSubmit(data) {
        alert("Form submitted! with Username: " + data.username + ", Email: " + data.email + ", Password: " + data.password);
        // Handle form submission logic here
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Username:</label>
                <input type="text" id="username" name="username" placeholder="Enter username" {...register("username", { required: "Username is required" })} />
                {errors.username && <p style={{ color: "red" }}>{errors.username.message}</p>}
            </div>
            <div>
                <label >Email:</label>
                <input type="email" id="email" name="email" placeholder="your.email@example.com" {...register("email", { required: "Email is required" }    )} />
                {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
            </div>
            <div>
                <label >Password:</label>
                <input type="password" id="password" name="password" placeholder="............." {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" }, maxLength: { value: 100, message: "Password must be less than 100 characters" } })} />
                {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
            </div>
            <button type="submit">Sign Up</button>
        </form>
    );
}

export default SignUpForm;
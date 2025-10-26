import { useForm } from "react-hook-form";
import useAuth from "../hook/useAuth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { auth } from "../firebase/config";

const SignUp = () => {
    const navigate = useNavigate();
    const { signUp, updateP } = useAuth();
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        try {
            // 🔹 1. Create User
            const userCredential = await signUp(data.email, data.password);
            const user = userCredential.user;
            console.log(user);

            // 🔹 2. Update Display Name
            await updateP(data.firstName); // তুমি form-এ firstName ব্যবহার করছো, তাই এটিই ঠিক

            // 🔹 3. Refresh current user info
            await user.reload();

            console.log("Updated Name:", auth.currentUser.displayName); // ✅ এখন name দেখাবে

            // 🔹 4. Success alert
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Account Created Successfully!",
                showConfirmButton: false,
                timer: 1500
            });

            navigate("/");

        } catch (error) {
            console.error("Signup Error:", error.message);
            Swal.fire({
                icon: "error",
                title: "Signup Failed",
                text: error.message,
            });
        }
    };

    // ✅ return এখন function-এর ভেতরে
    return (
        <div className="h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Sign Up</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="flex flex-col">
                        <label className="mb-1 text-gray-600">Name</label>
                        <input
                            {...register("firstName")}
                            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your name"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="mb-1 text-gray-600">Email</label>
                        <input
                            {...register("email")}
                            type="email"
                            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="mb-1 text-gray-600">Password</label>
                        <input
                            {...register("password")}
                            type="password"
                            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your password"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;

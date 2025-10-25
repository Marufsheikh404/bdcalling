import { useForm } from "react-hook-form";
import useAuth from "../hook/useAuth";

const SignUp = () => {
    const {} = useAuth();
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className="h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">SignUp</h2>

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
                        SignIn
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;

import image from '../assets/pngwing_1-removebg-preview.png'

const Hero = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col items-stretch lg:flex-row-reverse">
                <img
                    src={image}
                    className="max-w-sm flex-1 rounded-lg shadow-2xl"
                />
                <div className='flex-1 flex flex-col items-center justify-center'>
                    <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
                    <p className="py-6 text-sm">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn bg-[#23BE0A] px-3 font-bold">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
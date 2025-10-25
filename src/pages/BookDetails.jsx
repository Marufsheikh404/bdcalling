import image from '../assets/kindpng_7318921@2x.png'
export default function BookDetails({
    title = "The Catcher in the Rye",
    author = "Awlad Hossain",
    category = "Fiction",
    review = `Sit amet consectetur. Interdum porta pulvinar non sit aliquam. Aenean pulvinar blandit vel non enim elementum penatibus pellentesque ac. Nec accumsan euismod nulla adipiscing lectus. Morbi elementum a auctor erat diam tellus. Fermentum faucibus nulla enim ornare.`,
    tags = ["#Young Adult", "#Identity"],
    pages = 281,
    publisher = "J.B Lippincott & Co.",
    year = 1960,
    rating = 4.8, 
}) {
    return (
        <div className="max-w-6xl mx-auto p-6">
            <div className=" rounded-md p-4">
                <div className="bg-white rounded-sm overflow-hidden">
                    <div className="flex flex-col lg:flex-row gap-6">
                        {/* Left image panel */}
                        <div className="lg:w-1/2 flex items-center justify-center p-8 bg-gray-100">
                            <div className="w-full max-w-xs">
                                <img
                                    src={image}
                                    alt={title}
                                    className="w-full drop-shadow-lg rounded-sm transform -rotate-2"
                                    style={{ maxHeight: 360, objectFit: "contain" }}
                                />
                            </div>
                        </div>

                        {/* Right info panel */}
                        <div className="lg:w-1/2 p-6">
                            <h1 className="text-3xl lg:text-4xl font-serif text-black font-bold mb-2">{title}</h1>
                            <p className="text-sm text-gray-600 mb-4 font-bold">By : <span className="font-medium text-black">{author}</span></p>

                            <div className="border-t border-b py-4 mb-4">
                                <p className="mb-2 text-xl text-black font-semibold">{category}</p>
                                <p className="text-sm text-black"><span className="font-semibold text-black">Review :</span>{review}</p>
                            </div>

                            {/* Tags */}
                            <div className="mb-4">
                                <span className="font-semibold mr-3">Tag</span>
                                {tags.map((t, i) => (
                                    <span key={i} className=" inline-block justify-between mr-2 mb-2 px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {/* Details grid */}
                            <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-700 mb-6">
                                <div className="flex items-center">Number of Pages:</div>
                                <div className="font-semibold">{pages}</div>

                                <div className="flex items-center">Publisher:</div>
                                <div className="font-semibold">{publisher}</div>

                                <div className="flex items-center">Year of Publishing:</div>
                                <div className="font-semibold">{year}</div>

                                <div className="flex items-center">Rating:</div>
                                <div className="font-semibold">{rating}</div>
                            </div>

                            {/* Action buttons */}
                            <div className="flex gap-3">
                                <button className="px-5 py-2 border rounded-md bg-sky-400">Read</button>
                                <button className="px-5 py-2 rounded-md bg-sky-400 text-white">Wishlist</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

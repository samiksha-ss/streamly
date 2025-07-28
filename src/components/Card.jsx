import {useState} from 'react'

const Card = ({ image, alt, title, description }) => {
    const [hasLiked, setHasLiked] = useState(false)
    const [inList, setInList] = useState(false)
    return (
        <div className="bg-zinc-900 text-white rounded-xl w-[220px] h-[370px] shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-200 ease-in-out flex flex-col overflow-hidden">
            {/* Image */}
            <div className="w-full h-[250px] bg-zinc-800 flex items-center justify-center overflow-hidden">
                {image ? (
                    <img src={image} alt={alt || title} className="object-cover w-full h-full" />
                ) : (
                    <div className="text-gray-500 text-sm">No Image</div>
                )}
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col justify-between p-3">
                <div className="space-y-1">
                    <h2 className="text-base font-semibold truncate">{title}</h2>
                    <p className="text-xs text-gray-300 line-clamp-3">
                        {description}
                    </p>
                </div>

                {/* Buttons */}
                <div className="flex gap-2 mt-3">
                    <button
                        onClick={() => setHasLiked(!hasLiked)}
                        className={`flex-1 px-2 py-1 rounded-md font-medium text-xs transition-colors duration-200 ${hasLiked
                            ? 'bg-zinc-700 text-green-400 hover:bg-zinc-600'
                            : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'
                            }`}
                    >
                        {hasLiked ? 'Liked ❤️' : 'Like ♡'}
                    </button>

                    <button
                        onClick={() => setInList(!inList)}
                        className={`flex-1 px-2 py-1 rounded-md font-medium text-xs transition-colors duration-200 ${inList
                            ? 'bg-zinc-700 text-blue-400 hover:bg-zinc-600'
                            : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'
                            }`}
                    >
                        {inList ? 'Added ✅' : 'Add ➕'}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card

import { useState } from 'react';

const Search = () => {
    const [query, setQuery] = useState('');
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const searchBooks = async () => {
        if (!query.trim()) return;
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`http://localhost:3000/api/google-books/search?q=${query}`);
            if (!response.ok) throw new Error('Failed to fetch');

            const data = await response.json();
            setBooks(data.items || []);
        } catch (err) {
            setError('Something went wrong while fetching books.');
        }
        setLoading(false);
    }

    return (
        <div className="w-full mx-auto m-28 mb-8 flex flex-col items-center gap-4">
            {/* <h2>Hey Buddy search for books...</h2> */}
            <div className="flex gap-4 items-center max-w-l">
                <input
                    type="text"
                    placeholder="Search"
                    className="w-[25rem] h-[55px] p-3 rounded-3xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                    }}
                />
                <button onClick={searchBooks}
                    className="bg-blue-600 text-white px-5 py-2 rounded-3xl hover:bg-blue-700 transition"
                >
                    Search
                </button>
            </div>

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}

            {/* Encouraging message */}
            {!query && books.length === 0 && !loading && !error && (
                <p className="text-center text-lg text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
                    Welcome to <span className="font-semibold text-blue-600">Book Buddy</span> — your reading companion! 📚<br />
                    Whether you’re chasing dragons or decoding thrillers,<br />
                    we’ll help you find the stories you love.<br />
                    Just type in a title, author, or a word that inspires you.<br />
                    Let your next adventure begin with a single search. ✨
                </p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {books.length > 0 && (
                    books.map((book) => {
                        const info = book.volumeInfo;

                        return (


                            <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center text-center hover:shadow-xl transition">
                                {/* Cover Image */}
                                {info.imageLinks?.thumbnail && (
                                    <img
                                        src={info.imageLinks.thumbnail}
                                        alt={info.title}
                                        className="w-32 h-48 object-cover rounded mb-4"
                                    />
                                )}

                                {/* Title */}
                                <h3 className="text-lg font-semibold text-gray-800">{info.title}</h3>

                                {/* Authors */}
                                <p className="text-sm text-gray-600">
                                    {info.authors ? info.authors.join(', ') : 'Unknown Author'}
                                </p>

                                {/* Published Date */}
                                <p className="text-sm text-gray-500 mt-1">
                                    Published: {info.publishedDate || 'Unknown'}
                                </p>

                                {/* Rating */}
                                {info.averageRating && (
                                    <p className="text-yellow-500 mt-1">
                                        ⭐ {info.averageRating} / 5
                                    </p>
                                )}

                                {/* Categories */}
                                {info.categories && (
                                    <div className="mt-2 flex flex-wrap justify-center gap-2">
                                        {info.categories.map((cat, index) => (
                                            <span
                                                key={index}
                                                className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs"
                                            >
                                                {cat}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>

                        )
                    })
                )}
            </div>
        </div>
    )
}

export default Search;
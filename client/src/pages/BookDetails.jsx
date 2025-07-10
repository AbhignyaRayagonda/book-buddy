import {useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';

const BookDetails = () => {
    const {id} = useParams();
    const [book, setBook] = useState(null);

    useEffect (()=> {
        const fetchBook = async() => {
            console.log('Book Id is', id)
            const res = await fetch(`http://localhost:3000/api/google-books/${id}`);
            const data = await res.json();
            console.log(data)
            setBook(data);
        };
        fetchBook();
    }, [id]);

    const stripHtml = (html) =>{
        const temp = document.createElement("div");
        temp.innerHTML = html;
        return temp.textContent ||temp.innerText ||" ";
    }

    if(!book) return <p>Loading...</p>


    return (
        <div className=" md:flex-row gap-6 p-6">
            {/* left part */}
            <div className="w-full flex gap-1  p-2 mb-[-10px] md: space-y-4">
            <div className="md:w-1/2 flex justify-center">
            <img 
            src= {book?.volumeInfo?.imageLinks?.extraLarge} 
            alt="Book Cover"  
            className=" w-auto h-[400px] object-cover"/>
            </div>
            <div className="ml-[-150px] flex flex-col gap-2">
            <h1><b>Title: </b>{book?.volumeInfo?.title}</h1>
            <p><b>{book?.volumeInfo?.authors?.length > 1 ? 'Authors':'Author'}: </b>{book?.volumeInfo?.authors?.join(',')}</p>

            <p><b>Published Date: </b>{book?.volumeInfo?.publishedDate}</p>
           {book?.volumeInfo?.averageRating && <p> <b>Rating: </b>⭐{book?.volumeInfo?.averageRating}/ 5</p>}
            <p><b>Language: </b>{book?.volumeInfo?.language}</p>
            <p><b>Total Pages: </b>{book?.volumeInfo?.pageCount}</p>
            <a className="w-[150px] bg-green-700 px-3 py-1 rounded-2xl text-white items-center justify-center" href={book?.saleInfo?.buyLink}>Product link</a>

            </div>
            </div>
            <div className="w-auto p-6 text-[20px] flex flex-col gap-3">
             {book?.volumeInfo.categories && (
                                    <div className="mt-2 flex flex-wrap justify-center gap-2">
                
                                        {book?.volumeInfo.categories?.slice(0,4).map((cat, index) => (
                                            <span
                                                key={index}
                                                className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs"
                                            >
                                                {cat}
                                            </span>
                                        ))}
                                    </div>
                                )}
            <p>{stripHtml(book?.volumeInfo?.description)}</p>
            </div>
           
            
        </div>
    )

}

export default BookDetails;
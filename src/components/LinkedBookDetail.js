import Link from "next/link";
import BookDetail from "./BookDetail";


export default function LinkedBookDetail ({index, book}){
    //bookdetailsコンポーネントにリンクを付与
    return(
        <Link href={`/edit/${book.id}`}>
         <div className="hover:bg-green-50">
             <BookDetail  index={index} book={book}  />
         </div>
        </Link>
    )
}



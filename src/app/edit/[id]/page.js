import BookDetail from "@/components/BookDetail";
import FormEdit from "@/components/Formedit";
import { getBookById } from "@/lib/getter";
import { getReviewById } from "@/lib/getter";


export default async function EditPage({params}){
    const book = await getBookById(params.id);
    const review = await getReviewById(params.id);

  // 「YYYY-MM-DD」形式の日付を作成
  const read = (review?.read || new Date()).toLocaleDateString('sv-SE');

  return(
     <div id="form">
       <BookDetail book={book}/>
       <hr/>
       <FormEdit  src={{id: book.id, read, memo: review?.memo}}  />
     </div>
  )

}
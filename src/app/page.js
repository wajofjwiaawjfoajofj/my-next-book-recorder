import getAllReviews from "@/lib/getter";
import LinkedBookDetail from "@/components/LinkedBookDetail";


//常に最新の情報を取得
export const dynamic = 'force-dynmaic';


export default async function Home(){
  const reviews = await getAllReviews();

  return(
    <>
    {/* 取得したレビュー情報をもとにリストを生成 */}
    {reviews.map((b,i) => (
      <LinkedBookDetail book={b} index={i + 1}  key={b.id} />
    ))}
    </>
  )
}


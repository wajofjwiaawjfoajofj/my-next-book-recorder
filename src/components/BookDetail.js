import Image from "next/image";

export default function BookDetail({index,book}){
    return(
    <div className="flex w-full mb-2  border-t border-b py-4 ">
        <div>
        {/* 本の写真 */}
            <Image src={book.image} alt=""  width={140} height={180} />
        </div>
        <div>
        {/* 書籍情報をリスト表示　(index属性が表示されたら連番も表示)。 */}
        <ul className="list-none text-black ml-4">
         <li className="text-lg font-semibold ml-1 mb-1">{index}</li>
         <li className="text-base font-semibold ml-1 mb-1">{book.title}</li>
         <li className="ml-2">価格：{book.price}円</li>
         <li className="ml-2">{book.author}</li>
         <li className="ml-2">{book.publisher}刊</li>
         <li className="ml-2">{book.published}発売</li>
        </ul>
        </div>
    </div>
    );
}
'use client'

import { addReview, removeReview} from "@/lib/action";

export default function FormEdit({ src: { id, read, memo } }) {
  const handleSubmit = (event) => {
    event.preventDefault(); // フォームのデフォルトの動作を無効化

    // フォームのデータを取得
    const formData = new FormData(event.target);

    // addReview 関数を呼び出し
    addReview(formData);
  };

  const handleDelete = () => {
    // removeReviews 関数を呼び出し
    removeReview({ id });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="hidden" name="id" defaultValue={id} />
      <div className="mb-3">
        <label className="font-bold" htmlFor="read">
          読了日:
        </label>
        <input
          type="date"
          id="read"
          name="read"
          className="block bg-grey-100 border-2 border-gray-600 rounded focus:bg-white focus:outline-none focus:border-red"
          defaultValue={read}
        />
      </div>
      <div className="mb-3">
        <label className="font-bold" htmlFor="memo">
          感想:
        </label>
        <textarea
          id="memo"
          name="memo"
          rows="5"
          className="block bg-grey-100 border-2 border-gray-600 w-full rounded focus:bg-white focus:outline-none focus:border-red-500"
          defaultValue={memo}
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white rounded px-4 py-2 mr-2 hover:bg-blue-500"
      >
        登録
      </button>

      <button
        type="button"
        className="bg-red-600 text-white rounded px-4 py-2 mr-2 hover:bg-blue-500"
        onClick={handleDelete}
      >
        削除
      </button>
    </form>
  );
}






// import {addReview, removeReviews} from "@/lib/action";

// export default function FormEdit({src:{id,read,memo}}){
//     return(

//      //サブミット時にaddreviewを呼び出し
//      <form action={addReview}>
//        <input  type="hidden" name="id" defaultValue={id} />    
//         <div className='mb-3'>
//             <label  className='font-bold' htmlFor='read' >読了日:</label>
//             <input type="date" id="read"  name="read"  className='block bg-grey-100 border-2 border-gray-600 
//                      rounded forcus:bg-white focus:outline-none focus:border-red'  defaultValue={read}   />
//         </div>
//         <div className='mb-3'>
//             <label className='font-bold' htmlFor='memo' >感想:</label>
//             <textarea  id="memo"  value="memo"  rows="5" className='block bg-grey-100 border-2 border-gray-600 
//                 w-full  rounded forcus:bg-white focus:outline-none focus:border-red-500' defaultValue={memo} ></textarea>
//         </div>
//         <button type='submit'  className='bg-blue-600 text-white rounded px-4 py-2 mr-2 hover:bg-blue-500'>登録</button>

//         {/* 削除ボタンでremovereviews関数の呼び出し */}
//         <button type="submit" className='bg-red-600 text-white rounded px-4 py-2 mr-2 hover:bg-blue-500' formAction={removeReviews}>削除</button>

//      </form>

//     )
// }
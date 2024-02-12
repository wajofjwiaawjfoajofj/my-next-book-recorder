

import prisma from "./prisma";

export default async function getAllReviews(){
  // 読了日降順で取得
  return await prisma.reviews.findMany({
    orderBy: {
      read: 'desc'
    }
  });
}


// import prisma from "./prisma";

// export default function getAllReviews(){
//   //読了日降順で取得
//   return await prisma.reviews.findMany({
//       orderBy: {
//           read: 'desc'
//       }
//   })
// }

import { PrismaClient } from "@prisma/client";

//prismaのクライアントオブジェクトを設定する


//global.prisma上にprismaクライアントが存在すれば再利用
const prisma = global.prisma ?? new PrismaClient({log : ['query']});

//非production環境では、global.prismaにオブジェクトを格納
if(process.env.NODE_ENV !== 'production') global.prisma = prisma

export default prisma;

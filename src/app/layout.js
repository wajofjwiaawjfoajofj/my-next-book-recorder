import Link from "next/link";
import { Inter } from 'next/font/google'
import "./globals.css";

//アプリ全体の外枠を定義するルートレイアウトの設定

//Googleフォントを有効化
const fnt = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "書籍記録アプリ",
  description: "このアプリは自分が読んだ書籍の記録を残すことができます。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fnt.className}>
        <h1 className="text-3xl text-indigo-800 font-bold my-4 ml-4">書籍管理アプリ</h1>
        {/* 　共通メニューの準備 */}
        <ul className="flex bg-blue-600 mb-4 pl-2">
          <li className="block px-7 py-2 my-1 hover:bg-gray-100 rounded">
            <Link className="no-underline text-blue-300" href="/">ホーム</Link>
          </li>
          <li className="block px-7 py-2 my-1 hover:bg-gray-100 rounded">
            <Link className="no-underline text-blue-300" href="/books">探す</Link>
          </li>
          <li className="block px-7 py-2 my-1 hover:bg-gray-100 rounded">
            <Link className="no-underline text-blue-300" href="https://wing.msn.to/">サポートページ</Link>
          </li>
        </ul>
      
      {/* ページコンポーネントを反映する領域 */}
      <div className="ml-2">
      {children}
      </div>
        </body>
    </html>
  );
}

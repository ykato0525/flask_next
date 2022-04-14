import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link"



// function HomePage() {
function Note({ posts }) {
    console.log(posts);
    // 受け取るjsonの構造
    // タイトル
    // 日付
    // 担当者
    // ノートのファイル
    // 結果のファイル

    return (
       <div>hello world</div>
    );
}

// この関数はビルド時に呼ばれる
export async function getStaticProps() {
    // 投稿記事を取得する外部APIエンドポイントをコール
    const res = await fetch('http://app:5000/note/');
    const posts = await res.json();
    console.log(posts);

    // { props: posts }を返すことで、ビルド時にBlogコンポーネントが
    // `posts`をpropとして受け取れる
    return {
        props: {
            posts
        }
    }
}

export default Note;
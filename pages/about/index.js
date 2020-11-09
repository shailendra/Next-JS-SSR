import Head from 'next/head'
import style from './about.module.scss'

export default function About(prop) {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={style.bcw, style.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className="description">{prop.title}</p>

      </main>

    </div>
  )
}
export async function getServerSideProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  
  //const res = await fetch('http://127.0.0.1:5500/post.json')
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const posts = await res.json()
  console.log(posts)
  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: posts,
  }
}


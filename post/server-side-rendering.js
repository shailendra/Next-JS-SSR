import Layout from '../components/Layout'

export default function ServerSideRendering(prop) {
    return (
        <Layout>
            <h1>Server Side Rendering</h1>
            <p className="description">{prop.title}</p>
        </Layout>
    )
  }

//export async function getServerSideProps(context) {
export async function getServerSideProps(context) {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    
    const res = await fetch('http://127.0.0.1:5500/post.json')
    const posts = await res.json();
    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: posts
    }
}
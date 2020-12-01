import Layout from '../components/Layout'

export default function GetStaticProps(prop) {
    return (
        <Layout>
            <h1><a href="https://nextjs.org/docs/basic-features/data-fetching#simple-example"  target="_blank">Get Static Props</a></h1>
            <p> This function gets called at build time on server-side. <br/> It won't be called on client-side, so you can even do<br/>direct database queries. See the "Technical details" section.</p>
            <br/>
            <p className="description">{prop.title}</p>
        </Layout>
    )
  }

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps(context) {
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
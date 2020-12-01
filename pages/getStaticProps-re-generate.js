import Layout from '../components/Layout'

export default function GetStaticProps(prop) {
    return (
        <Layout>
            <h1><a href="https://nextjs.org/docs/basic-features/data-fetching#incremental-static-regeneration"  target="_blank">Get Static Props - Incremental</a></h1>
            <p> Incremental Static Regeneration allows you to update existing pages by re-rendering them in the background as traffic comes in</p>
            <br/>
            <ul>
                <li>1) No spikes in latency. Pages are served consistently fast</li>
                <li>2) Pages never go offline. If the background page re-generation fails, the old page remains unaltered</li>
                <li>3) Low database and backend load. Pages are re-computed at most once concurrently</li>
            </ul>
            <br/>
            <p className="description">{prop.title}</p>
        </Layout>
    )
  }

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps(context) {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    
    const res = await fetch('http://127.0.0.1:5500/post.json')
    const posts = await res.json();
    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: posts,
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 5 second
        revalidate: 5
    }
}
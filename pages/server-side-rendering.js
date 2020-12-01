import Layout from '../components/Layout'

//--- Import Layout Component using Dynamic ------------------------------------
// using dynamic import you can also Import Component
// sometime you will face 3rd party Component loading issue in SSR.
// user below method to fix issue when SSR, 
// SEO friendly
/* import dynamic from 'next/dynamic'
const Layout = dynamic(() => import('../components/Layout'),
{ ssr: true }) */

// if set  { ssr: false } then content will add client side,  not on server. 
// Not SEO friendly
/* import dynamic from 'next/dynamic'
const Layout = dynamic(() => import('../components/Layout'),
{ ssr: false }) */
//-------------------------------------------------------------------------------

export default function ServerSideRendering(prop) {
    return (
        <Layout>
            <h1>Server Side Rendering</h1>
            <p className="description">{prop.posts.title}</p>
        </Layout>
    )
  }

//export async function getServerSideProps(context) {
export async function getServerSideProps(ctx) {
    let isMobileView = (ctx.req
       ? ctx.req.headers['user-agent']
       : navigator.userAgent).match(
          /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
       );
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    
    const res = await fetch('http://127.0.0.1:5500/post.json')
    const posts = await res.json();
    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {posts:posts,  isMobileView: Boolean(isMobileView) }
    }
}
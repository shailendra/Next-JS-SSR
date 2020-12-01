import Layout from '../../components/Layout'
import Link from 'next/link';
import { useRouter } from 'next/router'
import { useEffect } from 'react'
export default function GetStaticPaths(prop) {
    //-- https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation

    useEffect(() => {
        // Always do navigations after the first render
        //router.push('/post/10?shai=more', undefined, { shallow: false })
    }, [])

    const router = useRouter()
    if (router.isFallback) {
        return <div>Loading...</div>
    }
    //-----------------------------------------------------
    const { pid, shai } = router.query;    
    //-----------------------------------------------------
    /* 
        /getStaticPaths-posts/20  ==  /getStaticPaths-posts/[pid].js
    */
    console.log(pid);
    //-----------------------------------------------------
    /* 
        access query string, in below path query is   'shai'
        /getStaticPaths-posts/20?shai=200 
    */
    console.log(shai);
    //-----------------------------------------------------

    

    return (
        <Layout>
            
            <h2><a href="https://nextjs.org/docs/routing/dynamic-routes" target="_blank">Dynamic Routing one level</a></h2>
            <h3> If a page has dynamic routes (documentation) and uses getStaticProps it needs to define a list of paths that have to be rendered to HTML at build time.</h3>
            <br/>
            <h3> [pid].js </h3>
            <br />
            <ul>
                {
                    prop.data.paths.map((obj) => (
                        <li key={obj.id}><Link href={"/post/" + obj.id}><a> /getStaticPaths-posts/{obj.id}</a></Link> </li>
                    ))
                }
            </ul>
            <br />
            <h3 className="description">{prop.dataPost.title}</h3>
        </Layout>
    )
}


// This function gets called at build time
export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch('http://127.0.0.1:5500/post.json')
    const posts = await res.json()

    // Get the paths we want to pre-render based on posts
    const paths = posts.paths.map((post) => ({
        params: { pid: post.id },
    }))

    //-- https://nextjs.org/docs/basic-features/data-fetching#fallback-true
    //-- We'll pre-render only these paths at build time.
    //-- { fallback: false } means other routes should 404.
    /* return { paths, fallback: false } */

    //--https://nextjs.org/docs/basic-features/data-fetching#when-is-fallback-true-useful
    //-- Instead, you may statically generate a small subset of pages and use fallback: true for the rest. When someone requests a page that’s not generated yet, the user will see the page with a loading indicator. Shortly after, getStaticProps finishes and the page will be rendered with the requested data. From now on, everyone who requests the same page will get the statically pre-rendered page.
    /* return { paths, fallback: true } */

    
    //-- https://nextjs.org/docs/basic-features/data-fetching#fallback-blocking
    //-- If fallback is 'blocking', new paths not returned by getStaticPaths will wait for the HTML to be generated, identical to SSR (hence why blocking), and then be cached for future requests so it only happens once per path.
    //-- Good for SSR
    return { paths, fallback: 'blocking' } 

}



// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps({ params }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await fetch('http://127.0.0.1:5500/post.json');
    const data = await res.json()
    const resPost = await fetch(`http://127.0.0.1:5500/${params.pid}.json`);


    const dataPost = await resPost.json();
    return {
        props: {
            data: data,
            dataPost: dataPost
        },
        // Re-generate the post at most once per second
        // if a request comes in
        //-- Good for SSR if you use getStaticProps
        revalidate: 2,
    }
}
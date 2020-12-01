import Layout from '../../components/Layout'
import Link from 'next/link';
import { useRouter } from 'next/router'
import { useEffect } from 'react'
export default function GetStaticPaths(prop) {
    //-- https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation

    useEffect(() => {
        // Always do navigations after the first render
        // router.push('/post/10', undefined, { shallow: false })
    }, [])

    const router = useRouter()
    if (router.isFallback) {
        return <div>Loading...</div>
    }
    
    const param = router.query.param || [];
    console.log(param);
    //-----------------------------------------------------

    return (
        <Layout>
            
            <h2><a href="https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes" target="_blank">Dynamic Routing Multiple level 
</a></h2>
            <h3> Dynamic routes can be extended to catch all paths by adding three dots (...) inside the brackets</h3>
            <br />
            <h1>param: {param.join('/')}</h1>
            <br/>
            <h3> [...param].js </h3>
            <ul>
                {
                    /* prop.data.paths.map((obj) => (
                        <li key={obj.id}><Link href={"/getStaticPaths-posts/" + obj.id}><a> /getStaticPaths-posts/{obj.id}</a></Link> </li>
                    )) */
                }
            </ul>
            <br />
            {/* <p className="description">{prop.dataPost.title}</p> */}
        </Layout>
    )
}


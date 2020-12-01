import Layout from '../components/Layout'
import Link from 'next/link';
import Head from 'next/head'


export default class Form extends React.Component {
   constructor(props) {
      super(props);
   }
   componentDidMount() {
   }

   render() {
      return (
         <Layout>
            <h1 className="newHeader"><a href="https://nextjs.org/docs/api-reference/next/head">Head</a></h1>
            <br />
            {/* Head Component is also in Navbar, So this Head Component will Override */}
            <Head>
               <title>New Head</title>
               <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
         </Layout>
      )
   }
}

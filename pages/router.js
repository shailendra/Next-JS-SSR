import Layout from '../components/Layout'
import Link from 'next/link';
import { withRouter } from 'next/router'


class Router extends React.Component {
   constructor(props) {
      super(props);
   }
   componentDidMount() {
   }

   render() {
      const router = this.props.router;
      const pathname = router.pathname;
      let handleClick = (e) => {
         e.preventDefault()

         // Navigating to - /post/10
         /* router.push("/post/10"); */


         // Navigating to - /post/10?&name=Shailendra
         router.push({
            pathname: '/post/[pid]',
            query: { pid: 10, name: "Shailendra" },
         });

         
         // Navigating to - /jsx?age=45&name=Shailendra
         /* router.push({
            pathname: '/jsx/',
            query: { age: 45, name: "Shailendra" },
         }); */


         // router.replace will prevent adding a new URL entry into the history stack.
         /* router.replace("/post/10"); */


         // Navigate back in history.
         /* router.back(); */

         
         // Reload the current URL.
         /* router.reload(); */

      }
      return (
         <Layout>
            <h1 className="newHeader"><a href="https://nextjs.org/docs/api-reference/next/router">Router</a></h1>
            <br />

            {/* Handles client-side transitions */}
            <a onClick={handleClick} >handleClick</a>
         </Layout>
      )
   }
}
export default withRouter(Router)
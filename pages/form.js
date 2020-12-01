import Layout from '../components/Layout'
import Link from 'next/link';


export default class Form extends React.Component {
   constructor(props) {
      super(props);
   }
   componentDidMount() {
   }

   render() {
      let handleClick = (e) => {
         e.preventDefault()

         fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              /* Form data */
            }),
          }).then((res) => {
            // Do a fast client-side transition to the already prefetched dashboard page
            if (res.ok) router.push('/dashboard')
          })
      }
      return (
         <Layout>
            <h1 className="newHeader"><a href="https://nextjs.org/docs/api-reference/next/router">Fetch, Forms</a></h1>
            <br />

            <a onClick={handleClick} >Submit</a>
         </Layout>
      )
   }
}

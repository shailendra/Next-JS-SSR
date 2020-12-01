
import Layout from '../components/Layout'
import React from 'react';
const Code = (p) => <code className={'inlineCode'} {...p} />

//const environmentVariables = () => (
export default class environmentVariables extends React.Component {
   constructor(props) {
      super(props);
   }
   componentDidMount() {
      $(".newHeader").css({ color: "#ff0000" });
   }
   render() {
      return (
         <Layout>
            <div className={'container'}>
               <div className={'card'}>
               
                  <h1><a href="https://nextjs.org/docs/basic-features/environment-variables#loading-environment-variables" target="_blank">Environment Variables with Next.js</a></h1>
                  <hr className={'hr'} />
                  <p>
                     In the table below you'll see how{' '}
                     <a href="https://nextjs.org/docs/basic-features/environment-variables#exposing-environment-variables-to-the-browser">
                        environment variables can be exposed to the browser
        </a>{' '}
        with Next.js.
      </p>
                  <p>
                     In general only <Code>.env.local</Code> or <Code>.env</Code> are needed
        for this, but the table also features the usage of{' '}
                     <Code>.env.development</Code> and <Code>.env.production</Code>.
      </p>
                  <table className={'table'}>
                     <thead>
                        <tr>
                           <th>Variable Name</th>
                           <th>Value</th>
                           <th>Added By</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                           <td>NEXT_PUBLIC_ENV_VARIABLE</td>
                           <td>{process.env.NEXT_PUBLIC_ENV_VARIABLE}</td>
                           <td>
                              <Code>.env</Code>
                           </td>
                        </tr>
                        <tr>
                           <td>NEXT_PUBLIC_ENV_LOCAL_VARIABLE</td>
                           <td>{process.env.NEXT_PUBLIC_ENV_LOCAL_VARIABLE}</td>
                           <td>
                              <Code>.env.local</Code>
                           </td>
                        </tr>
                        <tr>
                           <td>NEXT_PUBLIC_DEVELOPMENT_ENV_VARIABLE</td>

                           <td>{process.env.NEXT_PUBLIC_DEVELOPMENT_ENV_VARIABLE}</td>
                           <td>
                              <Code>.env.development</Code>
                           </td>
                        </tr>
                        <tr>
                           <td>NEXT_PUBLIC_PRODUCTION_ENV_VARIABLE</td>

                           <td>{process.env.NEXT_PUBLIC_PRODUCTION_ENV_VARIABLE}</td>
                           <td>
                              <Code>.env.production</Code>
                           </td>
                        </tr>
                        <tr>
                           <td>NEXT_PUBLIC_SERVER_URL</td>

                           <td>{process.env.NEXT_PUBLIC_SERVER_URL}</td>
                           <td>
                              <Code>.env.production</Code>
                           </td>
                        </tr>

                        
                     </tbody>
                  </table>
                  <p>
                     <Code>.env.local</Code> is not added by the example, because it must be
        ignored by git, but you can add it manually:
      </p>
                  <pre>
                     <code>cp .env.local.example .env.local</code>
                  </pre>
                  <p>
                     Variables in <Code>.env.production</Code> won't be available if the app
        is running in development:
      </p>
                  <pre>
                     <code>npm run dev</code>
                  </pre>
                  <p>
                     Similarly, variables in <Code>.env.development</Code> won't be available
        if the app is running on production:
      </p>
                  <pre>
                     <code>npm run build && npm run start</code>
                  </pre>
                  <p>Once you run the app, you'll see logs like these in the terminal:</p>
                  <pre>
                     <code>
                        info - Loaded env from /home/user/../.env.local{'\n'}
          info - Loaded env from /home/user/../.env.development{'\n'}
          info - Loaded env from /home/user/../.env{'\n'}
                     </code>
                  </pre>
                  <p>
                     The order is important, the first loaded env will have a higher
                     priority.
      </p>
                  <p>
                     <Code>.env</Code> will not overwrite any variables defined in{' '}
                     <Code>.env.local</Code> or <Code>.env.development</Code>.
      </p>
               </div>
               <style jsx>{`
        .container {
         padding: 4rem 1rem;
         font-family: -apple-system, BlinkMacSystemFont, sans-serif;
       }
       
       .container p {
         margin: 1.5rem 0;
       }
       
       .container pre {
         border: 1px solid #eaeaea;
         padding: 1.25rem;
         margin: 1.5rem 0;
         white-space: pre;
         overflow: auto;
         -webkit-overflow-scrolling: touch;
       }
       
       .card {
         max-width: 50rem;
         box-shadow: -10px 10px 80px rgba(0, 0, 0, 0.12);
         border: 1px solid #eee;
         border-radius: 8px;
         padding: 2rem;
         margin: 0 auto;
       }
       
       .inlineCode {
         color: #be00ff;
         font-size: 16px;
         white-space: pre-wrap;
       }
       
       .inlineCode::before,
       .inlineCode::after {
         content: '';
       }
       
       .hr {
         border: 0;
         border-top: 1px solid #eaeaea;
         margin: 1.5rem 0;
       }
       
       .table {
         display: block;
         overflow: auto;
         border-collapse: collapse;
         margin: 2.5rem 0;
       }
       
       .table th {
         font-weight: 600;
         padding: 0.75rem 0.875rem;
         border: 1px solid #eaeaea;
       }
       
       .table td {
         font-size: 0.875rem;
         padding: 0.75rem 0.875rem;
         border: 1px solid #eaeaea;
       }
      `}</style>
            </div>



         </Layout>
      )
   }
}

// `getStaticProps`, and similar Next.js methods like `getStaticPaths` and `getServerSideProps`
// only run in Node.js. Check the terminal to see the environment variables
export async function getStaticProps() {
   // Using the variables below in the browser will return `undefined`. Next.js doesn't
   // expose environment variables unless they start with `NEXT_PUBLIC_`
   console.log('[Node.js only] ENV_VARIABLE:', process.env.ENV_VARIABLE)
   console.log('[Node.js only] SERVER_URLE:', process.env.SERVER_URL)
   console.log('[Node.js only] ENV_LOCAL_VARIABLE:', process.env.ENV_LOCAL_VARIABLE)
   console.log('customKey', process.env.customKey) //-- this is mention in   next.config.js
   
   
   
   console.log(
      '[Node.js only] ENV_LOCAL_VARIABLE:',
      process.env.ENV_LOCAL_VARIABLE
   )

   return { props: {} }
}

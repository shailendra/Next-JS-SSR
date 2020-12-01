import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
   render() {
      return (
         <Html>
            <Head />
            <body>
               <script src="/assets/js/jquery-3.4.1.js" ></script>
               <script src="/assets/js/bootstrap.bundle.min.js" ></script>
               <script src="/assets/js/jquery.slimmenu.min.js" ></script>
               <script src="/assets/js/magnific-popup.js" ></script>
               <script src="/assets/js/main.js" ></script>
               <Main />
               <NextScript />
            </body>
         </Html>
      )
   }
}
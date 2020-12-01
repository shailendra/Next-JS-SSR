import Layout from '../components/Layout'
import React from 'react';
import $ from 'jquery';
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default class JSX extends React.Component {
   constructor(props) {
      super(props);
   }
   componentDidMount() {
      $(".newHeader").css({ color: "#ff0000" });
   }
   render() {
      return (
         <Layout>
            <h1 className="newHeader">ReactJS JSX</h1>
            <br />
            <div>
               <h2>Check Code in jsx.js file</h2>
            </div>
            <style jsx>{`
               .hello {
                  font: 15px Helvetica, Arial, sans-serif;
                  background: #eee;
                  padding: 100px;
                  text-align: center;
                  transition: 100ms ease-in background;
               }
               .hello:hover {
                  background: #ccc;
               }
               `}</style>
            {/* -------- Jquery data() --------------- */}
            {/* <div key={index} className="sect_li" data-obj={JSON.stringify(obj)}>
            </div> */}


            {/*--------- ADD CLASS NAME -------- */}
            {/* <div className={'col-3 cl_card_hld'}></div> */}
            {/* <section className="cl_card_hld cl_card_lt col-3"></section> */}
            {/* <div className={['Class1', styles.foo].join(" ")}></div> */}

            {/*--------- ANCHOR TAG -------- */}
            {/* <Link href="/"><a className="primary_btn">Explore</a></Link> */}

            {/*--------- IMG TAG -------- */}
            {/* <img src={'/assets/images/collection-banners/bath/luxury.jpg'} alt="" /> */}

            {/*--------- If Else CONDITION In JSX -------- */}
            {/* <li key={index}>
               {(() => {
                  if (obj.link && obj.link != "") {
                     return (<Link href="/about"><a>About Us</a></Link>)
                  } else {
                     return (<Link href="/about"><a>About Us</a></Link>)
                  }
               })()
               }
            </li> */}


            {/*--------- ADD HTML DATA IN TAGS,   $(".nav").html("<span>about</span>") -------- */}
            {/* <p dangerouslySetInnerHTML={{ __html: data.title }} /> */}



            {/*--------- LOOP ON ARRAY AND ADD DATA -------- */}
            {/* {
               this.props.dataArray.map((data, index) => (
                  <div key={index} >about</div>
               ))
            } */}
         </Layout>
      )
   }
}

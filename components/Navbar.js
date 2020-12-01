import Link from 'next/link';
import { withRouter } from 'next/router'

import Head from 'next/head'
import React, { Component, useState, useEffect } from "react";


class Navbar extends React.Component {
   constructor(props) {
      super(props);
   }
   componentDidMount() {
      $(".newHeader").css({ color: "#ff0000" });
   }
   render() {
      const pathname = this.props.router.pathname;
      return (
         <header>
            
            <Head>
               <title>My page title</title>
               <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="nav">
               <ul className="slimmenu">
                  <li><Link href="/">
                     <a className={pathname == "/" ? "active" : ""}>Home</a>
                  </Link></li>
                  <li><Link href="/getStaticProps">
                     <a className={pathname == "/getStaticProps" ? "active" : ""}>GetStaticProps</a>
                  </Link></li>
                  <li><Link href="/getStaticProps-re-generate">
                     <a className={pathname == "/getStaticProps-re-generate" ? "active" : ""}>GetStaticProps re-generate</a>
                  </Link></li>
                  <li><Link href="/post/10">
                     <a className={pathname == "/post/10" ? "active" : ""}>Dynamic Routing One level</a>
                  </Link></li>
                  <li><Link href="/post/year/month/day">
                     <a className={pathname == "/post/year/month/day" ? "active" : ""}>Dynamic Routing Multiple level</a>
                  </Link></li>
                  <li><Link href="/server-side-rendering">
                     <a className={pathname == "/server-side-rendering" ? "active" : ""}>SSR</a>
                  </Link></li>
                  <li><Link href="/slick-carousel">
                     <a className={pathname == "/slick-carousel" ? "active" : ""}>Slick Carousel</a>
                  </Link></li>
                  <li><Link href="/jquery">
                     <a className={pathname == "/jquery" ? "active" : ""}>jQuery</a>
                  </Link></li>
                  <li><Link href="/read-local-file">
                     <a className={pathname == "/read-local-file" ? "active" : ""}>Read Local File</a>
                  </Link></li>
                  <li><Link href="/images">
                     <a className={pathname == "/images" ? "active" : ""}>Image Component and Image Optimization</a>
                  </Link></li>
                  <li><Link href="/jsx">
                     <a className={pathname == "/jsx" ? "active" : ""}>ReactJS JSX</a>
                  </Link></li>
                  <li><Link href="/environment-variables">
                     <a className={pathname == "/environment-variables" ? "active" : ""}>Environment Variables</a>
                  </Link></li>
                  <li><Link href="/router">
                     <a className={pathname == "/router" ? "active" : ""}>Router</a>
                  </Link></li>
                  <li><Link href="/form">
                     <a className={pathname == "/form" ? "active" : ""}>Fetch and Form</a>
                  </Link></li>
                  <li><Link href="/head">
                     <a className={pathname == "/head" ? "active" : ""}>Head</a>
                  </Link></li>
               </ul>
            </div>
         </header>
      )
   }
}
export default withRouter(Navbar)

import React, { Component, useState, useEffect } from "react";
import Navbar from '../components/Navbar'
import Head from 'next/head'
import SEO from '../next-seo.config';

export default class Layout extends React.Component {
    constructor(props) {
       super(props)
    }
    render() {
       let seoObj = {};
       if(this.props.json && this.props.json.SEO){
           seoObj = this.props.json.SEO;           
       }
       return (
          <div id="wrapper">
             <Head>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
                {/* <meta name="language" content="English" /> */}
                
                <link rel="ishortcut icon" href="/assets/images/favicon.png" />
                <title>{seoObj.title?seoObj.title:SEO.title}</title>
                <meta name="title" content={seoObj.title?seoObj.title:SEO.title} />
                <meta name="description" content={seoObj.description?seoObj.description:SEO.description} />
                <meta name="keywords" content={seoObj.keywords?seoObj.keywords:SEO.keywords} />
 
                <meta property="og:type" content={seoObj.type?seoObj.type:SEO.type} />
                <meta property="og:title" content={seoObj.title?seoObj.title:SEO.title} />
                <meta property="og:url" content={seoObj.url?seoObj.url:SEO.url} />
                <meta property="og:image" content={seoObj.image?seoObj.image:SEO.image} />
                <meta property="og:description" content={seoObj.description?seoObj.description:SEO.description} />
 
             </Head>
             <Navbar json={this.props.json} />
             {this.props.children}
          </div>
       )
    }
 
 }
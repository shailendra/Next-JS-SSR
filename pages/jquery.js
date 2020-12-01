import Layout from '../components/Layout'
import React from 'react';
/* import $ from 'jquery'; */
import { useRouter } from 'next/router'

export default class Jquery extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    $(".newHeader").css({color:"#ff0000"});  
  }
  render() {
    return (
      <Layout>
        <h1 className="newHeader">jQuery</h1>
        <h2>{this.props.company}</h2>
        <br />
      </Layout>
    )
  }
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getServerSideProps(context) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library

  const res = await fetch('http://127.0.0.1:5500/post.json')
  const posts = await res.json();
  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: posts
  }
}
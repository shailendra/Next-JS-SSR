import Layout from '../components/Layout'
import React from 'react';
/* import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import("react-owl-carousel"), {
    ssr: false,
    }); */
import Slider from "react-slick";

export default function ReactSlick(prop) {
  // https://react-slick.neostack.com/
  // https://github.com/akiran/react-slick
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Layout>
      <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      <h1>Slick Corousel</h1>
      <br />
      <Slider className="slickParent" {...settings}>
        {prop.slick.map((obj, index)=>(
          <div key={index}>
            <h3>1 {obj.country}</h3>
          </div>
          ))}
      </Slider>
    </Layout>
  )
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
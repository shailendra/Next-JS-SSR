
import fs from 'fs';
import path from 'path';
import Layout from '../components/Layout'
import React from 'react';

export default class ReadLoacalFile extends React.Component {
  //
  // https://nextjs.org/docs/basic-features/data-fetching#reading-files-use-processcwd
  //
  constructor(props){
    super(props);
  }
  componentDidMount() {  
  }
  render() {
    return (
      <Layout>
        <h1 className="newHeader"><a href="https://nextjs.org/docs/basic-features/data-fetching#reading-files-use-processcwd" target="_blank">Read Local JSON File</a></h1>
        <br />
        <p>{this.props.disc}</p>
      </Layout>
    )
  }
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getServerSideProps(context) {
  // process.cwd() which gives you the directory where Next.js is being executed.
  const postsDirectory = path.join(process.cwd(), 'fake-json')
  const filePath = path.join(postsDirectory, "post.json")
  const fileContents = fs.readFileSync(filePath, 'utf8')

  const filenameArray = fs.readdirSync(postsDirectory); //--- get all file name from given directory in array

  const posts =JSON.parse(fileContents);
  return {
    props: posts
  }
}
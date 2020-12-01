import Layout from '../components/Layout'
import Image from 'next/image'

export default function GetStaticProps(prop) {
	//https://nextjs.org/docs/basic-features/image-optimization
	//https://nextjs.org/docs/api-reference/next/image#layout

	return (
		<Layout>
			<h1><a href="https://nextjs.org/docs/basic-features/image-optimization" target="_blank">Image Component and Image Optimization</a></h1>

			<br />
			<p className="description">{prop.title}</p>
			{/* <img src="/_next/image?url=/assets/images/img.jpg&w=1080&q=90"></img> */}

			{/* <picture>
				<source media="(max-width:640px)" srcSet={'/_next/image?url=/assets/images/img.jpg&w=640&q=90'} type="image/jpg" />
				<img src={'/_next/image?url=/assets/images/img.jpg&w=1080&q=90'} alt="" />
			</picture> */}

			<h1>Image Component With Layout Fixed</h1>
			<Image
				alt="Mountains"
				src="/assets/images/react-nextjs-blue.jpg"
				layout="fixed"
				width={700}
				height={475}
			/>


			<h1>Image Component With Layout Intrinsic</h1>
			<Image
				alt="Mountains"
				src="/assets/images/react-nextjs-yellow.jpg"
				layout="intrinsic"
				width={700}
				height={475}
			/>

			<h1>Image Component With Layout Responsive</h1>
			<Image
				alt="Mountains"
				src="/assets/images/react-nextjs-green.jpg"
				layout="responsive"
				width={700}
				height={475}
			/>

			<h1>Image Component With Layout Fill / Bakground Fill</h1>
			<div style={{ position: 'relative', width: '300px', height: '500px' }}>
				<Image
					alt="Mountains"
					src="/assets/images/react-nextjs-blue.jpg"
					layout="fill"
					style={{ objectFit: 'cover' }}
				/>
			</div>
			<div style={{ position: 'relative', width: '300px', height: '500px' }}>
				<Image
					alt="Mountains"
					src="/assets/images/react-nextjs-blue.jpg"
					layout="fill"
					style={{ objectFit: 'contain' }}
				/>
			</div>
			<div style={{ position: 'relative', width: '300px', height: '500px' }}>
				<Image
					alt="Mountains"
					src="/assets/images/react-nextjs-green.jpg"
					layout="fill"
					objectFit="none"
					quality={100}
				/>
			</div>
			<div style={{ position: 'relative', width: '600px', height: '500px' }}>
				<Image
					alt="Mountains"
					src="/assets/images/react-nextjs-blue.jpg"
					layout="responsive"
					width={1920}
					height={1021}

				/>
			</div>
		</Layout>
	)
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps(context) {
	// Call an external API endpoint to get posts.
	// You can use any data fetching library

	const res = await fetch('http://127.0.0.1:5500/post.json')
	const posts = await res.json();
	// By returning { props: posts }, the Blog component
	// will receive `posts` as a prop at build time
	return {
		props: posts,
		// Next.js will attempt to re-generate the page:
		// - When a request comes in
		// - At most once every 5 second
		revalidate: 5
	}
}
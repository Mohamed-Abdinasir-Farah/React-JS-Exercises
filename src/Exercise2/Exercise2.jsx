const Header = () => {
  return <h1>Blog Header</h1>;
}

const Footer = () => {
  return <h1>Blog Footer</h1>;
}

const Post = () => {
  return (
    <div>
      <h2>Post Title</h2>
      <p>Post content goes here...</p>
    </div>
  )
}

const Blog = () => {
  return (
    <div>
      <Header />
      <main>
        <Post />
      </main>
      <Footer />
    </div>
  )   
}

export default Blog;
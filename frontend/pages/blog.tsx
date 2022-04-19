// blog.js
import matter from "gray-matter"
import Link from "next/link"

const Blog = (props) => {
    console.log(props)
    return (
        <>
            <p>ブログ一覧ページ</p> 
            {props.blogs.map((blogs, index) => (
                <div  key={index}>
                    <h2>{blogs.frontmatter.title}</h2>
                    <Link href={`/blog/${blogs.slug}`}><a>Read More</a></Link>
                </div>
            ))}
        </>
         
    )
}

export default Blog

export async function getStaticProps() { 
    const blogs = ((context) => {
        const keys = context.keys()  
        const values = keys.map(context) 
        const data = keys.map((key, index) => {
            let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
            const value = values[index]
            const document = matter(value.default)
            return {
                frontmatter: document.data,
                slug: slug
            }
        })
        return data
    })(require.context('../content', true, /\.md$/))

    const sortingArticles = blogs.sort((a, b) => {
        return b.frontmatter.id - a.frontmatter.id
    })

    return {            
        props: {
            blogs: JSON.parse(JSON.stringify(blogs))
        },      
    }                   
} 
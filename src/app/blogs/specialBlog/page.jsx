import Link from "next/link"
import React from "react"

const SpecialBlogPage = () => {
    return (
        <div>
            {blogs.map((blog) => (
                <div className="flex flex-col p-4 bg-white rounded-lg shadow-sm" key={blog.slug}>
                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl font-semibold text-gray-800">{blog.title}</h2>
                        <p className="text-gray-600">{blog.description}</p>
                    </div>
                    <Link
                        href={`/blogs/specialBlog/${blog.slug}`}
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 max-w-xs"
                    >
                        Read More
                    </Link>
                </div>
            ))}
        </div>
    )
}

const blogs = [
    {
        slug: "introduction-to-nextjs",
        title: "Introduction to Next.js",
        description:
            "Learn the basics of Next.js, a popular React framework for building server-side rendering and static web applications.",
    },
    {
        slug: "understanding-react-hooks",
        title: "Understanding React Hooks",
        description:
            "A deep dive into React Hooks, a feature that allows you to use state and other React features without writing a class.",
    },
    {
        slug: "building-restful-apis",
        title: "Building RESTful APIs",
        description: "A comprehensive guide on how to design and build RESTful APIs using Node.js and Express.",
    },
    {
        slug: "javascript-es6-features",
        title: "JavaScript ES6 Features",
        description:
            "An overview of the new features introduced in ECMAScript 6 (ES6) and how to use them in your JavaScript projects.",
    },
    {
        slug: "css-grid-vs-flexbox",
        title: "CSS Grid vs Flexbox",
        description:
            "A comparison between CSS Grid and Flexbox layout models, and when to use each for building responsive web layouts.",
    },
]

export default SpecialBlogPage

import React from "react"

const oneSBpage = ({ params }) => {
    const { title, description } = blogs.find((blog) => blog.slug === params.sp)
    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
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
export default oneSBpage

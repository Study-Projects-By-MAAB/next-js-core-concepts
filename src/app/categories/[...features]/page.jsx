import React from "react"

const CategoriesDetailsPage = ({ params }) => {
    console.log(params)
    const l = params?.features?.length
    if (params?.features?.length) {
        return <div>{params?.features[l - 1]}</div>
    }
    return <div className="h-screen">Categories Details Page</div>
}

export default CategoriesDetailsPage

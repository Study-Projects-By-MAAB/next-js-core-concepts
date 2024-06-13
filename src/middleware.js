import { NextResponse } from "next/server"

const user = true

const cookie = "next-cookie"

export const middleware = (request) => {
    const cookies = request.cookies.get("token")
    if (!cookies || cookie !== cookies.value) {
        return NextResponse.redirect(new URL("/login", request.url))
    }
    return NextResponse.next()
}

export const config = {
    matcher: "/dashboard",
}

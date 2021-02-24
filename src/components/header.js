import React from "react"
import Link from "gatsby-link";

export default function Header() {
    return <div>
        <h1>Web Factor</h1>
        <Link to="/">Home</Link>
        <Link to="/references/">References</Link>
    </div>
}
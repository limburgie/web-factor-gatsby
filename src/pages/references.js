import * as React from "react"
import Header from "../components/header";
import {graphql} from "gatsby";

export default function References({data}) {
    return (
        <div>
            <Header/>
            <div>References here</div>
            <ul>
                {data.allDatoCmsReference.edges.map(({ node }, index) => (
                    <li>{node.name}</li>
                ))}
            </ul>
        </div>
    )
}

export const query = graphql`
    query {
        allDatoCmsReference {
            edges {
				node {
				    id
					name
				}
			}
        }
    }
`
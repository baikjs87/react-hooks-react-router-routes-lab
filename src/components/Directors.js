import React from "react"
import { directors } from "../data"

function Directors() {
	return (
    <div>
			<h1>Directors Page</h1>
			{directors.map((director) => (
				<>
					<h3>Name: {director.name}</h3>
					<p>Movies:</p>
					<ul>
						{director.movies.map((movie) => (
							<li>{movie}</li>
						))}
					</ul>
				</>
			))}
		</div>
	)
}

export default Directors

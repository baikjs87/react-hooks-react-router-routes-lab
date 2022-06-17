import React from "react"
import { actors, movies } from "../data"

function Actors() {
	return (
		<div>
			<h1>Actors Page</h1>
			{actors.map((actor) => (
				<>
					<h3>Name: {actor.name}</h3>
					<p>Movies:</p>
					<ul>
						{actor.movies.map((movie) => (
							<li>{movie}</li>
						))}
					</ul>
				</>
			))}
		</div>
	)
}

export default Actors

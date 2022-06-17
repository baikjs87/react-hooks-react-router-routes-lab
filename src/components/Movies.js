import React from "react"
import { movies } from "../data"

function Movies() {
	return (
		<div>
			<h1>Movies Page</h1>
			{movies.map((movie) => (
				<>
					<h3>Name: {movie.title}</h3>
					<p>Time: {movie.time}</p>
					<p>Genres:</p>
					<ul>
						{movie.genres.map((genre) => (
							<li>{genre}</li>
						))}
					</ul>
				</>
			))}
		</div>
	)
}

export default Movies

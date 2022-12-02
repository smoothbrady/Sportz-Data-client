import React from "react"
import image from "./img/sportsCollage.png"

const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<>
			<div style={{ backgroundImage: `url(${image})`, height: '40rem'}}></div>
		</>
	)
}

export default Home

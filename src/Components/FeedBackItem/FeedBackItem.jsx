import { useState } from "react"

const FeedBackItem = () => { 
	const [rating, setRating] = useState(0)
	const [text, setText] = useState('This is example of Feedback')
	
	const handleClick = () => {
		setRating((prev) => prev + 1)
	}
	// console.log(count)
	// const [] = useState()
	

	return <div className="card" >
		<div className="num-display" >{rating}</div>
		<div className="text-display">{text}</div>
		<button onClick={handleClick}>Click...</button>
	</div>
}
export default FeedBackItem
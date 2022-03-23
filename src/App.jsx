// import React, { createElement } from "react";

// const App = () => {
// 	// return (	<>
// 	// 	<h1>Hello</h1>
// 	// 	<p>ASDASDASD</p>
// 	// </>)
// 	return ( createElement('div', {className: 'container'}, React.createElement('h1', {}, 'Hello')))
// }

// export default App


// next day


import React from "react";
import Header from "./Components/Header/Header";
import FeedBackItem from "./Components/FeedBackItem/FeedBackItem";

const App = () => {
	return (
	<>
			<Header />
			<FeedBackItem/>

	</>	)
}



export default App
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App	from './App.jsx'
import './global.css'

// ReactDOM.render(<h1>Hello</h1>, document.getElementById('root'))

ReactDOM.render(
	<StrictMode><App/></StrictMode>
, document.getElementById('root'))

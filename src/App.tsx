import { useState } from 'react';
import globeIcon from './assets/globe.svg';
import './App.css';

function App() {
	return (
		<>
			<header className='header'>
				<img className='main-logo' src={globeIcon} alt='Globe Icon' />
				<h1>List of Countries</h1>
			</header>
		</>
	);
}

export default App;

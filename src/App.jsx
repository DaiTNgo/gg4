import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactGA from 'react-ga';
ReactGA.initialize('G-BW68E5EZ6R');
ReactGA.pageview(window.location.pathname + window.location.search);
function App() {
	const [count, setCount] = useState(0);

	return (
		<div className='App'>
			{/* <noscript>
				<iframe
					src='https://www.googletagmanager.com/ns.html?id=GTM-PDQ4WQ7'
					height='0'
					width='0'
					style='display: none; visibility: hidden'></iframe>
			</noscript> */}
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>Hello Vite + React!</p>
				<p>
					<button type='button' onClick={() => setCount((count) => count + 1)}>
						count is: {count}
					</button>
				</p>
				<p>
					Edit <code>App.jsx</code> and save to test HMR updates.
				</p>
				<p>
					<a
						className='App-link'
						href='https://reactjs.org'
						target='_blank'
						rel='noopener noreferrer'>
						Learn React
					</a>
					{' | '}
					<a
						className='App-link'
						href='https://vitejs.dev/guide/features.html'
						target='_blank'
						rel='noopener noreferrer'>
						Vite Docs
					</a>
				</p>
			</header>
		</div>
	);
}

export default App;

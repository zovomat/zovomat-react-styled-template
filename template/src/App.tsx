import React from 'react';
import logo from './logo.svg';
import clsx from 'clsx';

function App() {
	return (
		<div className={clsx('container', 'flex', 'place-content-center')}>
			<header className="">
				<img src={logo} className="App-logo" alt="logo" />
				<p className="font-serif">
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className="font-mono text-red-700"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;

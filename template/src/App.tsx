import React from 'react';
import logo from './logo.svg';
import styled from 'styled-components';

const Link = styled.a``;

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<Link
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</Link>
			</header>
		</div>
	);
}

export default App;

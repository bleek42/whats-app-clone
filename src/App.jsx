import React, { Fragment } from 'react';

import { useLocalStorage } from './hooks/useLocalStorage';

import Login from './components/Login';
import DashBoard from './components/DashBoard';

function App() {
	const [id, setId] = useLocalStorage('id');

	return id ? <DashBoard id={id} /> : <Login onIdSubmit={setId} />;
}

export default App;

import { useState } from 'react';
import './App.css';
import Routers from './Routers';
import { UserContext } from './context/UserContext';
import logo from './logo.svg';

function App() {
	const [user, setUser] = useState();
  return (
	<UserContext.Provider value = {{
		user, setUser
	}}> 
	
		<Routers />
	</UserContext.Provider>
  );
}

export default App;

import { useState } from 'react';
import './App.css';
import Routers from './Routers';
import { UserContext } from './context/UserContext';

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

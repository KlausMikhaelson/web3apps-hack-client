import React from "react";

const Header = () => {
	return(
		<>
			<div className="hidden md:flex bg-yellow-500 p-3">
				this is header
			</div>
			<div className="flex md:hidden bg-blue-400 p-3">
				this is small header
			</div>
		</>
	)
};

export default Header;

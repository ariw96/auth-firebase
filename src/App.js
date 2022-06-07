import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import UserData from "./components/UserData";
import { AuthProvider } from "./components/AuthContext";

function App() {
	return (
		<>
			<AuthProvider>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/login/signup" element={<Signup />} />
					<Route path="/userdata" element={<UserData />} />
				</Routes>
			</AuthProvider>
		</>
	);
}
export default App;

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthContext";

function Home() {
	const { logout, setUser } = useContext(AuthContext);
	const handleLogout = async () => {
		try {
			await logout;
			setUser({});
			console.log("logged out");
		} catch (e) {
			console.log(e.message);
		}
	};

	return (
		<div>
			<div
				className=" text-5xl px-3 flex align-items-center
            my-10 cursor-pointer"
			>
				<Link to="/login">
					<ion-icon name="log-in-outline"></ion-icon>
				</Link>
				<ion-icon
					onClick={() => window.location.reload()}
					name="reload-outline"
				></ion-icon>
				<Link to="/userdata">
					<ion-icon name="bar-chart-outline"></ion-icon>
				</Link>

				<ion-icon onClick={handleLogout} name="log-out-outline"></ion-icon>
			</div>
		</div>
	);
}

export default Home;

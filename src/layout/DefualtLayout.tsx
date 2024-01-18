import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const DefualtLayout = () => {
	return (
		<>
			<Navbar />
			<main >
				<Outlet />
			</main>
			<Footer />
		</>
	)
}

export default DefualtLayout
import { lazy } from "react"
// import ThankYouPage from "../pages/ThankYouPage.jsx"


const Home = lazy(() => import('../pages/Home.jsx'))
const Shop = lazy(() => import('../pages/Shop.js'))
const AboutUs = lazy(() => import('../pages/Home.jsx'))


const coreRouter = [
	{
		path: '/',
		title: 'Home',
		component: Home,
		prot: false,
	},
	{
		path: '/shop',
		title: 'shop',
		component: Shop,
		prot: false,
	},
	{
		path: '/about-us',
		title: 'about us',
		component: AboutUs,
		prot: false,
	},
]

const router = [...coreRouter];
export default router;
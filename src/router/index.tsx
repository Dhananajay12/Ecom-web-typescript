import { lazy } from "react"
// import ThankYouPage from "../pages/ThankYouPage.jsx"


const Home = lazy(() => import('../pages/Home'))
const Shop = lazy(() => import('../pages/Shop'))
const AboutUs = lazy(() => import('../pages/Home'))
const Cart = lazy(() => import('../pages/Cart'))



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
		path: '/cart',
		title: 'cart',
		component: Cart,
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
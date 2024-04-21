import { lazy } from "react"
// import ThankYouPage from "../pages/ThankYouPage.jsx"


const Home = lazy(() => import('../pages/Home'))
const Shop = lazy(() => import('../pages/Shop'))
const AboutUs = lazy(() => import('../pages/AboutUs'))
const ContactUs = lazy(() => import('../pages/ContactUs'))
const Cart = lazy(() => import('../pages/Cart'))
const Checkout = lazy(() => import('../pages/Checkout'))
const SelectAddress = lazy(() => import('../pages/SelectAddress'))
const SingleProductPage = lazy(() => import('../pages/SingleProduct'))
const Blog = lazy(() => import('../pages/Blog'))
const Login = lazy(() => import('../pages/Login'))






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
		path: '/singleproduct/:id',
		title: 'singleProduct',
		component: SingleProductPage,
		prot: false,
	},
	{
		path: '/checkout',
		title: 'checkout',
		component: Checkout,
		prot: false,
	},
	{
		path: '/select-address',
		title: 'select-address',
		component: SelectAddress,
		prot: false,
	},
	{
		path: '/about-us',
		title: 'About-Us',
		component: AboutUs,
		prot: false,
	},
	{
		path: '/contact-us',
		title: 'Contact-Us',
		component: ContactUs,
		prot: false,
	},
	{
		path: '/blog',
		title: 'Blog',
		component: Blog,
		prot: false,
	},
	{
		path: '/login',
		title: 'Login',
		component: Login,
		prot: false,
	},
]

const router = [...coreRouter];
export default router;
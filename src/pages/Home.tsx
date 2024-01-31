import Banner from '../components/homepage/Banner'
import Category from '../components/homepage/Category'
import OtherHome from '../components/homepage/OtherHome'
import SliderHome from '../components/homepage/SliderHome'

const Home = () => {
	return (
		<>
			<Banner />
			<div className='px-3 md:px-0'>
				<Category />
				<SliderHome />
				<OtherHome />
			</div>
		</>
	)
}

export default Home
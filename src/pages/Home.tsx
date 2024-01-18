import Banner from '../components/homepage/Banner'
import Category from '../components/homepage/Category'
import OtherHome from '../components/homepage/OtherHome'
import SliderHome from '../components/homepage/SliderHome'

const Home = () => {
	return (
		<div>
			<Banner />
			<Category />
			<SliderHome />
			<OtherHome />
		</div>
	)
}

export default Home
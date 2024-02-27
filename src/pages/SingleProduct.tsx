import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { product } from '../model/productModel';
import { productData } from '../data/productData';

const SingleProduct = () => {

	const { id } = useParams()
	const [product, setProduct] = useState<product>();

	useEffect(() => {
		const data = productData.find((val: product) => val.id === Number(id))
		if (data) setProduct(data);
	}, [id])


	return (
		<div className='container mx-auto'>
			<div className=' grid grid-cols-2 mt-5'>

				<div className='mx-5 mt-5'>
					<img src={product?.img} style={{ minWidth: '100%' }}></img>
				</div>
				<div className='mx-5 mt-5'>
					<p className='font mt-5'>{product?.name}</p>
					<p className='mt-5 '>{product?.description}</p>
				</div>

			</div>
		</div>
	)
}

export default SingleProduct
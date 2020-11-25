import React from 'react';
import { shoeData } from '../data/shoeData';

const Home = () => {
	const gender = 'female';
	const minPrice = 50;
	const maxPrice = 100;
	console.log(
		Object.keys(shoeData).filter(
			(productId) =>
				shoeData[productId].gender === gender &&
				shoeData[productId].price >= minPrice &&
				shoeData[productId].price <= maxPrice
		)
	);
	return (
		<div>
			<>Home</>
		</div>
	);
};

export default Home;

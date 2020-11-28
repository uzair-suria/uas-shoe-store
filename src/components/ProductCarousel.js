import { Typography } from '@material-ui/core';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { shoeData } from '../data/shoeData';
import CarouselCard from './CarouselCard';

const ProductCarousel = () => {
	console.log(
		Object.keys(shoeData).filter((productId) => shoeData[productId].featured)
	);
	const featuredProductList = Object.keys(shoeData).filter(
		(productId) => shoeData[productId].featured
	);
	return (
		<div style={{ margin: '0 auto' }}>
			<Typography variant="h5" align="center" gutterBottom={true}>
				Featured Products
			</Typography>
			<Carousel animation="slide" interval={3000} timeout={1000}>
				{featuredProductList.map((item, i) => (
					<CarouselCard productId={item} key={i} />
				))}
			</Carousel>
		</div>
	);
};

export default ProductCarousel;

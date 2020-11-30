import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { shoeData } from '../data/shoeData';
import ProductCard from './ProductCard';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		display: 'flex',
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
}));

// function shuffle(array) {
// 	var currentIndex = array.length,
// 		temporaryValue,
// 		randomIndex;

// 	// While there remain elements to shuffle...
// 	while (0 !== currentIndex) {
// 		// Pick a remaining element...
// 		randomIndex = Math.floor(Math.random() * currentIndex);
// 		currentIndex -= 1;

// 		// And swap it with the current element.
// 		temporaryValue = array[currentIndex];
// 		array[currentIndex] = array[randomIndex];
// 		array[randomIndex] = temporaryValue;
// 	}

// 	return array;
// }

const ProductList = ({ productFilter }) => {
	const classes = useStyles();
	const productIdList = productFilter
		? Object.keys(shoeData).filter(
				(productId) => shoeData[productId].gender === productFilter
		  )
		: Object.keys(shoeData);

	// console.log(JSON.stringify(shuffledData));
	return (
		<div>
			<div className={classes.root}>
				<Grid container spacing={3} alignItems="stretch" justify="space-around">
					{productIdList.map((Id, i) => (
						<Grid item xs={12} md={6} lg={4} key={i}>
							<ProductCard productId={Id} />
						</Grid>
					))}
				</Grid>
			</div>
			<Outlet />
		</div>
	);
};

export default ProductList;

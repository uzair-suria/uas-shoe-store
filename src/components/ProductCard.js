import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	makeStyles,
	Typography,
} from '@material-ui/core';
import React from 'react';
import { shoeData } from '../data/shoeData';

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
	},
	price: {
		marginTop: 20,
	},
});

const ProductCard = ({ productId }) => {
	const shoe = shoeData[productId];

	const classes = useStyles();
	return (
		<div>
			<Card className={classes.root}>
				<CardActionArea>
					<CardMedia
						component="img"
						alt={productId}
						height="240"
						src={
							require(`../images/${shoeData[productId].gender}/${productId}/01.jpg`)
								.default
						}
						title={shoe.tagline}
					/>
					<CardContent>
						<Typography
							gutterBottom
							variant="h6"
							component="h2"
							color="textPrimary"
						>
							{shoe.name}
						</Typography>
						<Typography variant="body1" color="textSecondary" component="p">
							{shoe.gender === 'male' ? `Men's` : `Women's`} Shoe
						</Typography>
						<Typography variant="body2" color="textSecondary" component="p">
							{shoe.tagline}
						</Typography>
						<Typography align="right" className={classes.price}>
							${shoe.price}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</div>
	);
};

export default ProductCard;

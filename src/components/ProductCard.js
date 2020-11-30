import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	makeStyles,
	Typography,
} from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { shoeData } from '../data/shoeData';

const useStyles = makeStyles({
	root: {
		maxWidth: 400,
		margin: '0 auto',
	},
	price: {
		marginTop: 20,
	},
});

const ProductCard = ({ productId }) => {
	const shoe = shoeData[productId];

	const classes = useStyles();
	return (
		<Link to={`/productList/${productId}`} style={{ textDecoration: 'none' }}>
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
							variant="button"
							component="h3"
							color="textPrimary"
						>
							{shoe.name}
						</Typography>
						<Typography variant="body2" color="textSecondary" component="p">
							{shoe.gender === 'male' ? `Men's` : `Women's`} Shoe
						</Typography>
						{/* <Typography variant="caption" color="textSecondary">
						{shoe.tagline}
					</Typography> */}
						<Typography align="right" className={classes.price}>
							${shoe.price}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</Link>
	);
};

export default ProductCard;

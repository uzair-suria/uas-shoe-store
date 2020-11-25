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
});

const ProductCard = ({ productID }) => {
	const shoe = {
		name: 'Nike Air Force 1 GTX',
		gender: 'male',
		tagline: 'LEGENDARY STYLE, REFINED FOR WINTER',
		description: `The radiance lives on in the Nike Air Force 1 ’07 GTX, the b-ball OG that puts a fresh spin on what you know best: crisp leather, bold colors and the perfect amount of flash to make you shine. This time it's clad in GORE-TEX technology.`,
		price: 150,
		images: ['01', '02', '03', '04', '05', '06', '07', '08', '09'],
	};

	const classes = useStyles();
	return (
		<div>
			<Card className={classes.root}>
				<CardActionArea>
					<CardMedia
						component="img"
						alt={productID}
						height="240"
						src={
							require(`../images/${shoeData[productID].gender}/${productID}/01.jpg`)
								.default
						}
						title={shoe.tagline}
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							{shoe.name}
						</Typography>
						<Typography variant="body2" color="textSecondary" component="p">
							{shoe.description}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</div>
	);
};

export default ProductCard;

import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Divider,
	makeStyles,
	Typography,
} from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { shoeData } from '../data/shoeData';
import useWindowSize from '../hooks/useWindowSize';

const useStyles = makeStyles({
	root: {
		maxWidth: '80%',
		margin: '0 auto',
	},
	price: {
		marginTop: 20,
	},
	cardMedia: {},
});

const CarouselCard = ({ productId }) => {
	const shoe = shoeData[productId];
	const windowSize = useWindowSize();

	const classes = useStyles();
	return (
		<Link to={`/productList/${productId}`} style={{ textDecoration: 'none' }}>
			<Card className={classes.root}>
				<CardActionArea>
					<CardMedia
						component="img"
						alt={productId}
						height={windowSize.width ? windowSize.width * 0.45 : ''}
						src={
							require(`%PUBLIC_URL%/images/${shoeData[productId].gender}/${productId}/01.jpg`)
								.default
						}
						title={shoe.tagline}
						style={{
							overflow: 'hidden',
							margin: `-${100 / windowSize.width}px 0px 0px 0px`,
							borderBottom: '0px solid gray',
						}}
					/>
					<Divider />
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
		</Link>
	);
};

export default CarouselCard;

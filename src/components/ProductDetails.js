import {
	Divider,
	Grid,
	makeStyles,
	Paper,
	responsiveFontSizes,
	ThemeProvider,
	Typography,
	useTheme,
} from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router-dom';
import { shoeData } from '../data/shoeData';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
	description: {
		margin: '10px 0px',
	},
	image: {
		width: `95%`,
		marginLeft: '2.5%',
		marginTop: '10px',
		// height: '150px',
	},
}));

const ProductDetails = () => {
	const classes = useStyles();
	let { productId } = useParams();
	const theme = responsiveFontSizes(useTheme());

	return (
		<ThemeProvider theme={theme}>
			<div>
				<Typography variant="h4" component="h1" align="center" gutterBottom>
					Product Details
				</Typography>
				<div className={classes.root}>
					<Grid container spacing={2}>
						<Grid item xs={12} lg={4}>
							<Typography
								variant="h6"
								component="h4"
								align="left"
								color="textPrimary"
							>
								{shoeData[productId].name}
							</Typography>
							<Typography
								variant="caption"
								component="p"
								align="left"
								color="textSecondary"
							>
								{shoeData[productId].tagline}
							</Typography>
							<Typography
								variant="overline"
								component="p"
								align="right"
								color="textSecondary"
							>
								{shoeData[productId].gender === 'male' ? `Men's` : `Women's`}{' '}
								Shoe
							</Typography>
							<Divider />
							<Typography
								variant="button"
								component="h6"
								className={classes.description}
							>
								Description
							</Typography>
							<Typography
								variant="body1"
								component="p"
								align="justify"
								color="textPrimary"
								gutterBottom
							>
								{shoeData[productId].description}
							</Typography>
							<Divider />
							<Typography
								align="right"
								variant="button"
								component="p"
								style={{ marginTop: '20px' }}
							>
								Price
							</Typography>
							<Typography align="right" variant="button" component="p">
								${shoeData[productId].price}
							</Typography>
						</Grid>
						<Grid item xs={12} lg={8}>
							<Paper>
								<Grid container alignContent="space-around" alignItems="center">
									{shoeData[productId].images.map((i) => (
										<Grid item xs={12} md={6} key={i}>
											<img
												src={
													require(`../images/${shoeData[productId].gender}/${productId}/${i}.jpg`)
														.default
												}
												alt={`${shoeData[productId].name} view ${i}`}
												className={classes.image}
											/>
										</Grid>
									))}
								</Grid>
							</Paper>
						</Grid>
					</Grid>
				</div>
			</div>
		</ThemeProvider>
	);
};

export default ProductDetails;

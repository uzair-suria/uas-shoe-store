import {
	AppBar,
	// Button,
	CssBaseline,
	Divider,
	Drawer,
	Hidden,
	IconButton,
	List,
	ListItem,
	ListItemText,
	makeStyles,
	Toolbar,
	Tooltip,
	Typography,
	useTheme,
	Link as MuiLink,
} from '@material-ui/core';
import { red, teal } from '@material-ui/core/colors';
import MenuIcon from '@material-ui/icons/Menu';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import React, { useState } from 'react';
import {
	createMuiTheme,
	responsiveFontSizes,
	ThemeProvider,
} from '@material-ui/core/styles';
import ProductCarousel from './ProductCarousel';
import ProductList from './ProductList';
import { Link, Route, Routes } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import About from './About';
import Contact from './Contact';
import useWindowSize from '../hooks/useWindowSize';
import { GitHub } from '@material-ui/icons';

const drawerWidth = 240;

const darkTheme = responsiveFontSizes(
	createMuiTheme({
		palette: {
			type: 'dark',
			primary: { main: teal[500] },
			secondary: { main: red['A200'] },
		},
	})
);

const lightTheme = responsiveFontSizes(
	createMuiTheme({
		palette: {
			type: 'light',
			primary: { main: teal[500] },
			secondary: { main: red['A200'] },
		},
	})
);

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	appBarNav: {
		marginLeft: 'auto',
	},
	drawer: {
		[theme.breakpoints.up('sm')]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	toolbarTitle: {
		padding: 5,
	},
	appBar: {
		[theme.breakpoints.up('sm')]: {
			width: `calc(100% - ${drawerWidth}px)`,
			marginLeft: drawerWidth,
		},
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},
	// for content to be below appBar
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
	nestedList: {
		paddingLeft: theme.spacing(2),
	},
}));

const Home = (props) => {
	const { window } = props;
	const classes = useStyles();
	const theme = useTheme();
	const [mobileOpen, setMobileOpen] = useState(false);
	const [darkMode, setDarkMode] = useState(false);
	const [genderFilter, setGenderFilter] = useState(null);
	const windowSize = useWindowSize();

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<div>
			<div className={classes.toolbar}>
				<div className={classes.toolbarTitle}>
					<Link
						to="/"
						style={{ textDecoration: 'none' }}
						onClick={windowSize.width < 600 ? handleDrawerToggle : null}
					>
						<Typography variant="h5" color="textSecondary" align="center">
							Shoe Store
						</Typography>
						<Typography
							variant="caption"
							component="h6"
							color="textSecondary"
							align="right"
						>
							Built by Uzair Suria
						</Typography>
					</Link>
				</div>
			</div>
			<Divider />
			<List>
				<Link to="/productList" style={{ textDecoration: 'none' }}>
					<ListItem
						button
						onClick={() => {
							setGenderFilter(null);
							if (windowSize.width < 600) {
								handleDrawerToggle();
							}
						}}
					>
						<ListItemText
							primary={`All Products`}
							primaryTypographyProps={{
								variant: 'body1',
								color: 'textPrimary',
							}}
						/>
					</ListItem>
				</Link>
				<Link to="/productList" style={{ textDecoration: 'none' }}>
					<ListItem
						button
						onClick={() => {
							setGenderFilter('male');
							if (windowSize.width < 600) {
								handleDrawerToggle();
							}
						}}
					>
						<ListItemText
							primary={`Men's Shoes`}
							className={classes.nestedList}
							primaryTypographyProps={{
								variant: 'body2',
								color: 'textPrimary',
							}}
						/>
					</ListItem>
				</Link>
				<Link to="/productList" style={{ textDecoration: 'none' }}>
					<ListItem
						button
						onClick={() => {
							setGenderFilter('female');
							if (windowSize.width < 600) {
								handleDrawerToggle();
							}
						}}
					>
						<ListItemText
							primary={`Women's Shoes`}
							className={classes.nestedList}
							primaryTypographyProps={{
								variant: 'body2',
								color: 'textPrimary',
							}}
						/>
					</ListItem>
				</Link>
			</List>

			<Divider />

			<List>
				<Link to="/about" style={{ textDecoration: 'none' }}>
					<ListItem
						button
						onClick={() => {
							setGenderFilter(null);
							if (windowSize.width < 600) {
								handleDrawerToggle();
							}
						}}
					>
						<ListItemText
							primary={`About`}
							primaryTypographyProps={{
								variant: 'body1',
								color: 'textPrimary',
							}}
						/>
					</ListItem>
				</Link>
				<Link to="/contact" style={{ textDecoration: 'none' }}>
					<ListItem
						button
						onClick={() => {
							setGenderFilter(null);
							if (windowSize.width < 600) {
								handleDrawerToggle();
							}
						}}
					>
						<ListItemText
							primary={`Contact`}
							primaryTypographyProps={{
								variant: 'body1',
								color: 'textPrimary',
							}}
						/>
					</ListItem>
				</Link>
				<Divider />
				<Typography variant="caption" color="textSecondary">
					<div style={{ textAlign: 'center', marginTop: 20 }}>
						<MuiLink
							href="https://github.com/uzair-suria/uas-shoe-store"
							color="textPrimary"
						>
							<Tooltip title="View Project Repository">
								<GitHub fontSize="medium" />
							</Tooltip>
						</MuiLink>
					</div>
				</Typography>
			</List>
		</div>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
			<div className={classes.root}>
				<CssBaseline />
				<AppBar position="fixed" className={classes.appBar}>
					<Toolbar>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							edge="start"
							onClick={handleDrawerToggle}
							className={classes.menuButton}
						>
							<MenuIcon />
						</IconButton>
						<div className={classes.appBarNav}>
							<Tooltip title="Toggle light/dark theme">
								<IconButton
									color="inherit"
									aria-label="theme toggle"
									component="span"
									onClick={() => {
										setDarkMode(!darkMode);
									}}
								>
									{darkMode ? <BrightnessHighIcon /> : <Brightness4Icon />}
								</IconButton>
							</Tooltip>
						</div>
					</Toolbar>
				</AppBar>
				<nav className={classes.drawer} aria-label="mailbox folders">
					{/* Temporary drawer for small screens (smaller than 'xs') */}
					<Hidden smUp implementation="css">
						<Drawer
							container={container}
							variant="temporary"
							anchor={theme.direction === 'rtl' ? 'right' : 'left'}
							open={mobileOpen}
							onClose={handleDrawerToggle}
							classes={{ paper: classes.drawerPaper }}
							ModalProps={{ keepMounted: true }}
						>
							{drawer}
						</Drawer>
					</Hidden>

					{/* Permanent drawer for Large screens (greater than 'xs') */}
					<Hidden xsDown implementation="css">
						<Drawer
							classes={{
								paper: classes.drawerPaper,
							}}
							variant="permanent"
							open
						>
							{drawer}
						</Drawer>
					</Hidden>
				</nav>
				<main className={classes.content}>
					<div className={classes.toolbar} />
					<Routes>
						<Route path="/" element={<ProductCarousel />} />
						<Route
							path="/productList"
							element={<ProductList productFilter={genderFilter} />}
						/>
						<Route path="productList/:productId" element={<ProductDetails />} />
						{/* <Route path="/productDetails" element={<ProductDetails />}>
							
						</Route> */}
						<Route path="/about" element={<About />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</main>
			</div>
		</ThemeProvider>
	);
};

export default Home;

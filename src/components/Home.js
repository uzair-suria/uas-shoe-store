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
	ListItemIcon,
	ListItemText,
	makeStyles,
	Toolbar,
	Tooltip,
	Typography,
	useTheme,
} from '@material-ui/core';
import { green, purple } from '@material-ui/core/colors';
import InboxIcon from '@material-ui/icons/Inbox';
import MailIcon from '@material-ui/icons/Mail';
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

const drawerWidth = 240;

const darkTheme = responsiveFontSizes(
	createMuiTheme({
		palette: {
			type: 'dark',
			primary: { main: green[800] },
			secondary: { main: purple[800] },
		},
	})
);

const lightTheme = responsiveFontSizes(
	createMuiTheme({
		palette: {
			type: 'light',
			primary: { main: green[500] },
			secondary: { main: purple[500] },
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
}));

const Home = (props) => {
	const { window } = props;
	const classes = useStyles();
	const theme = useTheme();
	const [mobileOpen, setMobileOpen] = useState(false);
	const [darkMode, setDarkMode] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<div>
			<div className={classes.toolbar}>
				<div className={classes.toolbarTitle}>
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
				</div>
			</div>
			<Divider />
			<List>
				{['Inbox', 'Starred', 'Send Email', 'Drafts'].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon>
							{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
						</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
				{['All Mail', 'Trash', 'Spam'].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon>
							{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
						</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
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
							{/* <Tooltip title="View All Products">
								<Button color="inherit" href="/ProductList">
									Products
								</Button>
							</Tooltip>
							<Tooltip title="About us">
								<Button color="inherit" href="/About">
									About
								</Button>
							</Tooltip>
							<Tooltip title="Contact Info">
								<Button color="inherit" href="/Contact">
									Contact
								</Button>
							</Tooltip> */}
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
					<ProductCarousel />
				</main>
			</div>
		</ThemeProvider>
	);
};

export default Home;

import {
	Button,
	Divider,
	Grid,
	Link,
	makeStyles,
	Paper,
	TextField,
	Tooltip,
	Typography,
} from '@material-ui/core';
import { blue, indigo } from '@material-ui/core/colors';
import { Facebook, GitHub, Twitter } from '@material-ui/icons';
import React, { useState } from 'react';
const useStyles = makeStyles((theme) => ({
	root: {
		'& .MuiTextField-root': {
			margin: theme.spacing(1),
			width: '25ch',
		},
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'left',
		marginTop: 20,
	},
}));

const Contact = () => {
	const classes = useStyles();
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		message: '',
	});
	const [formValidation, setFormValidation] = useState({
		firstName: { error: false, errorMessage: '' },
		lastName: { error: false, errorMessage: '' },
		email: { error: false, errorMessage: '' },
		message: { error: false, errorMessage: '' },
	});

	const handleSubmit = () => {
		console.log('form submitted');
		setFormData({
			firstName: '',
			lastName: '',
			email: '',
			message: '',
		});
	};

	const handleValidation = (e) => {
		if (!(e.target.value.length > 0)) {
			setFormValidation({
				...formValidation,
				[e.target.name]: {
					error: true,
					errorMessage: 'This field is required',
				},
			});
		} else {
			setFormValidation({
				...formValidation,
				[e.target.name]: {
					error: false,
					errorMessage: '',
				},
			});
			if (e.target.name === 'email') {
				let lastAtPos = formData.email.lastIndexOf('@');
				let lastDotPos = formData.email.lastIndexOf('.');
				let validFormat =
					lastAtPos < lastDotPos &&
					lastAtPos > 0 &&
					formData.email.indexOf('@@') === -1 &&
					lastDotPos > 2 &&
					formData.email.length - lastDotPos > 2;

				if (validFormat) {
					setFormValidation({
						...formValidation,
						email: {
							error: false,
							errorMessage: '',
						},
					});
				} else {
					setFormValidation({
						...formValidation,
						email: {
							error: true,
							errorMessage: 'Invalid email address',
						},
					});
				}
			}
		}
	};

	const handleChange = (e) => {
		e.preventDefault();
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	return (
		<div>
			<Typography variant="h4" component="h1" align="center">
				Contact Information
			</Typography>
			<Grid container justify="center">
				<Grid item xs={12} md={9} lg={8}>
					<Divider style={{ marginBottom: 20 }} />
					<Typography variant="body1" component="p">
						Get in touch using following platforms
					</Typography>
					<Typography
						variant="h2"
						align="center"
						style={{ margin: '50px 0px' }}
					>
						<Link href="https://github.com/uzair-suria" color="textPrimary">
							<Tooltip title="View GitHub Profile">
								<GitHub fontSize="large" style={{ margin: '5px 20px' }} />
							</Tooltip>
						</Link>
						<Link
							href="https://www.facebook.com/UzairSuria"
							color="textPrimary"
						>
							<Tooltip title="Connect with me on Facebook">
								<Facebook
									fontSize="large"
									style={{ margin: '5px 20px', color: indigo[500] }}
								/>
							</Tooltip>
						</Link>
						<Link href="https://twitter.com/uzairazizsuria" color="textPrimary">
							<Tooltip title="Connect with me on Twitter">
								<Twitter
									fontSize="large"
									style={{ margin: '5px 20px', color: blue[500] }}
								/>
							</Tooltip>
						</Link>
					</Typography>
					<Typography gutterBottom>Or just send a message</Typography>
					<Paper className={classes.paper}>
						<form className={classes.root} onSubmit={handleSubmit}>
							<TextField
								required
								id="firstName"
								label="First Name"
								name="firstName"
								onChange={handleChange}
								value={formData.firstName}
								variant="outlined"
								style={{ width: '45%' }}
								error={formValidation.firstName.error}
								helperText={formValidation.firstName.errorMessage}
								onBlur={handleValidation}
							/>
							<TextField
								required
								id="lastName"
								label="Last Name"
								name="lastName"
								onChange={handleChange}
								value={formData.lastName}
								variant="outlined"
								style={{ width: '45%' }}
								error={formValidation.lastName.error}
								helperText={formValidation.lastName.errorMessage}
								onBlur={handleValidation}
							/>
							<br />
							<TextField
								required
								id="email"
								label="Email Address"
								name="email"
								onChange={handleChange}
								value={formData.email}
								variant="outlined"
								style={{ width: '92.5%' }}
								type="email"
								error={formValidation.email.error}
								helperText={formValidation.email.errorMessage}
								onBlur={handleValidation}
							/>
							<TextField
								required
								id="message"
								label="Message"
								onChange={handleChange}
								value={formData.message}
								name="message"
								multiline
								variant="filled"
								style={{ width: '92.5%' }}
								error={formValidation.message.error}
								helperText={formValidation.message.errorMessage}
								onBlur={handleValidation}
							/>
							<div style={{ textAlign: 'center' }}>
								<Tooltip title="Send the message">
									<Button
										color="primary"
										variant="contained"
										onClick={handleSubmit}
									>
										Submit
									</Button>
								</Tooltip>
							</div>
						</form>
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
};

export default Contact;

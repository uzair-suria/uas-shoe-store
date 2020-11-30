import { Divider, Grid, Typography } from '@material-ui/core';
import React from 'react';

const About = () => {
	return (
		<div>
			<Typography variant="h4" align="center" component="h1" gutterBottom>
				About Us
			</Typography>
			<Grid container justify="center">
				<Grid item xs={12} md={9} lg={8}>
					<Divider />
					<Typography variant="body1" component="p" align="justify">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut magni
						incidunt facere in commodi sunt nisi ipsum similique, fugit iusto id
						at quaerat perspiciatis quia maxime suscipit porro eius aspernatur?
						Quibusdam maxime rem officiis magni doloribus ducimus non ipsam
						nemo, assumenda dolores natus quod nostrum, nisi consequuntur ex!
						Cum consectetur ea cumque accusamus ut possimus quia odio fugiat,
						nulla vero? Quibusdam provident earum vitae sunt a saepe commodi
						nobis odit voluptate nulla sequi fugiat hic, temporibus aspernatur
						officia amet cumque. Maiores in, molestias blanditiis accusantium
						quibusdam natus placeat cum omnis.
					</Typography>
					<Typography variant="body1" component="p" align="justify">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit.
						Voluptatibus nesciunt officia, nisi libero a, molestias minima
						consequatur ut cupiditate necessitatibus in ipsa saepe. Numquam
						consectetur possimus reprehenderit, mollitia delectus expedita.
					</Typography>
				</Grid>
			</Grid>
		</div>
	);
};

export default About;

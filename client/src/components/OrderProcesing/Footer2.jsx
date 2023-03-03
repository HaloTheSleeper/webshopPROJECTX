import React from 'react';

import useStyles from './styles/footer2/footer2';


const Footer2 = () => {
    const classes = useStyles();

    return(
        <footer>
	        <section className={classes.copyrightText}>
			   <a className={classes.copyrightTextSecond}>Copyright &copy; Project X and contributors 2023</a>
	        </section>
        </footer>
    )
}

export default Footer2
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import withAuthorized from '../common/wizard/Auth'
import { useStyles } from '../theme'
import Welcome from './Welcome'

const Authorized = withAuthorized(Welcome)

const Home = () => {
	const classes = useStyles()
	return (
		<>
			<Header />
			<Authorized classes={classes} />
			<Footer />
		</>
	)
}

export default Home

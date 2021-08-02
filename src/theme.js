import { red } from '@material-ui/core/colors'
import { createTheme } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles'

export const theme = createTheme({
	palette: {
		primary: {
			main: '#556cd6',
		},
		secondary: {
			main: '#19857b',
		},
		error: {
			main: red.A400,
		},
		background: {
			default: '#fff',
		},
	},
})

export const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
	},
	appBar: {
		position: 'relative',
	},
    avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
    image: {
		backgroundImage: 'url(https://source.unsplash.com/random)',
		backgroundRepeat: 'no-repeat',
		backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	},
	
	stepper: {
		padding: theme.spacing(3, 0, 5),
	},
    layout: {
		width: 'auto',
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(2),
		[theme.breakpoints.up(1200 + theme.spacing(2) * 2)]: {
			width: 1200,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
	},
	paper: {
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(3),
		padding: theme.spacing(2),
		[theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
			marginTop: theme.spacing(6),
			marginBottom: theme.spacing(6),
			padding: theme.spacing(3),
		},
	},

	
    form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	footer: {
		padding: theme.spacing(3, 2),
		marginTop: 'auto',
		backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
	},
	button: {
		marginTop: theme.spacing(3),
		marginLeft: theme.spacing(1),
		padding: theme.spacing(1),
	},
	divider: {
		margin: theme.spacing(2, 0),
	},
	error: {
		color: 'red',
		border: '1px solid red',
	},
	
}))
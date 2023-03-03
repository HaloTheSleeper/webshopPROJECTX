import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  wholeShit: {
    backgroundColor: "black",
    height: "100%",
    display: "flex",
    height: "95vh",
    position: "relative",
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      paddingBottom: theme.spacing(6),
    },

  },
  
  appBar: {
    position: 'relative',
  },
  toolbar: theme.mixins.toolbar,
  layout: {
    marginTop: '5%',
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    //marginBottom: theme.spacing(3), wholeShit alla pandud
    marginBottom: "15vh",
    padding: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginTop: 60,
    },
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      //marginBottom: theme.spacing(6), wholeShit alla pandud, musta tausta jaoks
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  divider: {
    margin: '20px 0',
  },
  spinner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmationFix: {
    //paddingBottom: "60%",
  },
}));
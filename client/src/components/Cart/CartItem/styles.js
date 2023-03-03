import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  media: {
    height: 260,
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cartActions: {
    justifyContent: 'space-between',
    minWidth: "300px"
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
    margin: "0 auto"
  },
  buttonAdd: {
    height: "35px",
    width: "30px",
    backgroundColor: "#2aabdf",
    fontSize: "20px",
    color: "white",
    textAlign: "center",
    margin: "10px",
    borderRadius: "3px",
    fontWeight: "1000",
    paddingTop: "6px",
    userSelect: "none",
    WebkitUserSelect: "none",
    touchAction: "manipulation",
    transition: "all .3s",
    "&:hover": {
      backgroundColor: "black",
      border: "2px solid #2aabdf",
    },
  },
  window: {
    margin: "auto",
    overflow: "hidden"
  },
  removeFromCartButton: {
    textDecoration: "none",
    borderRadius: "3px",
    height: "calc(35px + 0.3vw)",
    width: "calc(90px + 1vw)",
    backgroundColor: "#bf0606",
    fontSize: "calc(15px + 0.2vw)",
    color: "white",
    paddingTop: "calc(10px)",
    textAlign: "center",
    margin: "10px",
    fontWeight: "700",
    padding: "5px",
    userSelect: "none",
    WebkitUserSelect: "none",
    touchAction: "manipulation",
    transition: "all .3s",
    "&:hover": {
      backgroundColor: "#EE4B2B",
    },
  },
  quantityDisplay: {
    border: "2px solid #2aabdf", 
    borderRadius: "10px", 
    color: "white", 
    paddingTop: "2px", 
    paddingBottom: "2px", 
    paddingLeft: "8px", 
    paddingRight: "8px",
    marginRight: "3vw"
  }
}));
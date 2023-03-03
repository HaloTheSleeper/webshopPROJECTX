import { makeStyles, fade } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    header: {
        backgroundColor: "black",
        ['@media (max-width:300px)']: {
            marginLeft: "10vw",
        },
    },
    headerText: {
        width: "100%",
	    height: "100px",
	    margin: "auto",
	    textAlign: "center",
        "& h1": {
            color: "#999999",
	        fontSize: "calc(4em - 20%)",
	        paddingTop: "0.25em",
	        fontWeight: "700",
            marginRight: "20px",
            marginLeft: "20px",
            ['@media (max-width:300px)']: {
                fontSize: "2.5em"
            },
        },
        ['@media (max-width:920px)']: {
           marginBottom: "30px",
        },
        ['@media (max-width:510px)']: {
            marginBottom: "130px",
        },
        ['@media (max-width:300px)']: {
            marginBottom: "60px",
        },
        

    },
    headerPicImg: {
	    overflow: "hidden",
	    float: "left",
	    height: "90px",
        paddingTop: "1vw",
        paddingLeft: "1vw",
        ['@media (max-width:780px)']: {
            display: "none",

        },
        
    },
    
    backToHome: {
        background: "black",
        paddingTop: "2em",
        paddingBottom: "1em",
        //margin: "auto",
        //paddingLeft: "20em",
        //paddingRight: "20em",
        "& h2": {
            color: "#999999",
            webkitUserSelect: "none",
            webkitTouchCallout: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
        },
        ['@media (max-width:1200px)']: {
            //paddingLeft: "15em",
            //paddingRight: "15em",
        },
        ['@media (max-width:1050px)']: {
            //paddingRight: "10em",
            //paddingLeft: "10em",
        },
    },
    homeButtonImg: {
        width: "120px",
	    height: "120px",
    },
    backToHome2: {
        display: "flex",
	    alignItems: "center",
	    flexWrap: "wrap",
	    justifyContent: "space-around",
    },
    backToHome3: {
        flexBasis: "10%",
	    minWidth: "270px",
	    marginBottom: "30px",
	    transition: "transform 0.5s",
	    textAlign: "center",
        "&:hover": {
            transform: "translateY(-5px)",
	        color: "white",
        },
        "&:hover h2": {
            color: "white",
        },
    },
    scrollButtonImg: {
        height: "120px",
        width: "120px",
    },

    divider: {
        background: "black",
	    paddingBottom: "1em",
        "& hr": {
            border: "none",
	        height: "5px",
	        color: "#2aabdf",
	        backgroundColor: "#2aabdf",
	        textAlign: "center",
	        width: "85%",
	        margin: "0 auto",
	        borderRadius: "2px",
        },
    },

    tutorial: {
        textAlign: "center",
        backgroundColor: "black",
        paddingTop: "2em",
        paddingBottom: "2em",
        "& h3": {
            color: "#999999",
	        paddingBottom: "1em",
	        fontSize: "2.5em",
        },
    },
    video11: {
        width: "calc(50px + 60vw)",
	    height: "35vw",
    },

    welcomingText: {
        backgroundColor: "black",
	    textAlign: "center",
	    paddingBottom: "1em",
	    paddingLeft: "10em",
        paddingRight: "10em",
        "& p": {
            color: "#999999",
            fontSize: "calc(0.8vw + 11px)"
        },
        ['@media (max-width:800px)']: {
            paddingLeft: "2em",
            paddingRight: "2em",
        },
    },

    menu: {
        backgroundColor: "black",
	    paddingTop: "3em",
	    paddingLeft: "1em",
	    paddingRight: "1em",
        "& h3": {
            color: "#999999",
            fontSize: "calc(0.7vw + 22px)"
        },
        "& p": {
            color: "#999999",
            paddingTop: "1em",
            fontSize: "calc(0.3vw + 15px)"
        },
        "&::after": {
            content: '""',
            display: "table",
            clear: "both",
        },
        "& > section": {
            overflow: "auto"
        }
    },
    workWithUs: {
        overflow: "hidden",
        width: "25%",
        float: "left",
        textAlign: "center",
        backgroundColor: "black",
        height: "400px",
        paddingRight: "0.5em",
        paddingLeft: "0.5em",
        "&:hover": {
            transform: "translateY(-5px)",
	        transition: "transform 0.5s",
        },
        "&:hover h3": {
            color: "white",
        },
        "&:hover p": {
            color: "white",
        },
        "& menuHeader": {
            ['@media (max-width:900px)']: {
                paddingBottom: "0em",
                height: "30px",
            },
        },
        ['@media (max-width:1380px)']: {
            width: "33.3%",
        },
        ['@media (max-width:1050px)']: {
            width: "50%",
        },
        ['@media (max-width:900px)']: {
            width: "100%",
            float: "none",
            textAlign: "center",
            height: "250px",
        },
    },
    termsAndConditionsOfUse: {
        overflow: "hidden",
        width: "25%",
        float: "left",
        textAlign: "center",
        backgroundColor: "black",
        height: "400px",
        paddingRight: "0.5em",
        paddingLeft: "0.5em",
        "&:hover": {
            transform: "translateY(-5px)",
	        transition: "transform 0.5s",
        },
        "&:hover h3": {
            color: "white",
        },
        "&:hover p": {
            color: "white",
        },
        ['@media (max-width:1380px)']: {
            width: "33.3%",
        },
        ['@media (max-width:1050px)']: {
            width: "50%",
        },
        ['@media (max-width:900px)']: {
            width: "100%",
            float: "none",
            textAlign: "center",
            height: "375px",
        },
    },
    safetyGuarantee: {
        overflow: "hidden",
        width: "25%",
        float: "left",
        textAlign: "center",
        backgroundColor: "black",
        height: "400px",
        paddingRight: "0.5em",
        paddingLeft: "0.5em",
        "&:hover": {
            transform: "translateY(-5px)",
	        transition: "transform 0.5s",
        },
        "&:hover h3": {
            color: "white",
        },
        "&:hover p": {
            color: "white",
        },
        ['@media (max-width:1380px)']: {
            width: "33.3%",
        },
        ['@media (max-width:1050px)']: {
            width: "50%",
            height: "600px",
        },
        ['@media (max-width:900px)']: {
            width: "100%",
            float: "none",
            textAlign: "center",
            height: "385px",
        },
    },
    socialMedia: {
        overflow: "hidden",
        width: "25%",
        float: "left",
        textAlign: "center",
        backgroundColor: "black",
        height: "400px",
        paddingRight: "0.5em",
        paddingLeft: "0.5em",
        ['@media (max-width:1380px)']: {
            width: "100%",
            paddingTop: "1em",
            textAlign: "center",
        },
        ['@media (max-width:1050px)']: {
            width: "50%",
            paddingTop: "0em",
        },
        ['@media (max-width:900px)']: {
            width: "100%",
            float: "none",
            textAlign: "center",
            height: "250px",
        },
        ['@media (max-width:450px)']: {
            marginBottom: "60px",
        },
        ['@media (max-width:385px)']: {
            marginBottom: "120px",
        },

        

    },
    menuHeader: {
        height: "85px",
    },
    logos: {
        margin: "auto",
        width: "80%",
    },
    youtubeLogo: {
        width: "160px",
	    height: "105px",
	    float: "left",
	    padding: "1em",
        "&:hover": {
            transform: "translateY(-5px)",
	        transition: "transform 0.5s",
        },
        ['@media (max-width:1380px)']: {
            float: "none",
        },
    },
    tiktokLogo: {
        height: "105px",
	    width: "105px",
	    float: "left",
	    padding: "1em",
        "&:hover": {
            transform: "translateY(-5px)",
	        transition: "transform 0.5s",
        },
        ['@media (max-width:1380px)']: {
            float: "none",
        },
    },
    menuText: {
        width: "90%",
        ['@media (max-width:900px)']: {
            paddingLeft: "3em",
        },
        ['@media (max-width:800px)']: {
            paddingLeft: "2em",
        },
        

    },
    
    divider2: {
        background: "black",
	    paddingBottom: "1em",
	    paddingTop: "3em",
        "& hr": {
            border: "none",
	        height: "5px",
	        color: "#2aabdf",
	        backgroundColor: "#2aabdf",
	        textAlign: "center",
	        width: "85%",
	        margin: "0 auto",
	        borderRadius: "2px",
        },
    },




    

}));
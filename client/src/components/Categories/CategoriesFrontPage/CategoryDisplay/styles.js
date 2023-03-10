import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    root: {
        maxWidth: '100%',
        backgroundColor: 'black',
        border: "4px solid #2aabdf",
        //borderRadius: "0px"
    },
    media: {
        height: 0,
        paddingTop: '70%', // 16:9
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
}));
import { makeStyles } from '@material-ui/styles';

const InfluencerCardStyles = makeStyles((theme) => ({
    root: {
        height: "68%",
        alignItems: "start",
    },
    avatar: {
    },
    title: {
        color: "#757575",
        fontSize: "16 px",
        fontWeight: "bold", 
        
    },
    subheader: {
        fontSize: "14 px",
        marginTop: "2%",
    },
    actionClaimed: {
        fontFamily: "Montserrat",
        color: "#73AD34",
        fontWeight: "bold",
        fontSize: "16 px",
        marginTop: "0%",
    },
    actionSubmitted: {
        fontFamily: "Montserrat",
        color: "#FFBF14",
        fontWeight: "bold",
        fontSize: "16 px",
        marginTop: "0%",
    },
    actionShipped: {
        fontFamily: "Montserrat",
        color: "#BF13FF",
        fontWeight: "bold", 
        fontSize: "16 px",
        marginTop: "0%",
    },
})) 

export default InfluencerCardStyles;
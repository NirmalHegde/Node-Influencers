import { makeStyles } from '@material-ui/styles';

const InfluencerCardStyles = makeStyles((theme) => ({
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
    },
    actionSubmitted: {
        fontFamily: "Montserrat",
        color: "#FFBF14",
        fontWeight: "bold",
        fontSize: "16 px",
    },
    actionShipped: {
        fontFamily: "Montserrat",
        color: "#BF13FF",
        fontWeight: "bold", 
        fontSize: "16 px",
    },
})) 

export default InfluencerCardStyles;
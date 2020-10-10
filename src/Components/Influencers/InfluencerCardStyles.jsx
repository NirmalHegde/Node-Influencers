import { makeStyles } from '@material-ui/styles';

const InfluencerCardStyles = makeStyles((theme) => ({
    root: {
        height: "68%",
        alignItems: "start",
    },
    avatar: {
        marginTop: "0.5%",
    },
    title: {
        color: "#757575",
        fontSize: "16 px",
        fontWeight: "bold",    
    },
    subheader: {
        color: "#404040",
        fontSize: "14 px",
        marginTop: "2%",
        width: "120%",
    },
    actionSize: {
        fontSize: "16px",
        fontWeight: "bold",
    },
    actionClaimed: {
        fontFamily: "Montserrat",
        color: "#73AD34",
        marginTop: "-0.5%",
        marginRight: "1%",
    },
    actionSubmitted: {
        fontFamily: "Montserrat",
        color: "#FFBF14",
        marginTop: "-0.5%",
        marginRight: "1%",
    },
    actionShipped: {
        fontFamily: "Montserrat",
        color: "#BF13FF", 
        marginTop: "-0.5%",
        marginRight: "1%",
    },
})) 

export default InfluencerCardStyles;
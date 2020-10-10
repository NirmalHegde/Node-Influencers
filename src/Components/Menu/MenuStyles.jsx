//styling for sidebar content
import { makeStyles } from '@material-ui/styles';

const MenuStyles = makeStyles((theme) => ({
    root: {
        height: 695.5, //Height of section
        marginTop: "-1.802%",
        width: "100%",
    },
    companyLogoCentering: {
        marginTop: "2%",
        display: "flex",
        justifyContent: "center",
    },
    companyLogo: {
        marginTop: "10%",
    },
    companyText: {
        textAlign: "center",
        marginBottom: "5%",
    },
    createButtonCentering: {
        display: "flex",
        justifyContent: "center",
    },
    createButton: {
        borderRadius: 20,
        background: "#FFFFFF",
        textTransform: "none",
        color: "primary",
        marginTop: "8%",
        marginBottom: "6%",
    },
    tabs: {
        width: "100%",
    },
    dashboardIcon:{
        marginBottom: "-6.2%",
        marginLeft: "-80%",
    },
    myNodesIcon:{
        marginBottom: "-7.1%",
        marginLeft: "-94%"
    },
    influencersIcon:{
        marginBottom: "-5.1%",
        marginLeft: "-78%"
    },
    contentIcon:{
        marginBottom: "-7.2%",
        marginLeft: "-120%"
    },
    favouriteIcon:{
        marginBottom: "-6%",
        marginLeft: "-103%"
    },
    reviewsIcon:{
        marginBottom: "-8.4%",
        marginLeft: "-121%"
    },
    profileIcon:{
        marginBottom: "-8.5%",
        marginLeft: "-153%"
    },
}));

export default MenuStyles;
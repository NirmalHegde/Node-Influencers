//styling for sidebar content
import { makeStyles } from '@material-ui/styles';

const MenuStyles = makeStyles((theme) => ({
    root: {
        height: "700px",
        width: "100%",
    },
    companyLogo: {
        padding: "2% 44%"
    },
    companyText: {
        textAlign: "center",
        padding: "3%"
    },
    createButton: {
        borderRadius: 20,
        background: "#FFFFFF",
        fontFamily: "Montserrat",
        textTransform: "none",
        color: "primary",
        marginTop: "8%",
        marginBottom: "6%",
        marginLeft: "20%",
    },
    inactiveButton: {
        textTransform: "none",
        color: "primary",
        justifyContent: "flex-start",
        width: "100%",
        padding: "4% 12%"

    },
    activeButton: {
        textTransform: "none",
    }
}));

export default MenuStyles;
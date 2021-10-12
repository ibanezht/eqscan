import {CircularProgress, Fab, makeStyles, Theme, withStyles,} from "@material-ui/core";
import {KeyboardArrowUp} from "@material-ui/icons";
import React, {FC} from "react";
import {useSelector} from "react-redux";
import {StoreState} from "../../../store";

export const WhiteCircularProgress = withStyles((theme) => ({
    colorPrimary: {
        color: theme.palette.common.white,
    },
}))(CircularProgress);

const useStyles = makeStyles((theme: Theme) => ({
    drawerHeader: {
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    fab: {
        position: "fixed",
        bottom: theme.spacing(1),
        right: theme.spacing(1),
    },
}));

type Props = React.PropsWithChildren<unknown>;

const ContentSection: FC<Props> = (props: Props) => {
    const classes = useStyles();
    const {children} = props;

    const loading = useSelector((state: StoreState) => state.layout.loading);

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const anchor = (
            (event.target as HTMLDivElement).ownerDocument || document
        ).querySelector("#top-anchor");

        if (anchor) {
            anchor.scrollIntoView({behavior: "smooth", block: "center"});
        }
    };

    return (
        <React.Fragment>
            <div className={classes.content}>
                <div id="top-anchor" className={classes.drawerHeader}/>
                {children}
            </div>
            <div onClick={handleClick} className={classes.fab}>
                <Fab color="primary">
                    {loading ? <WhiteCircularProgress/> : <KeyboardArrowUp/>}
                </Fab>
            </div>
        </React.Fragment>
    );
};

export default ContentSection;

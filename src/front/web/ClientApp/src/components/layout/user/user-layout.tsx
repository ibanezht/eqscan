import {makeStyles} from "@material-ui/core";
import React, {FC, PropsWithChildren, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import ContentSection from "./content-section";
import SideSection from "./side-section";
import TopSection from "./top-section";
import {StoreState} from "../../../store";
import {setDrawerOpen, setSelectedRoute} from "../../../store/layout";

const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
    },
}));

type Props = PropsWithChildren<{
    title: string;
}>;

const UserLayout: FC<Props> = (props: Props) => {
    const classes = useStyles();
    const {title, children} = props;
    const location = useLocation();

    const drawerOpen = useSelector(
        (state: StoreState) => state.layout.drawerOpen,
    );
    const selectedRoute = useSelector(
        (state: StoreState) => state.layout.selectedRoute,
    );

    const dispatch = useDispatch();

    function handleDrawerToggle() {
        dispatch(setDrawerOpen(!drawerOpen));
    }

    function handleRouteSelection(route: string) {
        dispatch(setSelectedRoute(route));
        dispatch(setDrawerOpen(false));
    }

    useEffect(() => handleRouteSelection(location.pathname), [location.pathname]);

    return (
        <div className={classes.root}>
            <SideSection
                drawerOpen={drawerOpen}
                onDrawerToggle={handleDrawerToggle}
                selectedRoute={selectedRoute}
                onRouteSelected={handleRouteSelection}
            />
            <TopSection title={title} onDrawerToggle={handleDrawerToggle}/>
            <ContentSection>{children}</ContentSection>
        </div>
    );
};

export default UserLayout;

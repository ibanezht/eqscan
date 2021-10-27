import {
  Divider,
  Drawer,
  Hidden,
  List,
  ListSubheader,
  makeStyles,
  Theme,
} from "@material-ui/core";
import { Dashboard } from "@material-ui/icons";
import React, { FC } from "react";
import RouterListItem from "../router-list-item";

const useStyles = makeStyles((theme: Theme) => {
  const drawerWidth = 240;
  return {
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
    },
    title: {
      flexGrow: 1,
      padding: theme.spacing(1, 0, 0, 1),
    },
  };
});

interface Props {
  drawerOpen: boolean;
  onDrawerToggle: (open: boolean) => void;
  selectedRoute: string;
  onRouteSelected: (route: string) => void;
}

const SideSection: FC<Props> = (props: Props) => {
  const classes = useStyles();
  const { drawerOpen, onDrawerToggle, selectedRoute, onRouteSelected } = props;

  const drawer = (
    <React.Fragment>
      <div className={classes.drawerHeader}>
        <div className={classes.title}>EqScan</div>
      </div>
      <Divider />
      <List>
        <ListSubheader>Main</ListSubheader>
        <RouterListItem
          to="/dashboard"
          primary="dashboard"
          icon={<Dashboard />}
          selected={selectedRoute.includes("/dashboard")}
          onClick={() => onRouteSelected("/dashboard")}
        />
      </List>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <Hidden xsDown>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden smUp>
        <Drawer
          className={classes.drawer}
          variant="temporary"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
          open={drawerOpen}
          onClose={onDrawerToggle}
        >
          {drawer}
        </Drawer>
      </Hidden>
    </React.Fragment>
  );
};

export default SideSection;

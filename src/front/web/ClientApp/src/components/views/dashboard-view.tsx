import {Grid} from "@material-ui/core";
import React, {FC} from "react";

const DashboardView: FC = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <span>Hello, World!</span>
            </Grid>
        </Grid>
    );
};

export default DashboardView;

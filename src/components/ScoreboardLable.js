import React, { Component, Fragment } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = {
};

class ScoreboardLable extends Component {
    render() {
        return (
            <Fragment>
                <Grid container spacing={2}>
                    <Grid item sm={3} align="center">
                        Name
                    </Grid>
                    <Grid item sm={4} align="center">
                        Score
                    </Grid>
                    <Grid item sm={5} align="center">
                        <Grid container spacing={0}>
                            <Grid item sm={4} align="center">
                                Rebound
                            </Grid>
                            <Grid item sm={4} align="center">
                                Assist
                            </Grid>
                            <Grid item sm={4} align="center">
                                Foul
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Fragment>
        );
    }
}


export default withStyles(styles)(ScoreboardLable);

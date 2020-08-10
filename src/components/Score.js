import React, { Component } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "@material-ui/core/Card";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const styles = {
    root: {
        maxWidth: 200,
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#eee",
    },
    title: {
        fontSize: 60,
    },
};

class Score extends Component {
    render() {
        const { classes } = this.props;
        const {
            scoreA,
            // reboundA,
            // assistA,
            // foulA,
            scoreB,
            // reboundB,
            // assistB,
            // foulB,
        } = this.props;
        return (
            <Grid container spacing={2}>
                <Grid item sm={5} align="right">
                    <Paper className={classes.root}>
                        <Typography className={classes.title} color="primary">
                            {scoreA}
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item sm={2} align="center">
                    <Typography className={classes.title}>:</Typography>
                </Grid>
                <Grid item sm={5} align="left">
                    <Paper className={classes.root}>
                        <Typography className={classes.title} color="secondary">
                            {scoreB}
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

const mapStateToProps = (state) => ({
    scoreA: state.scoreboard.teamA.score,
    // reboundA: state.scoreboard.teamA.rebound,
    // assistA: state.scoreboard.teamA.assist,
    // foulA: state.scoreboard.teamA.foul,
    scoreB: state.scoreboard.teamB.score,
    // reboundB: state.scoreboard.teamB.rebound,
    // assistB: state.scoreboard.teamB.assist,
    // foulB: state.scoreboard.teamB.foul,
});

export default connect(mapStateToProps)(withStyles(styles)(Score));

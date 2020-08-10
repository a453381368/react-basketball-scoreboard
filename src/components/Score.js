import React, { Component } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import ScoreboardLable from "../components/ScoreboardLable";

import { playerReset } from "../redux/actions/playerActions";
import { reset } from "../redux/actions/scoreActions";

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
    handleReset = () => {
        this.props.reset();
        this.props.playerReset();
    };

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
            <AppBar position="fixed" color="default">
                <Grid container spacing={2}>
                    <Grid item sm={5} align="right">
                        <Paper className={classes.root}>
                            <Typography
                                className={classes.title}
                                color="primary"
                            >
                                {scoreA}
                            </Typography>
                        </Paper>
                        <br />
                        <Button variant="outlined" size="large" color="primary">
                            Total Statics
                        </Button>
                    </Grid>
                    <Grid item sm={2} align="center">
                        <Typography className={classes.title}>:</Typography>
                    </Grid>
                    <Grid item sm={5} align="left">
                        <Paper className={classes.root}>
                            <Typography
                                className={classes.title}
                                color="secondary"
                            >
                                {scoreB}
                            </Typography>
                        </Paper>
                        <br />
                        <Button
                            variant="outlined"
                            size="large"
                            color="secondary"
                            onClick={this.handleReset}
                        >
                            Reset Game
                        </Button>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item sm={6} align="center">
                        <br />
                        <ScoreboardLable />
                        <br />
                    </Grid>
                    <Grid item sm={6} align="center">
                        <br />
                        <ScoreboardLable />
                        <br />
                    </Grid>
                </Grid>
            </AppBar>
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

export default connect(mapStateToProps, { playerReset, reset })(
    withStyles(styles)(Score)
);

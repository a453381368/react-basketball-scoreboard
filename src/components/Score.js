import React, { Component } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import ScoreboardLable from "../components/ScoreboardLable";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

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

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

class Score extends Component {
    state = {
        open: false,
    };
    handleReset = () => {
        this.props.reset();
        this.props.playerReset();
        this.setState({ open: false });
    };
    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
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
                            onClick={this.handleClickOpen}
                        >
                            Reset Game
                        </Button>
                        <Dialog
                            open={this.state.open}
                            TransitionComponent={Transition}
                            keepMounted
                            onClose={this.handleClose}
                            aria-labelledby="alert-dialog-slide-title"
                            aria-describedby="alert-dialog-slide-description"
                        >
                            <DialogTitle id="alert-dialog-slide-title">
                                {"Confirm Reset Game"}
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-slide-description">
                                    You're going to RESET the game.
                                    <br />
                                    All data will be wiped.
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button
                                    onClick={this.handleClose}
                                    color="default"
                                    variant="contained"
                                >
                                    Cancel
                                </Button>
                                <Button
                                    onClick={this.handleReset}
                                    color="secondary"
                                    variant="contained"
                                >
                                    Confirm
                                </Button>
                            </DialogActions>
                        </Dialog>
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

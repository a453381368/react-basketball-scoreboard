import React, { Component, Fragment } from "react";
// import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

// import AccountCircle from "@material-ui/icons/AccountCircle";

import { connect } from "react-redux";
import {
    addScore,
    addRebound,
    addAssist,
    addFoul,
    reset,
} from "../redux/actions/scoreActions";

import {
    addPlayerScore,
    addPlayerRebound,
    addPlayerAssist,
    addPlayerFoul,
    playerReset,
    changePlayerName,
} from "../redux/actions/playerActions";

const styles = {
    playerPaper: {
        marginBottom: 5,
    },
};

class Player extends Component {
    state = {
        body: "",
    };
    handleAddScoreOne = () => {
        console.log(this.props.player);
        this.props.addScore(1, this.props.team, "score");
        this.props.addPlayerScore(1, this.props.team, this.props.player);
    };
    handleAddScoreTwo = () => {
        this.props.addScore(2, this.props.team);
        this.props.addPlayerScore(2, this.props.team, this.props.player);
    };
    handleAddScoreThree = () => {
        this.props.addScore(3, this.props.team);
        this.props.addPlayerScore(3, this.props.team, this.props.player);
    };
    handleAddRebound = () => {
        this.props.addRebound(1, this.props.team);
        this.props.addPlayerRebound(1, this.props.team, this.props.player);
    };
    handleAddAssist = () => {
        this.props.addAssist(1, this.props.team);
        this.props.addPlayerAssist(1, this.props.team, this.props.player);
    };
    handleAddFoul = () => {
        this.props.addFoul(1, this.props.team);
        this.props.addPlayerFoul(1, this.props.team, this.props.player);
    };
    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        this.props.changePlayerName(event.target.value, this.props.team, this.props.player);
    };

    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                <Grid container spacing={2}>
                    <Grid item sm={3}>
                        <TextField
                            color={this.props.color}
                            name="body"
                            size="small"
                            label="Player"
                            variant="outlined"
                            value={this.state.body}
                            onChange={this.onChange}
                        />
                    </Grid>
                    <Grid item sm={4} style={{ padding: "auto" }}>
                        <ButtonGroup
                            color={this.props.color}
                            variant="contained"
                            aria-label="contained primary button group"
                        >
                            <Button
                                size="small"
                                onClick={this.handleAddScoreOne}
                            >
                                +1
                            </Button>
                            <Button
                                size="small"
                                onClick={this.handleAddScoreTwo}
                            >
                                +2
                            </Button>
                            <Button
                                size="small"
                                onClick={this.handleAddScoreThree}
                            >
                                +3
                            </Button>
                        </ButtonGroup>
                    </Grid>
                    <Grid item sm={5}>
                        <Grid container spacing={0}>
                            <Grid item sm={4}>
                                <Button
                                    size="small"
                                    variant="outlined"
                                    color={this.props.color}
                                    onClick={this.handleAddRebound}
                                >
                                    +1
                                </Button>
                            </Grid>
                            <Grid item sm={4}>
                                <Button
                                    size="small"
                                    variant="outlined"
                                    color={this.props.color}
                                    onClick={this.handleAddAssist}
                                >
                                    +1
                                </Button>
                            </Grid>
                            <Grid item sm={4}>
                                <Button
                                    size="small"
                                    variant="outlined"
                                    color={this.props.color}
                                    onClick={this.handleAddFoul}
                                >
                                    +1
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    score: state.scoreboard.teamA.score,
    rebound: state.scoreboard.teamA.rebound,
    assist: state.scoreboard.teamA.assist,
    foul: state.scoreboard.teamA.foul,
});

const mapActionsToProps = {
    addScore,
    addRebound,
    addAssist,
    addFoul,
    reset,
    addPlayerScore,
    addPlayerRebound,
    addPlayerAssist,
    addPlayerFoul,
    playerReset,
    changePlayerName,
};

export default connect(
    mapStateToProps,
    mapActionsToProps
)(withStyles(styles)(Player));

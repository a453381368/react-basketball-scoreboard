import React, { Component } from "react";
import Player from "./Player";
import Grid from "@material-ui/core/Grid";

class PlayerList extends Component {
    render() {
        return (
            <Grid container spacing={2} style={{marginTop:220}}>
                
                <Grid item sm={6}>
                    <Player team="teamA" player="player1" color="primary" />
                    <Player team="teamA" player="player2" color="primary" />
                    <Player team="teamA" player="player3" color="primary" />
                    <Player team="teamA" player="player4" color="primary" />
                    <Player team="teamA" player="player5" color="primary" />
                    <Player team="teamA" player="player6" color="primary" />
                    <Player team="teamA" player="player7" color="primary" />
                    <Player team="teamA" player="player8" color="primary" />
                    <Player team="teamA" player="player9" color="primary" />
                    <Player team="teamA" player="player10" color="primary" />
                </Grid>
                <Grid item sm={6}>
                    <Player team="teamB" player="player1" color="secondary" />
                    <Player team="teamB" player="player2" color="secondary" />
                    <Player team="teamB" player="player3" color="secondary" />
                    <Player team="teamB" player="player4" color="secondary" />
                    <Player team="teamB" player="player5" color="secondary" />
                    <Player team="teamB" player="player6" color="secondary" />
                    <Player team="teamB" player="player7" color="secondary" />
                    <Player team="teamB" player="player8" color="secondary" />
                    <Player team="teamB" player="player9" color="secondary" />
                    <Player team="teamB" player="player10" color="secondary" />
                </Grid>
            </Grid>
        );
    }
}

export default PlayerList;

import React, { Component } from "react";
import Score from "./Score";
import PlayerList from "./PlayerList";

class Team extends Component {
    render() {
        return <div>
            <Score />
            <PlayerList />
        </div>;
    }
}

export default Team;

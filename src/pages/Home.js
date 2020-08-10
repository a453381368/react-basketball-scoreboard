import React, { Component } from "react";
import Score from "../components/Score";
import PlayerList from "../components/PlayerList";

class Home extends Component {
    render() {
        return (
            <div>
                <Score />
                <PlayerList />
            </div>
        );
    }
}

export default Home;

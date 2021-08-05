import React from "react";
import CardList from "../../components/CardList/CardList";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
    return (
        <div className="home">
            <CardList />
        </div>
    )
}

export default Home;
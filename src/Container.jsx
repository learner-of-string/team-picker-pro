import { Fragment, useEffect, useState } from "react";
import TopNavBar from "./HeroArea/TopNavBar";
import Banner from "./HeroArea/Banner";
import AvailablePlayers from "./PlayerDetails/AvailablePlayers";
import Newsletter from "./Footer/Newsletter";
import { toast } from "sonner";
import Footer from "./Footer/Footer";

const Container = () => {
    const [currentBalance, setCurrentBalance] = useState(0);
    const [allPlayers, setAllPlayers] = useState([]);

    useEffect(() => {
        fetch("./player.json")
            .then((res) => res.json())
            .then((data) => setAllPlayers(data));
    }, []);

    const getFreeBalance = () => {
        const giveableBalance = Math.round(Math.random() * 6000000 - 1);
        setCurrentBalance(currentBalance + giveableBalance);

        toast.success(`${giveableBalance} coins added to your balance`);
    };

    return (
        <Fragment>
            <header>
                <TopNavBar currentBalance={currentBalance} />
                <Banner getFreeBalance={getFreeBalance} />
            </header>
            <main>
                <AvailablePlayers
                    currentBalance={currentBalance}
                    allPlayers={allPlayers}
                    setCurrentBalance={setCurrentBalance}
                />
            </main>
            <footer>
                <Newsletter />
                <Footer />
            </footer>
        </Fragment>
    );
};

export default Container;

import standByImg from "../assets/construction.jpg";

function StandBy() {
    return (
        <div style={{width: "100vw", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <img src={standByImg} alt="Coming soon"/>
        </div>
    );
}

export default StandBy
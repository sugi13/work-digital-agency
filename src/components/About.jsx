import { Navbar } from "./Navbar"

export const AboutUs = () =>{
    return(
        <div className="About">
         <Navbar/>
        <div className="About-content">
        <h1>We build connected brand systems for <br /> brands with purpose.</h1>
        </div>
        <div className="video-grid">
            <div>
                <video src="/src/assets/pexels-dmc-filmes-5201210-1920x1080-30fps.mp4" autoPlay loop></video>
            </div>
        </div>
        <div className="about-us">
            <p>To create the highest caliber work — across brand, <br /> product and marketing — our teams are integrated from <br /> end to end; from vision through execution.</p>
        </div>
        <div className="Random-img">
            <img src="/src/assets/pexels-helena-lopes-1015568.jpg" alt="" />
        </div>
        <div className="How-we-work">
        <h1>How We Work</h1>
            <div className="content-1">
                <h3>Uniquely collaborative</h3>
                <p>We practice radical transparency between our teams and client partners <br /> — removing barriers and egos to come to the best solutions, together.</p>
            </div>
            <div className="content-2">
                <h3>Customer Focused</h3>
                <p>We champion user and customer needs above all — ensuring that our <br /> work serves them, and in turn, our clients' business.</p>
            </div>
            <div className="content-3">
                <h3>Inclusive by design</h3>
                <p>
                Great ideas come from everywhere, and our process is meant to enable <br /> that. From our CEO to our Junior talent, everyone is engaged in making <br/>and elevating our work.
                </p>
            </div>
        </div>
        <div className="footer">
            <h1>Build. Grow. Serve.</h1>
        </div>
        </div>
    )
}
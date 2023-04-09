import { Navbar } from "./Navbar";

export const Home = () =>{
    return (
        <div className="Home">
        <Navbar/>
        <div className="Home-content">
        <div className="Home-quote">
        <h1>Creative <br /> Digital Agency</h1>
        <p>Lift your business to new heights with our <br /> digital marketing services.</p>
        </div>
        <img src="/src/assets/DrawKit Vector Illustration Team Work (2).png"/>
        </div>  
        </div>
    )
}
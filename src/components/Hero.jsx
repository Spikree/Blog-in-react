import micImg from "../images/mic.png"
import pageImg from "../images/page.png"

function Hero() {
    return <>

        <div className="hero">
            <div className="hero-text">
            <img style={{maxWidth: "100%"}} src={micImg} alt="mic-image" className="mic-image" />
            <h1>Share via writing and podcasts, hope you enjoy</h1>
            <img src={pageImg} alt="web page img" className="web-page-img" />
            </div>
            <div className="paragraph-hero">
                <p>Increase your knowledge by reading new things and I will share whatever I know for you, as long as I enjoy it</p>
            </div>
            <div className="hero-buttons">
                <button>Read more</button>
                <button style={{ backgroundColor: "white", color: "rgb(3, 3, 120)"}}>Listen to Podcasts</button>
            </div>
        </div>
    </>
}

export default Hero;
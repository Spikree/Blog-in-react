import img1 from '../images/microphone.png'
import Card from './global components/Card';
import data from '../data/data';

function Podcast() {
    return<>
    <div className="podcast-main">
        <div className="podcast">
            <div className="header-podcast">
            <div className="mic-logo">
                <button><img src={img1} alt="" /></button>
            </div>
            <div className="h1-p">
                <h1>Trending podcasts</h1>
                <p>Get started on trending episodes</p>
            </div>
            </div>
            <div className="all-podcasts">
                <a href="#">see all podcasts</a>
            </div>
        </div>
        <div className="podcast-tiles">
            {data.map((cardItem) => {
                return <Card 
                 key={cardItem.id}
                 image = {cardItem.imgAddress}
                 title = {cardItem.podCastTitle}
                 author = {cardItem.podcastAuthor}
                />
            })}
        </div>
    </div>
    </>
}

export default Podcast;
import img1 from '../images/microphone.png'
import Card from './global components/Card';
import data from '../data/data'

function Blogs() {
    return<>
    <div className="blog-main">
        <div className="blog">
            <div className="header-blog">
            <div className="mic-logo">
                <button><img src={img1} alt="" /></button>
            </div>
            <div className="h1-p">
                <h1>Trending podcasts</h1>
                <p>Get started on trending episodes</p>
            </div>
            </div>
            <div className="all-blog">
                <a href="#">see all podcasts</a>
            </div>
        </div>
        <div className="blog-tiles">
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

export default Blogs;
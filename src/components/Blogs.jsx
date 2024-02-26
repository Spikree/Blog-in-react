import img1 from '../images/ticket.png'
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
                <h1>Trending Blogs</h1>
                <p>Get started with a tranding block of this week</p>
            </div>
            </div>
            <div className="all-blog">
                <a href="#">see all Blogs</a>
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
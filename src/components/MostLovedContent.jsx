function MostLovedContent() {
    return <>
        <div className="Most-loved-content-main">
            <div className="content-main">
            <div className="user-bar">
                <img src="" alt="" />
                <h4>By {}</h4>
                <p>{}</p>
                <div className="category">
                    category: {}
                </div>
            </div>
            <div className="content-card">
                <h3 className="content-title">{}</h3>
                <img src="" alt="" />
                <p></p>
                <div className="content-logos">
                </div>
            </div>
            </div>
            <div className="user creator">
                <img src="" alt="" />
                <h4 className="name">{}</h4>
                <p className="category"></p>
                <p className="user-bio"></p>
                <h4>Follow me on</h4>
                <p className="email">{}</p>
                <p className="twitter"></p>
            </div>
        </div>
    </>
}

export default MostLovedContent;
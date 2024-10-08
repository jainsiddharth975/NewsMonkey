import React, { Component } from 'react'

export class NewsAppNewsItem extends Component {

    render() {
        let {title, description, imageUrl, newsUrl} = this.props;
        return (
            <div className='my-3'>
                <div className="card" style={{width: "18rem"}}>
                    <img src={imageUrl?imageUrl:"https://dishub.kaltimprov.go.id/upload/playlist/small_no_photo.png"} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title"> {title}...</h5>
                            <p className="card-text">{description}...</p>
                            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsAppNewsItem

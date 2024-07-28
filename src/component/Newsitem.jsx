import React, { Component } from 'react'

export class newsitem extends Component {
  morebtn=async()=>{
    
    
   
   
  }
  render() {
     const {title,description,imgurl,newsurl,publishedAt}=this.props;
    return (
      <div className="">
        <div className="card item-back text-white" style={{width:'18rem'}}>
  <img src={imgurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title.split(' ').slice(0, 10)}</h5>
    <p className="card-text text-secondary">{description.split(' ').slice(0, 15)}</p>
    <div className=' my-2 text-secondary'>
  <p>Published At {publishedAt.substring(0,10)}</p>
  
  </div>
    <a href={newsurl} target='_blank' className="btn btn-primary item-back btn-hover  text-white" onClick={this.morebtn}>Readmore</a>
  </div>
  
  </div>
    </div>
    )
  }
}

export default newsitem

import './styles/Platform.css'
const Platform = (props)=> {

    console.log(props)
    return (
        <div className="gird">
             {/* {props.newArrs.map((newArr)=>(
                <a href={newArr.url}>Platform Link</a>
            ))} */}
             {props.platforms.map((platform)=>(
<div key={platform.country} >
 <h3>Available on: {platform.platforms[0]}</h3>
 <h4>{platform.title}</h4>
 <h5>{platform.artistName}</h5>
    <img src={`${platform.thumbnailUrl}` } alt="album cover"/>
</div> 
                ))
            }
              
        </div>
    )
}

export default Platform
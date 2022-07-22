import './styles/Search.css'

const Search = (props)=> {

    console.log(props)
    return (
        <div className="search">
            <h1>Search for a song where it's available</h1>
            <h4>Have a link of a song on a music platform? This APP gives you the ability to find all the platforms where they are available.</h4>
            <p>Powered by <a className="link-style" href='https://www.notion.so/Songlink-Odesli-Help-Center-3199bae513d64630aee445acffb3a977'>Songlink/Odesli</a></p>

        <input  value={props.newInput} type="text" name="songURL" placeholder='Copy and paste an URL' onChange={props.handleChange}/>
       
        <button className="find-platform" onClick={props.search}>Search</button>       
        </div>
    )
}

export default Search
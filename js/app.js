import React, {useState,useEffect} from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import img from "../img/ocean-3605547_1920.jpg";
const Form = () => {
    const [photos, setPhotos] = useState([]);
    const [result, setResult] = useState([]);

    function handleChange(e) {
        setPhotos(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(photos);
        const url = "https://api.unsplash.com/search/photos?page=1&query=" + photos + "&client_id=WCycFH5EcjkYL3ayD5-HnxIqIXfbIP3HnZ33T9EoYzc";
        axios.get(url).then(response => {
            console.log(response);
            setResult(response.data.results)
        });
    }

    // useEffect(() => {
    //     fetch("https://api.unsplash.com/search/photos?page=1&query=" + photos + "&client_id=WCycFH5EcjkYL3ayD5-HnxIqIXfbIP3HnZ33T9EoYzc", {
    //         method: "GET"
    //
    //     }).then(res => res.json())
    //         .then(res => setResult(res.data))
    //         .catch(error => console.log(error))
    // },[]);
    return (
        <>
            <img style={{height:'250px', width:'700px'}} src={img}/>
        <form onSubmit={handleSubmit}>
            <h1>Unsplash</h1>
            <p>The interest's source of freely-useable images.</p>
            <p>Powered by creators everywhere.</p>
            <input onChange={handleChange}   type='text' placeholder='Search free high-resolution'/>
            <p>Trending: flower, wallpapers, backgrounds, happy, love</p>
            </form>
            <ul>
                {result.map(photo => {
                    return (
                        <li key={photo.id}>
                            <img src={photo.urls.small}/>
                        </li>
                    );
                })}
            </ul>
        </>
    )
}

ReactDOM.render(<Form/>, document.getElementById("app"));


import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

let Home = () => {
    let [img, setImg] = useState([]);
    let [search, setSearch] = useState("car,home");
    let navigate = useNavigate();

    useEffect(() => {
        if (search) {
            axios.get(`https://pixabay.com/api/?key=44939454-f8eacba456d915034a303e757&q=${search}&image_type=photo`)
                .then(response => {
                    setImg(response.data.hits);
                })
                .catch(error => {
                    console.error("Error fetching data:", error);
                });
        }
    }, [search]);

    let gotologin = () => {
        navigate('/Login');
    };

    let gotoImageInfo = (image) => {
        navigate('/ImageInfo', { state: { image } });
    };

    return (
        <>
            <div id="search-page">
                <h1 id="titel">Pixabay</h1>
                <div id="buttons">
                    <button id="login-butt" onClick={gotologin}>Login</button>
                    <button id="join-butt">Join</button>
                    <button id="upload-butt"><i className="fa-solid fa-upload"></i>upload</button>
                </div>
                <h1>Stunning royalty-free images & royalty-free stock</h1>
                <p>Over 4.6 million+ high quality stock images, videos, and music shared by our talented 
                  community.</p>
                <div id="search-bar">
                    <i style={{color:"gray", marginLeft:"10px"}} className="fa-solid fa-magnifying-glass"></i>
                    <input id="searchInput"
                        type="search" 
                        onChange={e => setSearch(e.target.value)} 
                        placeholder="Search for all images on Pixabay" 
                    />
                    <h6 style={{color:"gray"}}>All images</h6>
                </div>
            </div>
            
            <nav>
                <ul>
                    <li><i className="fa-solid fa-house"></i>Home</li>
                    <li><i className="fa-solid fa-camera"></i>Photos</li>
                    <li><i className="fa-solid fa-paintbrush"></i>Illustrations</li>
                    <li><i className="fa-solid fa-pen-fancy"></i>Vectors</li>
                    <li><i className="fa-solid fa-video"></i>Videos</li>
                    <li><i className="fa-solid fa-music"></i>Music</li>
                    <li>Sound Effects</li>
                    <li><i className="fa-solid fa-fire-flame-curved"></i>GIFs</li>
                </ul>
            </nav>
            <br /><br /><br />
            <div id="images">
                {img.map(x => (
                    <div key={x.id} onClick={() => gotoImageInfo(x)}>
                        <img src={x.webformatURL} alt={x.user} style={{width: "200px", borderRadius:"20px"}} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default Home;
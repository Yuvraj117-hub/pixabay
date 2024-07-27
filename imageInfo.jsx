import { useLocation, useNavigate } from "react-router-dom";    
let ImageInfo = () => {
    let location = useLocation();
    let { image } = location.state;
    let navigate=useNavigate()
      let gotologin = () => {
        navigate('/Login');
    };

    return (
        <>
             <div  style={{display:"flex",justifyContent:"space-evenly",height:'60px',backgroundColor:"gray"}}>
            <h1 style={{marginRight:'30vw'}}>pixabay</h1>
             <div  style={{display:"flex",justifyContent:"space-evenly",width:'30vw'}}>
            <button id="login-butt" onClick={gotologin}>Login</button>
             <button id="join-butt">Join</button>
            <button id="upload-butt"><i className="fa-solid fa-upload"></i>upload</button>
                </div>
            </div>
            <br /><br />
        <div style={{
            width: "100%",
            // backgroundColor:"#6dd5ed",
            backgroundSize: "cover",
            display: "flex",
            justifyContentcenter: "center",
            alignItems: "center",
            flexDirection: "column",
        }}>
            <img src={image.webformatURL} alt={image.user} style={{ width: "80%", borderRadius: "20px" }} />
            <div style={{fontSize:'2rem'}}>
            <p>User: {image.user}</p>
            <p>Tags: {image.tags}</p>
            <p>Views: {image.views}</p>
            <p>Downloads: {image.downloads}</p>
                <p>Likes: {image.likes}</p>
                </div>
            </div>
            </>
    );
};

export default ImageInfo;
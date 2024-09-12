/* eslint-disable react/prop-types */
import "./Banner.css"

function Banner(props){
    return(
     <div className="website-cover" style={{backgroundImage:`url(${props.bgPic})`,
     backgroundRepeat: "no-repeat",
     backgroundSize: "cover",
     backgroundPosition: "center",
     }}>
        <div className="cover-content">
        <img src={props.webLogo} className="website-logo" />
        <label className="main-title">{props.title}</label>
        <div className="routing">
            <label className="main-route">{props.text}</label>
            <img src={props.rightArrow}/>
            <label className="second-route">{props.title}</label>
        </div>
        </div>
     </div>
    )
}

export default Banner;
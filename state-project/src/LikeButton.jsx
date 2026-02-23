import { useState } from "react";

export default function LikeButton() {
    let [click, setClick] = useState(false);
    let [clicks,setClicks]=useState(0);

    let toggle = () => {
        setClick(!click);
        setClicks(clicks+1);
        console.log("Like button click");
    };

    return (
        <div>
            <h1 onClick={toggle}>
                {
                    click
                    ? <i className="fa-solid fa-heart" style={{color:"red"}}></i>
                    : <i className="fa-regular fa-heart"></i>
                }
            </h1>
            <h2>Like={clicks}</h2>
        </div>
    );
}
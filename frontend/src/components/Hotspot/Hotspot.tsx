import "./Hotspot.css";

interface Props{
    top:string;
    left:string;
    width:string;
    height:string;
    onClick:()=>void;
}

const Hotspot=({
    top,
    left,
    width,
    height,
    onClick
}:Props)=>{

    return(

        <div
            className="hotspot"

            style={{
                top,
                left,
                width,
                height
            }}

            onClick={onClick}

        />

    );

};

export default Hotspot;
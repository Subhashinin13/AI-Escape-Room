import "./RoomCard.css";

interface RoomCardProps {

    roomNumber: number;

    title: string;

    description: string;

    unlocked: boolean;

    onClick?: () => void;

}

const RoomCard = ({
    roomNumber,
    title,
    description,
    unlocked,
    onClick
}: RoomCardProps) => {

    return (

        <div
            className={`room-card ${unlocked ? "unlocked" : "locked"}`}
        >

            <h2>Room {roomNumber}</h2>

            <h3>{title}</h3>

            <p>{description}</p>

            <button
                disabled={!unlocked}
                onClick={onClick}
            >
                {unlocked ? "Enter Room" : "Locked"}
            </button>

        </div>

    );

};

export default RoomCard;
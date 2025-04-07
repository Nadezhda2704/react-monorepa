import { useParams } from "react-router-dom";

export const PatternPage = () => {
    const { patternId } = useParams() as { patternId: string };
    return (
        <div>
            <h1>Паттерн {patternId}</h1>
            <p>description</p>
            <div>
                <a href="#">read book</a>
                <a href="#">view video</a>
            </div>
        </div>
    )
}
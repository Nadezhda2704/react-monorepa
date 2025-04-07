import { useParams } from "react-router-dom";
import { GetPatternRouteParams } from '../../lib/routes'

export const PatternPage = () => {
    const { patternId } = useParams() as GetPatternRouteParams;
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
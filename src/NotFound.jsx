import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>We scoured the ages...</h2>
            <p>But that page was nowhere to be found. </p>
            <Link to="/">Pack up and go Home</Link>
        </div>
     );
}
 
export default NotFound;
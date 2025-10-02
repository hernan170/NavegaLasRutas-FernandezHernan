import Spinner from 'react-bootstrap/Spinner';
import "./loader.css"

const Loader = () => {
  return (
    <div className="loader-container">
         <Spinner animation="border" variant="primary" />
    </div>
  )
}

export default Loader
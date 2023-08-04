import "./house.css";

const House  = ({house}) => {
    return ( 
        <div>
            <div>
                <h5 className="col-md-12">{house.country}</h5>
            </div>
        </div>
     );
}
 
export default House ;
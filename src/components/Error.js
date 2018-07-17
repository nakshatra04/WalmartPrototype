import React from "react"

const Error = props => (
    <div>
        {props.error && <h3 className="item_error">Service Failed with Error : {props.error}</h3>}
    </div>

)
export default Error;

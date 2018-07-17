import React from "react"

const Form = props => (
	<div>
		<form onSubmit={props.getItems}>
    		<input type="text" name="searchText" autoCorrect="on" placeholder="Search ..."/>
    		<button> Search </button>
 		</form>
	</div>

)
export default Form;

// ## Stylesheet
//
// Represents a Combo Stylesheet.
//
Combo.Stylesheet = class {
	// **constructor**
	//
	// The constructor function.
	//	
	constructor(id = "combo", selectors = {}) {
		var result = "";
		//
		// Iterate through each selector in the selectors object.
		//
		for(var selector in selectors) {
			//
			// Begin the selector code block.
			//
			result += `${selector}{`;
			
			//
			// Iterate through each property in the selector object.
			//
			for(var prop in selectors[selector]) {

			}

			//
			// End the selector code block.
			//
			result += "}";
		}
		alert(result);
	}
};

// ## Stylesheet
//
// Represents a stylesheet.
//
Combo.Stylesheet = class {
	// **constructor**
	//
	// The constructor function.
	//	
	constructor(styles = {}) {
		for(var style in styles) {
			var result = "";

			for(var rule in styles[style]) {
				result += `${rule}:${styles[style][rule]};`;
			}

			this[style] = result;
		}
	}
};

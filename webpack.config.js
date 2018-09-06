// require --------------------------------------------------------------------

const path 			= require("path");

// exports --------------------------------------------------------------------

module.exports = {

	// mode -------------------------------------------------------------------

	mode: "production",

	// entry ------------------------------------------------------------------

	entry: "./src/combo.js",

	// output -----------------------------------------------------------------

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: "combo.js",
		library: "Combo",
		libraryTarget: "umd",
		umdNamedDefine: true
	},

	// module -----------------------------------------------------------------

	module: {

		// rules --------------------------------------------------------------

		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			}
		]
	}
};

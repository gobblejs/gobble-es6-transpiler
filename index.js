module.exports = es6transpiler;

function es6transpiler ( code, options ) {
	var transpiled;

	options.src = code;
	transpiled = require( 'es6-transpiler' ).run( options );

	if ( transpiled.errors.length ) {
		throw new Error( 'Errors transpiling code: ' + JSON.stringify( transpiled.errors ) );
	}

	return transpiled.src;
}

es6transpiler.defaults = {
	accept: '.js'
};

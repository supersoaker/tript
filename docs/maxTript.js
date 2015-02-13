/**
 * Tript template Engine
 * @param {String} t template
 * @param {Object} [c] context
 * @param {undefined} [_] placeholder for output
 * @returns {String}
 * @constructor
 */
function T(t, c, _) {
	return c && eval( T._getTmplStr(t) )
	|| T.getTmplFunc( t );
}
/**
 * Get function string
 * @param {String} t
 * @param {undefined} [r] placeholder
 * @returns {string}
 * @private
 */
T._getTmplStr = function(t, r) {
	return "with(c||{}){_='';" +
	t[r = "replace"](/(<\w+ *.*>.*<\/\2>)|(<\w+ *.*>)|(<\/\w+>)/g, function(p, a, b, c, d) {
		return '_+="'+
		(a || c || d)
			// replace quotes

			[r](/"/g, '\\"')
			// inline javascript
			[r](/{{(.*?)}}/g, function(a,b) {
			return '"+T.prerender(' +(b[r](/\\"/g, '"')) + ')+"';
		})
		+'";'
	}) + "}"
};
/**
 *
 * @param t
 * @returns {Function}
 */
T.getTmplFunc = function( t ) {
	return new Function('c', '_', T._getTmplStr(t) + 'return _');
};
T.prerender = function( str ) {	return str; };

/**
 * Tript template Engine
 * @param {String} t template
 * @param {Object} [c] context
 * @param {String} [r] placeholder for replace string
 * @param {String} [s] placeholder for function string
 * @param {String} [_] placeholder for output
 * @returns {Function | String}
 * @constructor
 */
function T(t, c, r, s, _) {
	s = "with(c||{}){_='';" +
	// match html-tags
	t[r = "replace"](/(<\w.*>)|(<\/\w+>)/g, function(p, a, b) {
		return '_+="'+
			(a || b)
				// replace quotes
				[r](/"/g, '\\"')
				// inline javascript
				[r](/{{(.*?)}}/g, '"+T.r($1)+"') +'";'
	}) + "}";
	return c && eval( s )
		|| new Function( 'c', '_', s + 'return _' );
}
T.r = function( s ) {	return s; };

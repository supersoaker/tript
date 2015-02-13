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
function Tript(t, c, r, _) {
    return eval("with(c||{}){_='';" +
        // match html-tags
    t[r = "replace"](/(<.*)/g, function(p, a) {
        return '_+="'+ a
            // replace quotes
            [r](/"/g, '\\"')
            // inline javascript
            [r](/{{(.*?)}}/g, '"+($1)+"') +'";'
    }) + "}");
}
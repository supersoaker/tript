### tript

> A tiny Template-Engine (164 bytes) mixing up HTML and pure JavaScript in one template

tript is a tiny and simple template-engine which allows you to mixup JavaScript and HTML.<br>
Easy as pie you combine both languages - access variables - manipulate content - loop the hell through stuff and finally destroy the world, but this time in one template!<br>

#### Demo

Go check out [this demo](http://codepen.io/misantronic/pen/ogNbBa) at codepen.io.

#### Usage Example

```html
<!-- Embed tript -->
<script src="tript.min.js"></script>

<!-- TEMPLATE -->
<script id="template" type="text/html">
	<div id="posts">
		for(var i in posts) {
			<div class="post">
				var title = posts[i].title,
					date = posts[i].date,
					body = posts[i].body;

				<h2>#{{i}}, {{title}} on {{date.format()}}</h2>
				<p>{{body}}</p>
			</div>
		}
	</div>
</script>
```

```javascript
// set context
var context = {
	app: 'tript',
	headline: 'A tiny Template-Engine mixing up HTML and pure JavaScript in one template',
	description: 'tript is a freakin\' tiny template-engine which allows you to mixup JavaScript and HTML.',
	posts: [
		{
			title: 'Big News',
			date: new Date('2014-11-14'),
			body: 'tript is great!'
		},
		{
			title: 'Bad News',
			date: new Date('2014-11-11'),
			body: "tript doesn't exist yet :("
		}
	]
};
```
#### minTript.js

The minimalistic Script (164 Byte)

###### Usage
```javascript
document.body.innerHTML = Tript(template.innerHTML, context);
```

###### Code
```javascript
function Tript(t,c,r,_){return eval("with(c||{}){_='';"+t[r="replace"](/(<.*)/g,function(p,a){return'_+="'+a[r](/"/g,'\\"')[r](/{{(.*?)}}/g,'"+($1)+"')+'";'})+"}")}
```

#### Tript.js

the normal Tript script, contains the minimalistic script, helpers and precompilers

###### Usage
```javascript
var myNewTemplate = Tript(template.innerHTML);
document.body.innerHTML = myNewTemplate(context);
```

###### Code
```javascript
function Tript(t,c,r,s,_){return s="with(c||{}){_='';"+t[r="replace"](/(<.*)/g,function(p,a){return'_+="'+a[r](/"/g,'\\"')[r](/{{(.*?)}}/g,'"+Tript.$($1)+"')+'";'})+"}",c&&eval(s)||new Function("c","_",s+"return _")}Tript.$=function(s){return s};
```

(helpers will follow)

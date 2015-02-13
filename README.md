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
	<div id="content">
		<h1>my awesome {{app}} blog</h1>
		<div style="font-weight: bold;">{{headline}}</div>
		<p>{{description}}</p>

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

		var fav_animal = "Crow";
		<p>Your should know: my favorite animal is the <b>{{fav_animal}}</b>.</p>
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

#### Tript.js

the normal Tript script, contains the minimalistic script, helpers and precompilers

###### Usage
```javascript
var myNewTemplate = Tript(template.innerHTML);
document.body.innerHTML = myNewTemplate(context);
```

(helpers will follow)
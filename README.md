### tript

> A tiny Template-Engine mixing up HTML and pure JavaScript in one template

tript is a freakin' tiny template-engine which allows you to mixup JavaScript and HTML.<br>
It's as easy as pie! You combine both languages - access variables - manipulate content - loop your way through your content - destroy the world, but this time in one template!<br>
And the best part: tript is so small! Only **224 bytes**!!   

#### Example

```html
<!-- Embed tript -->
<script src="tript.min.js"></script>

<!-- TEMPLATE -->
<script id="template" type="text/html">
	<div id="content">
		<p>Start of container</p>
	
		var tests = [ { name: 'David' }, { name: 'Max' }, { name: 'Bob' } ];
		var _animal = "Crow";
	
		for(var i in tests) {
			<h1>
				<b>Headline $i for $user</b>
			</h1>
			<pre>Hallo <% tests[i].name %></pre>
			<p>Test $i</p>
		}
	
		<p>The Animal: $_animal</p>
		<p>End of container</p>
	</div>
</script>
```

```javascript
// set context
var context = {
	user: 'David Skx'
};

// parse template, append to body
document.body.innerHTML = T(template.innerHTML, context);
```

#### Demo

Go check out [this demo](http://codepen.io/misantronic/pen/ogNbBa) at codepen.io
# AJAX

### Table of Contents

- [How do I populate data using AJAX?](#how-do-i-populate-data-using-ajax)

### How do I populate data using AJAX?

Make the request inside the `mounted` lifecycle method.

	var Foo = new class extends Combo.Component {
		created() {
			this.update({
				text: ""
			});
		}
		mounted() {
			window.fetch(this.data.url)
				.then((response) => {
					return response.text();
				})
				.then((text) => {
					this.update({
						text: text
					})
				});
		}
		render() {
			return `
				${this.data.text}
			`;
		}
	}();

	Foo.mount(document.getElementById("root"), {
		url: "bar.html"
	});


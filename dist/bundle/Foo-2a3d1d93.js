import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, b as space, c as add_location, f as insert_dev, n as noop, g as detach_dev } from './main-a10dcedb.js';

/* src/pages/Foo.svelte generated by Svelte v3.22.2 */

const file = "src/pages/Foo.svelte";

function create_fragment(ctx) {
	let h1;
	let t1;
	let p0;
	let t3;
	let p1;

	const block = {
		c: function create() {
			h1 = element("h1");
			h1.textContent = "Foo";
			t1 = space();
			p0 = element("p");
			p0.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse nemo, similique veniam? Fugit ullam eius, corrupti quibusdam qui, eum nam vero dolore quia repudiandae quasi asperiores pariatur nulla debitis est!";
			t3 = space();
			p1 = element("p");
			p1.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse nemo, similique veniam? Fugit ullam eius, corrupti quibusdam qui, eum nam vero dolore quia repudiandae quasi asperiores pariatur nulla debitis est!";
			add_location(h1, file, 0, 0, 0);
			add_location(p0, file, 2, 0, 14);
			add_location(p1, file, 3, 0, 232);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, h1, anchor);
			insert_dev(target, t1, anchor);
			insert_dev(target, p0, anchor);
			insert_dev(target, t3, anchor);
			insert_dev(target, p1, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(p0);
			if (detaching) detach_dev(t3);
			if (detaching) detach_dev(p1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props) {
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Foo> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Foo", $$slots, []);
	return [];
}

class Foo extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Foo",
			options,
			id: create_fragment.name
		});
	}
}

export default Foo;

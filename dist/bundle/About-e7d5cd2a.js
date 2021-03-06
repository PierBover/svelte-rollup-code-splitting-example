import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, b as space, c as add_location, f as insert_dev, n as noop, g as detach_dev } from './main-a10dcedb.js';

/* src/pages/About.svelte generated by Svelte v3.22.2 */

const file = "src/pages/About.svelte";

function create_fragment(ctx) {
	let h1;
	let t1;
	let p;

	const block = {
		c: function create() {
			h1 = element("h1");
			h1.textContent = "About";
			t1 = space();
			p = element("p");
			p.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste cum in suscipit nam, minima sapiente nostrum! Sapiente, dicta aspernatur quae ipsam assumenda? Perspiciatis animi alias autem laboriosam quaerat minima dolore?";
			add_location(h1, file, 0, 0, 0);
			add_location(p, file, 2, 0, 16);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, h1, anchor);
			insert_dev(target, t1, anchor);
			insert_dev(target, p, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(p);
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
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<About> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("About", $$slots, []);
	return [];
}

class About extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "About",
			options,
			id: create_fragment.name
		});
	}
}

export default About;

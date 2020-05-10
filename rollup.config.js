import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import del from 'rollup-plugin-delete'

const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/main.js',
	output: {
		dir: 'dist/bundle',
		name: 'app',
		format: "es",
		name: '[name].js'
	},
	plugins: [
		svelte({
			dev: !production,
			css: css => {
				css.write('dist/bundle/styles.css');
			}
		}),
		resolve({
			browser: true,
			dedupe: ['svelte']
		}),
		!production && serve(),
		del({ targets: 'dist/bundle/*' })
	]
};

function serve() {
	let started = false;

	return {
		writeBundle() {
			if (!started) {
				started = true;

				require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
					stdio: ['ignore', 'inherit', 'inherit'],
					shell: true
				});
			}
		}
	};
}

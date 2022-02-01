<script lang="ts">
	import { spring } from 'svelte/motion';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	type CellIndex = `${number}:${number}`;

	let urlPattern: string | undefined | null;
	let urlZoom: string | undefined | null;
	onMount(() => {
		// use hash for gh-pages
		const searchParams = new URLSearchParams($page.url.hash.replace('#', ''));
		urlPattern = searchParams.get('pattern');
		urlZoom = searchParams.get('zoom');
	});

	let height: number = 0;
	let width: number = 0;
	let offset = 0;
	let rectSize = 50;
	let interval: NodeJS.Timer;
	let speed = 200;

	export let playing = false;
	export let aliveCells: CellIndex[] = [];

	$: xRectsCounts = Math.floor(width / rectSize) + 1 ?? 0;
	$: yRectsCounts = Math.floor(height / rectSize) + 1 ?? 0;

	const smoothRectSize = spring(rectSize, { damping: 1, precision: 1, stiffness: 1 });
	$: smoothRectSize.set(rectSize);

	$: {
		if (urlPattern !== undefined && urlPattern !== null) {
			aliveCells = JSON.parse(decodeURI(urlPattern));
		}
		if (urlZoom !== undefined && urlZoom !== null) {
			rectSize = JSON.parse(decodeURI(urlZoom));
		}
	}

	function getNeighboors(coords: { x: number; y: number }) {
		const neighboors: CellIndex[] = [];
		for (let x = -1; x <= 1; x++) {
			for (let y = -1; y <= 1; y++) {
				const neighboorX = x + coords.x;
				const neighboorY = y + coords.y;
				if (neighboorX === coords.x && neighboorY === coords.y) {
					continue;
				}
				neighboors.push(`${neighboorX}:${neighboorY}`);
			}
		}
		return neighboors;
	}

	function giveLife(x: number, y: number) {
		stop();
		const key = `${x}:${y}` as const;
		if (aliveCells.includes(key)) {
			aliveCells = aliveCells.filter((curKey) => curKey !== key);
		} else {
			aliveCells = [...aliveCells, key];
		}
	}

	function onScroll(e: WheelEvent) {
		if (e.deltaY < 0) {
			rectSize += 2;
		}
		if (e.deltaY > 0 && rectSize >= 10) {
			rectSize -= 2;
		}
		console.log(rectSize);
	}

	function nextTick() {
		const newAlive: CellIndex[] = [];

		const [minX, maxX, minY, maxY] = aliveCells.reduce(
			([minX, maxX, minY, maxY], curIndex) => {
				const [x, y] = curIndex.split(':').map((number) => parseInt(number, 10));
				return [Math.min(minX, x), Math.max(maxX, x), Math.min(minY, y), Math.max(maxY, y)];
			},
			[+Infinity, -Infinity, +Infinity, -Infinity]
		);

		for (let x = minX - 1; x <= maxX + 1; x++) {
			for (let y = minY - 1; y <= maxY + 1; y++) {
				const key = `${x}:${y}` as const;
				const isAlive = aliveCells.includes(key);
				const neighboors = getNeighboors({ x, y });
				const alivedNeighboors = neighboors.filter((neighboor) =>
					aliveCells.includes(neighboor)
				).length;

				if (isAlive && (alivedNeighboors === 2 || alivedNeighboors === 3)) {
					newAlive.push(key);
				} else if (alivedNeighboors === 3) {
					newAlive.push(key);
				}
			}
		}
		aliveCells = newAlive;
	}

	function play() {
		playing = true;
		interval = setInterval(nextTick, speed);
	}

	function stop() {
		playing = false;
		clearInterval(interval);
	}

	function faster() {
		if (speed <= 20) {
			return;
		}
		speed -= 20;
		clearInterval(interval);
		interval = setInterval(nextTick, speed);
	}

	function slower() {
		speed += 20;
		clearInterval(interval);
		interval = setInterval(nextTick, speed);
	}

	function copyPattern() {
		const params = new URLSearchParams('');

		params.set('pattern', encodeURI(JSON.stringify(aliveCells)));
		params.set('zoom', rectSize.toString());

		goto(`#?${params.toString()}`, {
			keepfocus: true,
			replaceState: true,
			noscroll: true
		});

		window.navigator.clipboard.writeText(window.location.href);
	}
</script>

<svelte:window on:wheel={onScroll} />

<div class="grid" bind:clientHeight={height} bind:clientWidth={width}>
	<div class="actions">
		<button class="reset" on:click={() => (aliveCells = [])}>Clear</button>
		<button class="start" on:click={playing ? stop : play}>{playing ? 'Stop' : 'Start'}</button>
		<button class="start" on:click={copyPattern}>Copy</button>
		<div class="speed">
			<button on:click={slower}>-</button>
			<button on:click={faster}>+</button>
		</div>
	</div>
	<span class="counter">{speed / 1000} / s</span>
	<svg width="100%" height="100%">
		{#each Array(xRectsCounts) as _, x}
			{#each Array(yRectsCounts) as _, y}
				<rect
					class="rect"
					class:selected={aliveCells.includes(`${x}:${y}`)}
					x={x * $smoothRectSize}
					y={y * $smoothRectSize}
					width={$smoothRectSize - offset}
					height={$smoothRectSize - offset}
					on:click={() => giveLife(x, y)}
					rx={Math.log($smoothRectSize)}
					ry={Math.log($smoothRectSize)}
				/>
			{/each}
		{/each}
	</svg>
</div>

<style>
	.grid {
		width: 100%;
		height: 100%;
	}
	.actions {
		position: fixed;
		bottom: 2%;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		gap: 2rem;
		opacity: 0.1;
		transition: opacity 0.4s;
	}
	.actions:hover {
		opacity: 1;
	}
	button {
		text-transform: uppercase;
		font-size: 2rem;
		padding: 15px 40px;
		background-color: green;
		border: none;
		cursor: pointer;
	}

	.speed {
		display: flex;
		flex-direction: column;
		gap: 1px;
	}

	.counter {
		position: fixed;
		top: 95%;
		left: 1%;
		color: green;
		text-align: center;
	}
	.rect {
		pointer-events: all;
		transition: fill 0.1s ease;
	}
	.rect:hover {
		fill-opacity: 50%;
	}
	.selected {
		fill: #800080;
	}
</style>

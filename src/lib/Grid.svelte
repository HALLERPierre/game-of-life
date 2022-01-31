<script lang="ts">
	import { spring } from 'svelte/motion';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	type CellIndex = `${number}:${number}`;

	let urlPattern: string | undefined | null;
	let urlZoom: string | undefined | null;
	onMount(() => {
		urlPattern = $page.url.searchParams.get('pattern');
		urlZoom = $page.url.searchParams.get('zoom');
	});

	let height: number = 0;
	let width: number = 0;
	let offset = 2;
	let rectSize = 50;
	let interval: NodeJS.Timer;
	export let playing = false;

	export let alivedCells: CellIndex[] = [];

	$: xRectsCounts = Math.floor(width / rectSize) + 1 ?? 0;
	$: yRectsCounts = Math.floor(height / rectSize) + 1 ?? 0;

	const smoothRectSize = spring(rectSize);
	$: smoothRectSize.set(rectSize);

	$: {
		if (urlPattern !== undefined && urlPattern !== null) {
			alivedCells = JSON.parse(decodeURI(urlPattern));
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
				if (
					neighboorX < 0 ||
					neighboorY < 0 ||
					neighboorX > xRectsCounts ||
					neighboorY > yRectsCounts ||
					(neighboorX === coords.x && neighboorY === coords.y)
				) {
					continue;
				}
				neighboors.push(`${neighboorX}:${neighboorY}`);
			}
		}
		return neighboors;
	}

	function giveLife(x: number, y: number) {
		const key = `${x}:${y}` as const;
		if (alivedCells.includes(key)) {
			alivedCells = alivedCells.filter((curKey) => curKey !== key);
		} else {
			alivedCells = [...alivedCells, key];
		}
	}

	function onScroll(e: WheelEvent) {
		if (e.deltaY < 0) {
			rectSize += 2;
		}
		if (e.deltaY > 0 && rectSize > 20) {
			rectSize -= 2;
		}
	}

	function nextTick() {
		const newAlive: CellIndex[] = [];
		for (let x = 0; x < xRectsCounts; x++) {
			for (let y = 0; y < yRectsCounts; y++) {
				const isAlive = alivedCells.includes(`${x}:${y}`);
				const neighboors = getNeighboors({ x, y });
				const alivedNeighboors = neighboors.filter((neighboor) =>
					alivedCells.includes(neighboor)
				).length;
				console.log({ x, y, isAlive, neighboors });

				if (isAlive && (alivedNeighboors === 2 || alivedNeighboors === 3)) {
					newAlive.push(`${x}:${y}`);
				} else if (alivedNeighboors === 3) {
					newAlive.push(`${x}:${y}`);
				}
			}
		}
		alivedCells = newAlive;
	}

	function play() {
		playing = true;
		interval = setInterval(nextTick, 200);
	}

	function stop() {
		playing = false;
		clearInterval(interval);
	}
</script>

<svelte:window on:wheel={onScroll} />

<div class="grid" bind:clientHeight={height} bind:clientWidth={width}>
	<div class="actions">
		<button class="reset" on:click={() => (alivedCells = [])}>Clear</button>
		<button class="start" on:click={playing ? stop : play}>{playing ? 'Stop' : 'Start'}</button>
		<button
			class="start"
			on:click={() =>
				navigator.clipboard.writeText(
					`${window.location.origin}?pattern=${encodeURI(
						JSON.stringify(alivedCells)
					)}&zoom=${$smoothRectSize}`
				)}>Copy</button
		>
	</div>
	<svg width="100%" height="100%">
		{#each Array(xRectsCounts) as _, x}
			{#each Array(yRectsCounts) as _, y}
				<rect
					class={alivedCells.includes(`${x}:${y}`) ? 'selected' : 'rect'}
					x={x * $smoothRectSize}
					y={y * $smoothRectSize}
					width={$smoothRectSize - offset}
					height={$smoothRectSize - offset}
					on:click={() => giveLife(x, y)}
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
		padding: 25px 40px;
		background-color: green;
		border: none;
		cursor: pointer;
	}
	.rect {
		pointer-events: all;
	}
	.rect:hover {
		fill: #800080;
	}
	.selected {
		fill: #800080;
	}
	.selected:hover {
		fill: black;
	}
</style>

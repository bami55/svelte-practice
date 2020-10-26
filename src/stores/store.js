import { derived, writable } from 'svelte/store';

export const bo = writable(0);
export const rounds = writable(0);
export const times = writable(0);

export const roundTime = derived([bo, rounds, times], ([$bo, $rounds, $times]) => {
  let _bo = $bo ? $bo : 0;
  let _rounds = $rounds ? $rounds : 0;
  let _times = $times ? $times : 0;
  return _bo * _rounds * _times / 60;
});
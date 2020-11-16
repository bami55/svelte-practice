import { derived, writable } from 'svelte/store';

export const bo = writable(0);
export const rounds = writable(0);
export const times = writable(0);

export const roundTime = derived([bo, rounds, times], ([$bo, $rounds, $times]) => {
  let _bo = $bo ? $bo : 0;
  let _rounds = $rounds ? $rounds : 0;
  let _times = $times ? $times : 0;
  let _roundTime = _bo * _rounds * _times;
  let _hours = Math.floor(_roundTime / 60);
  let _minutes = _roundTime % 60;
  return `${_hours}時間${_minutes}分`;
});
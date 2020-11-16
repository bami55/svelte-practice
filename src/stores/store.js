import { derived, writable } from 'svelte/store';
import dayjs from 'dayjs';

export const bo = writable(0);
export const rounds = writable(0);
export const times = writable(0);
export const startedAt = writable(dayjs().set('h', 20).set('m', 0).set('s', 0));

export const roundTime = derived([bo, rounds, times], ([$bo, $rounds, $times]) => {
  let _bo = $bo ? $bo : 0;
  let _rounds = $rounds ? $rounds : 0;
  let _times = $times ? $times : 0;
  let _roundTime = _bo * _rounds * _times;
  let _hours = Math.floor(_roundTime / 60);
  let _minutes = _roundTime % 60;
  return `${_hours}時間${_minutes}分`;
});

export const matches = derived([bo, rounds, times, startedAt], ([$bo, $rounds, $times, $startedAt]) => {
  let _matches = [];
  let _started = $startedAt;
  console.log(_started);
  for (let i = 0; i < $rounds; i++) {
    _matches.push({
      started_at: _started.format('HH:mm'),
      round: i + 1,
      bo: $bo,
      times: $times,
    });
    _started = _started.add($bo * $times, 'm');
  }
  return _matches;
});
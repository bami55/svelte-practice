import { derived, writable, readable } from 'svelte/store';

export const obs = writable(null);
export const streamStatus = writable(0);

// const data = await obs.send('GetSceneList');

// obs.on('StreamStatus', (data) => {
//   streamStatus.set(data);
// });

// export const sourcesList = derived([obs], ([$obs]) => {
//   let _bo = $bo ? $bo : 0;
//   let _rounds = $rounds ? $rounds : 0;
//   let _times = $times ? $times : 0;
//   let _roundTime = _bo * _rounds * _times;
//   let _hours = Math.floor(_roundTime / 60);
//   let _minutes = _roundTime % 60;
//   return `${_hours}時間${_minutes}分`;
// });

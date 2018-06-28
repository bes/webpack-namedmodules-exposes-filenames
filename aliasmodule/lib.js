
export function loadChunk() {
  return import(/* webpackChunkName: 'dynamic-chunk' */ './dynamic')
    .then(console.log);
}

import "./index.js";
async function fetchRefresh(fetch, path) {
  const req = fetch(path);
  return req;
}
export {
  fetchRefresh as f
};

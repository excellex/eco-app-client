export async function apiGet(url) {
  return await (await fetch(url)).json();
}

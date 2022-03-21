export async function postForm(
  url,
  htmlFormElement,
) {
  const data = new URLSearchParams(new FormData(htmlFormElement));
  return fetch(url, {
    method: 'POST',
    body: data
  });
}

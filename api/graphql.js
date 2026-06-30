export default async function graphqlRequest(query) {
  const url = process.env.NEXT_CONTENT_API;
  const headers = { "Content-Type": "application/json" };

  const res = await fetch(url, {
    headers,
    method: "POST",
    body: JSON.stringify(query),
    next: { revalidate: 100 },
  });

  const resJson = await res.json();
  return resJson;
}

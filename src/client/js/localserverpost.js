export async function localServerPost(url, data) {
  console.log(`Inside the localserverpost function ${url} is ${typeof url}`);

  let response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  try {
    let newData = await response.json();
    console.log(`${JSON.stringify(newData)}`);
  } catch (error) {
    console.log(error);
  }
}

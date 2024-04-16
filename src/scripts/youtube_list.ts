export async function youtube_list(url: any) {
  try {
    const response = await fetch("http://localhost:5000/youtube-list", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    });

    return await response.json();
  } catch (error: any) {
    return error;
  }
}

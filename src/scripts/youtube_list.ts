export async function youtube_list() {
  const a = document.getElementById("url_input") as HTMLInputElement;
  const url = a?.value;
  const messageDiv = document.getElementById("message");

  if (!url) {
    if (messageDiv) {
      messageDiv.textContent = "Please enter a valid URL";
    }
    return;
  }

  try {
    const response = await fetch("http://localhost:5000/youtube-list", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    });

    const data = await response.json();

    return data;
  } catch (error: any) {
    return error;
  }
}

import express from "express";
const app = express();
const PORT = 8081;

app.get("/api/image/random", async (req, res) => {
  const key = "cmM5mJtLxJ4MkztydsUq4CrXaTEom2YunJ7Q8y7rPjI";

  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?client_id=${key}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(`Image fetched successfully: ${data.urls.regular}`);
    res.json({ imageUrl: data.urls.regular });
  } catch (error) {
    console.error("Error fetching image:", error);
    res.status(500).json({ error: "Failed to fetch image" });
  }
});

app.listen(PORT, () => {
  console.log("listenig");
});

export async function getReviews() {
  const res = await fetch("/api/google-reviews", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch reviews");
  }

  return res.json();
}
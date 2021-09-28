export const lowest_rated = (data) => {
  const score = (b) => (b.review_count * b.rating) / (b.review_count + 1);
  return [...data.sort((a, b) => (score(a) > score(b) ? 1 : -1))];
};

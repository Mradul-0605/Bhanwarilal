export const getSweets = async () => {
  const res = await fetch(
    "http://localhost:5000/sweets"
  );

  return res.json();
};
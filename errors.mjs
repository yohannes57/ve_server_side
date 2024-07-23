export const errors = (res, err) => {
  console.error(err);
  res.status(500).json({ error: "sth wrong while creating product" });
};

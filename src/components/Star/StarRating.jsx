function StarRating({ stars }) {
  const ratings = [1, 2, 3, 4, 5];
  return (
    <div>
      {ratings.map((star) => (
        <i
          key={star}
          className={
            star <= stars
              ? "bi bi-star-fill text-warning"
              : "bi bi-star text-warning"
          }
          style={{
            fontSize: "12px",
            marginRight: "4px",
          }}
        ></i>
      ))}
    </div>
  );
}

export default StarRating;

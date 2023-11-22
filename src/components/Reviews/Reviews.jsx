import { MovieCard } from 'App.styled';

const Reviews = ({ reviews, reviewTotal }) => {
  console.log(reviewTotal);
  return (
    <MovieCard>
      {reviewTotal > 0 ? (
        <div>
          <h3 style={{ marginInline: 40, marginBlock: 25 }}>REVIEWS:</h3>
          <ul style={{ lineHeight: 1.4 }}>
            {reviews?.map(review => (
              <li key={review.id}>
                <h4>{review.author}</h4>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : reviewTotal === 0 ? (
        <p>Sorry, no reviews...</p>
      ) : null}
    </MovieCard>
  );
};
export default Reviews;

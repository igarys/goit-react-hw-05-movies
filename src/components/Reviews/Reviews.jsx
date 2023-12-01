import { MovieCard } from 'App.styled';
import {  useOutletContext } from 'react-router-dom';

const Reviews = () => {
  const { reviewLists, reviewTotal } = useOutletContext();

  return (
    <MovieCard>
      {reviewTotal > 0 ? (
        <div>
          <h3 style={{ marginInline: 40, marginBlock: 25 }}>REVIEWS:</h3>
          <ul style={{ lineHeight: 1.4 }}>
            {reviewLists?.map(reviewList => (
              <li key={reviewList.id}>
                <h4>{reviewList.author}</h4>
                <p>{reviewList.content}</p>
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

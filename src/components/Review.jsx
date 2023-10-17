const Review = ({ name, date, reviewText, rating, title }) => {
  return (
    <div className='review'>
      <div className='reviewInfo'>
        <p>{name}</p>
        <p>{date}</p>
      </div>
      <h3 className='heading_5'>{title}</h3>
      <p className='reviewText'>{reviewText}</p>
      <div className='reviewRating'>{rating} / 5</div>
    </div>
  );
};

export default Review;

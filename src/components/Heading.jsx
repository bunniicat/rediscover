const Heading = ({ text, type, customClasses }) => {
  if (type === 'h2') {
    return <h2 className={`heading_2 ${customClasses}`}>{text}</h2>;
  }

  if (type === 'h3') {
    return <h3 className={`heading_3 ${customClasses}`}>{text}</h3>;
  }
};

export default Heading;

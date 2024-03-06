const Concept = (props) => {
  const image = props.concept.image;
  const title = props.concept.title;
  const description = props.concept.description;

  return (
    <li className="concept">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
};

export default Concept;

import Concept from "./Concept";

const Concepts = (props) => {
  const concepts = props.concepts;
  return (
    <ul id="concepts">
      {concepts.map((concept) => (
        <Concept concept={concept} />
      ))}
    </ul>
  );
};

export default Concepts;

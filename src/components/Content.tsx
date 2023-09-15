import { CoursePart } from "../types";

const margin = { marginTop: 10 };

const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};

const Content = ({ parts }: { parts: CoursePart[] }) => {
  return (
    <div>
      {parts.map((part, idx) => (
        <div key={idx} style={margin}>
          <div>
            <strong>
              {part.name} {part.exerciseCount}
            </strong>
          </div>
          <Part key={`part-${idx}`} part={part} />
        </div>
      ))}
    </div>
  );
};

// render a list of div elements using the map function, and each of these div elements should have a unique "key" prop to help React efficiently update and re-render the components
const Part = ({ part }: { part: CoursePart }) => {
  switch (part.kind) {
    case "basic":
      return (
        <div>
          <i>{part.description}</i>
        </div>
      );
    case "background":
      return <div>Project material {part.backgroundMaterial}</div>;
    case "group":
      return (
        <div>
          <div>{part.groupProjectCount}</div>
        </div>
      );
    case "special":
      return (
        <div>
          <div>
            <i>{part.description}</i>
          </div>
          <div>
            Required skills:{" "}
            {part.requirements.map((skill) => skill).join(", ")}
          </div>
        </div>
      );
    default:
      return assertNever(part);
  }
};


export default Content;
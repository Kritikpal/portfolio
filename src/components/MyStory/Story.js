import MaterialCard from "./MaterialImage";

const Story = ({ title, body, image }) => {
  return (
    <div>
      <div
        style={{
          fontSize: "30px",
          fontWeight: "bold",
        }}
        className="story-title text-light"
      >
        {title}
      </div>
      <p className="text-light">{body}</p>
      <MaterialCard image={image} />
    </div>
  );
};

export default Story;

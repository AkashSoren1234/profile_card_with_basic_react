import classes from "./top_container.module.css";

function TopContainer(props) {
  return (
    <div className={classes.top_image_container}>
      <img src="./images/bg-pattern-card.svg" alt="" />
    </div>
  );
}

export default TopContainer;

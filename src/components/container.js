import classes from "./container.module.css";

function Card(props) {
  return (
    <main className={classes.container}>
      <div className={classes.main_container}>{props.children}</div>
    </main>
  );
}

export default Card;

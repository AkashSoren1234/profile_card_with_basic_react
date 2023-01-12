import classes from "./media_stats.module.css";

function StatCard(props) {
  return <div className={classes.media_stats}>{props.children}</div>;
}

export default StatCard;



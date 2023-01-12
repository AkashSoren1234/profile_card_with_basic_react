import classes from "./userdetails.module.css";

function UserDatas(props) {
  return (
    <div className={classes.userdetails}>
      <div>
        <span className={classes.username}>Victor Crest</span>
        <span className={classes.age}>26</span>
      </div>
      <div className={classes.location}>
        <span>London</span>
      </div>
    </div>
  );
}

export default UserDatas;



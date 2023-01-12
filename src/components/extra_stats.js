import classes from "./extra_stats.module.css";
import StatCard from "./media_stats";

function ExtraStats(props) {
  const elementlist = props.data.map((x) => (
    <div key={x.key} className={classes.stat_container}>
      <div>
        <span className={classes.stat_count}>{x.value}</span>
      </div>
      <div>
        <span className={classes.stat_title}>{x.key}</span>
      </div>
    </div>
  ));

  console.log(elementlist);
 return (
  <StatCard>
   {elementlist}
   </StatCard>
  );
}

export default ExtraStats;

// return (
//   <div className={classes.stat_container}>
//     <div>
//       <span className={classes.stat_count}>80K</span>
//     </div>
//     <div>
//       <span className={classes.stat_title}>Follower</span>
//     </div>
//   </div>
// );

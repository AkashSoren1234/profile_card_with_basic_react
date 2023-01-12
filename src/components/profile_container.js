import classes from "./profile_container.module.css"

function ProfileContainer(props) {
 return (
   <div className={classes.profile_image_container}>
   <img src="./images/image-victor.jpg" alt="" className={classes.profile_image} />
   </div>
 );
}

export default ProfileContainer;
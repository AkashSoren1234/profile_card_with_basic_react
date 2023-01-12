
import "./App.css";
import Card from "./components/container";
import TopContainer from "./components/top_container";
import ProfileContainer from "./components/profile_container";
import UserData from "./components/userdetails";
import ExtraStats from "./components/extra_stats";
import Underline from "./components/underline";

const data = [
  { value: "80K", key: "Follower" },
  { value: "803K", key: "Likes" },
  { value: "1.4K", key: "Photos" },
];

function App() {
  return (
    <Card>
      <TopContainer />
      <ProfileContainer />
      <UserData />
      <Underline />
      <ExtraStats data={data} />
    </Card>
  );
}


export default App;

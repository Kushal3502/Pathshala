import { Button } from "./components/ui/button";
import useAuth from "./context/AuthContext";

function App() {
  const { user, setUser } = useAuth()
  console.log(user);
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world! { user?.name}</h1>
      <Button>Click me</Button>
    </>
  );
}

export default App;

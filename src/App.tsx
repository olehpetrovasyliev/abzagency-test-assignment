import { Hero } from "./Components/Sections/Hero/Hero";
import { UsersSection } from "./Components/Sections/Users/UsersSection";
import { AddUserSection } from "./Components/Sections/AddUser/AddUserSection";
import Header from "./Components/UI/Header";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <UsersSection />
      <AddUserSection />
    </>
  );
}

export default App;

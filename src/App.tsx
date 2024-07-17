import { Hero } from "./Components/Sections/Hero/Hero";
import { UsersSection } from "./Components/Sections/Users/UsersSection";
import { AddUserSection } from "./Components/Sections/AddUser/AddUserSection";
import Header from "./Components/UI/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <UsersSection />
        <AddUserSection />
      </main>
    </>
  );
}

export default App;

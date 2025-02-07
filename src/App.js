import "./App.css";
import AppHeader from "./Components/AppHeader";
import SideMenu from "./Components/SideMenu";
import PageContent from "./Components/PageContent";
import AppFooter from "./Components/AppFooter";

function App() {
  return (
    <div className="app">
      <AppHeader />
      <div className="BodyContainer">
        <SideMenu></SideMenu>
        <PageContent></PageContent>
      </div>
      <AppFooter />
    </div>
  );
}

export default App;

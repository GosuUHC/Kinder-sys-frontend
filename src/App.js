import "./App.css";
import Footer from "./view/components/footer/Footer";
import Header from "./view/components/header/Header";
import Sidebar from "./view/components/sidebar/Sidebar";
import EducatorPage from "./view/pages/educator/EducatorPage";
import AnaliticPage from "./view/pages/analitic/AnaliticPage";

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      {/* <EducatorPage /> */}
      <AnaliticPage />
      {/* <Footer /> */}
    </>
  );
}

export default App;

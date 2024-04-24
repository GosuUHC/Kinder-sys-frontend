import "./App.css";
import Footer from "./view/components/footer/Footer";
import Header from "./view/components/header/Header";
import Sidebar from "./view/components/sidebar/Sidebar";
import EducatorPage from "./view/pages/educator/EducatorPage";

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <EducatorPage />
      {/* <Footer /> */}
    </>
  );
}

export default App;

import { useContext } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import ValueContext from "./components/context";
import CatContent from "./components/FoxContent";
import DuckContent from "./components/DuckContent";
import { Route, Routes } from "react-router-dom";
import List from "./components/List";
import ContactUs from "./components/Forms/ContactUs";
import Table from "./components/Table";

function App() {
  const context = useContext(ValueContext);

  return (
    <div className="App">
      <Header />
      <ValueContext.Provider value={ValueContext}>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="Dogs" element={<MainContent />} />
          <Route path="Fox" element={<CatContent />} />
          <Route path="Rice" element={<DuckContent />} />
          <Route path="List" element={<List />} />
          <Route path="Contactus" element={<ContactUs />} />
          <Route path="Table" element={<Table />} />
          <Route path="/*" element={<MainContent />} />
        </Routes>
      </ValueContext.Provider>
      <Footer />
    </div>
  );
}

export default App;

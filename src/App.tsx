import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import OMne from "./OMne.tsx";
import Vzdelani from "./Vzdelani.tsx";
import CertifikatyKurzy from "./CertifikatyKurzy.tsx";
import Zkusenosti from "./Zkusenosti.tsx";
import Portfolio from "./Portfolio.tsx";
import Kontakt from "./Kontakt.tsx";

export default function App() {

    return (
        <>
            <div className={"home"}>
                <h1>Osobní portfolio</h1>
                <h2>Sára Pirnerová</h2>

                <p className={"quote"}>"Let us realize that: the privilege to work is a gift,
                    the power to work is a blessing, the love of work is success!" <br/> - David O. McKay
        </p>
      </div>
        <div className={"meatNPotatoes"}>
          <BrowserRouter>
            <nav>
              <Link to="/OMne">O mně </Link> |{" "}
              <Link to="/Vzdelani">Vzdělání </Link> |{" "}
              <Link to="/CertifikatyKurzy">Certifikáty a kurzy </Link> |{" "}
              <Link to="/Zkusenosti">Zkušenosti </Link> |{" "}
              <Link to="/Portfolio">Portfolio </Link> |{" "}
              <Link to="/Kontakt">Kontakt </Link>
              <a href={"https://youtu.be/SiJie3Z7DG8?si=XENFkq_ZQ3E7tzZI&t=129"}>♪</a>
            </nav>

            <Routes>
              <Route path="/OMne" element={<OMne/>} />
              <Route path="/Vzdelani" element={<Vzdelani/>} />
              <Route path="/CertifikatyKurzy" element={<CertifikatyKurzy/>} />
              <Route path="/Zkusenosti" element={<Zkusenosti/>} />
              <Route path="/Portfolio" element={<Portfolio/>} />
              <Route path="/Kontakt" element={<Kontakt/>} />
            </Routes>
          </BrowserRouter>
        </div>
      </>
  );
}

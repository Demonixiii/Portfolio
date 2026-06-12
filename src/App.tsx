import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'

function OMne() {
  return (
      <>
        <div className={"oMne"}>
      <h1>O mně</h1>
        <p>Momentálně studuji na SPŠE Ječná, obor IT.
          Jsem kreativní a baví mě grafický design.
          Pracuji pohodlně sama, ale nemám problém pracovat pod vedením.</p>
        </div>
      </>
  );
}

function Vzdelani() {
  return (
      <>
        <div className={"vzdel"}>
      <h1>Vzdělání</h1>
          <p>IT, Střední průmyslová škola elektrotechnická, Ječná 30, 121 36 Praha 2 (3. roč.
            student)</p>
          <p className={"smol"}>Září 2023 – současnost</p>
        </div>
      </>
  );
}

function CertifikatyKurzy() {
  return (
      <>
        <div className={"certKurz"}>
        <h1>Certifikáty a kurzy</h1>
          <p>Zatím žádné.</p>
        </div>
      </>
  );
}

function Zkusenosti() {
  return (
      <>
        <div className={"zkus"}>
        <h1>Zkušenosti</h1>
          <ul>
          <li><p>Stáž, Trilbi s.r.o., Víta Nejedlého 316, 264 01 Sedlčany, květen 2025</p>
            <p className={"smol"}> - Webdesign <br/>
            - Podílela se na vývoji webu</p>
          </li>
          <li>
          <p>Stáž, Trilbi s.r.o., Víta Nejedlého 316, 264 01 Sedlčany, květen 2026</p>
          <p className={"smol"}> - Webdesign <br/>
            - Testování</p>
          </li>
          </ul>
        </div>
      </>
  );
}

function Portfolio() {
  return (
      <>
        <div className={"port"}>
        <h1>Portfolio</h1>
        </div>
      </>
  );
}

function Kontakt() {
  return (
      <>
        <div className={"kont"}>
        <h1>Kontakt</h1>
        <p><b>Email:</b> <a href={"mailto:sarachpirnerova@gmail.com"}>sarachpirnerova@gmail.com</a></p>
        <p><b>Telefon:</b> +420 727 809 575</p>
        </div>
      </>
  );
}

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

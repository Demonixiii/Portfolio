import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'

function OMne() {
  return (
      <>
        <div className={"oMne"}>
      <h1>O mně</h1>
        <p>Momentálně studuji na SPŠE Ječná, v oboru IT.
          Jsem kreativní a baví mě grafický design.
          Pracuji pohodlně sama a nemám problém pracovat pod vedením.
          Dobře ovládám jak český jazyk, tak anglický jazyk.
            <br/><br/>
            V tuto chvíli nemám zájem o zaměstnání, praxi, či stáž.
        </p>

            <img src={"https://img1.picmix.com/output/stamp/normal/0/0/7/6/2646700_c852a.gif"} alt={"meFrfr"}/>
        </div>
      </>
  );
}

function Vzdelani() {
  return (
      <>
        <div className={"vzdel"}>
      <h1>Vzdělání</h1>
          <p>IT, Střední průmyslová škola elektrotechnická, Ječná 30, 121 36 Praha 2 <br/>(student 3. ročníku)</p>
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
              <li><p><b>Praxe, Trilbi s.r.o.</b>, Víta Nejedlého 316, 264 01 Sedlčany,<b> květen 2025</b></p>
            <p className={"smol"}> - Webdesign <br/>
            - Podíl na vývoji webu</p>
          </li>
          <li>
              <p><b>Praxe, Trilbi s.r.o.</b>, Víta Nejedlého 316, 264 01 Sedlčany,<b> květen 2026</b></p>
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
            <p><b>Github odkaz:</b> <a href={"https://github.com/Demonixiii?tab=repositories"}>https://github.com/Demonixiii</a></p>
            <p className={"smol"}>(Zde můžete najít všechny mé veřejné projekty.)</p>
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

import './App.css'

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

export default Zkusenosti;
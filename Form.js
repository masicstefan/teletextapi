import { useState } from React;

function App() {
    const [StevilkaStrani, setStevilkaStrani] = useState('');
    const [NazivNovice, setNazivNovice] = useState('');
    const [OpisNovice, setOpisNovice] = useState('');
    const [OznakaKategorije, setOznakaKategorije] = useState('');

    return (
        <>
        <label>
            Stevilka
                <input 
                    placeholder="Stevilka"
                    value={StevilkaStrani}
                    onChange={e => setStevilkaStrani(e.target.value)}/>
        </label>
        
        </>
    );
};
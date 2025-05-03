import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetail from './components/ItemDetail/ItemDetail';
import { AppProvider } from './Contex/Contex.jsx';

function App() {
    return (
        <AppProvider>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/categoria/:categoria" element={<ItemListContainer />} />
                    <Route path="/detalle/:id" element={<ItemDetail />} />
                    <Route path="*" element={<p>404 Not Found</p>} />
                </Routes>
            </BrowserRouter>
        </AppProvider>
    );
}

export default App;
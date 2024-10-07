import { MainRoutes } from "./routes/MainRoutes";

const App = () => {
    return (
        <div>
            <header className="py-5 border-b-2">
                <h1 className="text-4xl font-bold">Galeria de Fotos</h1>
            </header>
            <div>
                <MainRoutes />
            </div>
        </div>
    );
}

export default App;

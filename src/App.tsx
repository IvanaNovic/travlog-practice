import Layout from './Components/layout/Layout';
import Home from './Components/pages/Home';

function App() {
    return (
        <main className="flex min-h-screen min-w-[300px] flex-col font-roboto">
            <Layout>
                <Home />
            </Layout>
        </main>
    );
}

export default App;

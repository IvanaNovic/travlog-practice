import Layout from "./Components/layout/Layout";
import Home from "./Components/pages/Home";

function App() {
  return (
    <main className="font-roboto flex flex-col min-h-screen">
      <Layout>
        <Home />
      </Layout>
    </main>
  );
}

export default App;

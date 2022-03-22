import { Navbar, Welcome, Borrow, Lend,Footer } from './components'



const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      < Borrow/>
      < Lend/>
      <Footer />
    </div>
  );
}

export default App;

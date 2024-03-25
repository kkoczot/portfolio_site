import { About, Banner, Contact, Experience, Loader, Nav, Navbar, Works, StarsCanvas } from "./components";
import { Suspense } from "react";

const App = () => {
  return (
    <div className="relative z-0 bg-primary">
      <Navbar />
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Banner />
      </div>
      <About />
      <Nav />
      <Experience />
      <Works />
      <div className="relative z-0 overflow-hidden">
        <Suspense fallback={<Loader />}>
          <Contact />
          <StarsCanvas />
        </Suspense>
      </div>
    </div>
  )
}

export default App;
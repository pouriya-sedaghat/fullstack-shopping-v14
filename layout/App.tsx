import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.min.css";

function App({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ToastContainer position="bottom-left" limit={1} />
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </>
  );
}

export default App;

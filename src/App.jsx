import "./App.css";
import fundo from "./assets/gym.jpg";
import gif from "./assets/gif.gif";
import gifAcademia from "./assets/gif-academy.gif";
import { BoasVindas } from "./components/BoasVindas";
import { FormularioLogin } from "./components/FormularioLogin";
import { Dialog } from "./components/Dialog";
import { useRef } from "react";
import { BotaoHeader } from "./components/BotaoHeader";
import { Footer } from "./components/Footer";
import { Pagina } from "./components/Pagina";
import { Header } from "./components/Header";
import { FundoLogin } from "./components/FundoLogin";

function App() {
  const usuarios = [
    {
      id: 1,
      usuario: "admin",
      senha: "admin",
    },
  ];

  const dialogRef = useRef(null);
    
  const openSuporte = () => {
      if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  return (
    <main>
      <FundoLogin style={{ backgroundImage: `url(${fundo})` }}>
        <Header>
          <BotaoHeader onClick={openSuporte}>Suporte</BotaoHeader>
        </Header>

        <Dialog dialogRef={dialogRef}></Dialog>
        
        <Pagina>
            <BoasVindas src={gifAcademia}/>
            <FormularioLogin usuarios={usuarios} src={gif} />
        </Pagina>

        <Footer>Desenvolvido por Guilherme Calixto Campos</Footer>
      </FundoLogin>
    </main>
  );
}

export default App;

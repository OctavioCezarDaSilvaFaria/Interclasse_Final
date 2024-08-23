import React from "react";
import "../sobrenos.css"
import Sobre from "../assets/dev.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import dsg1 from "../assets/ana.png";
import dsg2 from "../assets/caue .png";
import dsg3 from "../assets/felipe.png";
import pgr1 from "../assets/matheus.png";
import pgr2 from "../assets/otavio.png";
import pgr3 from "../assets/maria.png";

function Sobrenos() {
  return (
    <div>
      <body>
        <Header />
       
       
         <img src={Sobre} className="ban"/>
         <div className="nosgrid">
          <div className="nos">
           <div className="equipe">
            <h1>Equipe de Design</h1>
            <div className="equipegrid">
                <div>
                    <img src={dsg1} className="foto"/>
                    <h2>Ana Lívia Alexandre Ferreira </h2>
                </div>
                <div>
                    <img src={dsg2} className="foto"/>
                    <h2>Cauê S. Ribeiro</h2>
                </div>
                <div>
                    <img src={dsg3} className="foto"/>
                    <h2>Luiz Felipe Saurin </h2>
                </div>
            </div>
            
           </div>
            
          </div>
          </div>
          <div className="eventoGrid">
          <div className="evento">
           <div className="equipe">
            <h1>Equipe de Programação</h1>
            <div className="equipegrid">
                <div>
                    <img src={pgr1} className="foto"/>
                    <h2>Matheus Marques</h2>
                </div>
                <div>
                    <img src={pgr2} className="foto"/>
                    <h2>Octávio Faria</h2>
                </div>
                <div>
                    <img src={pgr3} className="foto"/>
                    <h2>Maria Eduarda Martinelli</h2>
                </div>
            </div>
            
           </div>
            
          </div>
          </div>
          <div>
         
          </div>
      <Footer/>
      </body>
    </div>
  );
}

export default Sobrenos;



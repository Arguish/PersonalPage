import { useState } from "react";
import background from "./assets/photo_5999151787694733785_w.jpg";
import profile from "./assets/P7290063.png";

function App() {
  return (
    <div className="App">
      <section
        style={{
          backgroundImage: "url(" + background + ")",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div>
          <h1>Javier Hernandez</h1>
          <h2>Eslogan powerfull</h2>
          <h3>Desarollador Full-Stack & Mobile</h3>
          <h4>Tecnico audiovisuales</h4>
          <h4>Operador de Camara</h4>
          <h2>634466788</h2>
          <h2>\/</h2>
        </div>
      </section>
      <section style={{ overflow: "scroll" }}>
        <h1>Sección nº 2</h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            scrollSnapType: "x mandatory",
          }}
        >
          <Card1 />
          <Card1 />
          <Card1 />
        </div>
      </section>
      <section>
        <h1>Time Line</h1>
      </section>
      <section>
        <h1>HAbilidades</h1>
      </section>
      <section>
        <h1>Portfolio</h1>
      </section>
      <section>
        <h1>contacto</h1>
        <Card1 />
      </section>
    </div>
  );
}

export default App;

const Card1 = () => {
  return (
    <div
      style={{
        margin: "5px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "0.01px solid red",
      }}
    >
      <div
        style={{
          width: "150px",
          height: "150px",
          backgroundImage: `url(${profile})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "50%",
        }}
      />
      <p style={{ textAlign: "center", width: "95vw" }}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis
        facilis quidem quaerat aliquid eum. Asperiores eaque esse ipsum iste
        nesciunt facilis modi doloribus, soluta tempore suscipit vel harum quae
        a?
      </p>
    </div>
  );
};

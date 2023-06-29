import React from "react";
import { Link } from "react-router-dom";
import "../Css/Home.css"

function Home() {
  return (
    <>
      <header className="Headss">
        <div class="overlay">
          <h1>PandeyMia</h1>
          <h3 className="headc">Reasons for Choosing Pandey</h3>
          <p className="headc">
            Pandey is a Godamm Kietian with an exceptional power to solve
            anything very easily. He is even the Top Coder of KIET GROUP OF
            INSTITUTIONS, Ghaziabad which is also called IIT Ghaziabad. Plus He
            is also a Magician.
          </p>
          <br />
          <button> <Link to='./About' style={{color:'black', textDecoration:'none'}}> READ MORE ABOUT PANDEY </Link> </button>
        </div>
      </header>
    </>
  );
}

export default Home;

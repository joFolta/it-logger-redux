import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

const App = () => {
  useEffect(() => {
    // Init Materialie JS
    M.AutoInit();
  });
  return (
    <div className="App">
      My App
      {/* <!-- Modal Trigger --> */}
      {/* <a class="waves-effect waves-light btn modal-trigger" href="#modal1">
        Modal
      </a> */}
      {/* <!-- Modal Trigger --> */}
      <button data-target="modal1" class="btn modal-trigger">
        Modal
      </button>
      {/* <!-- Modal Structure --> */}
      <div id="modal1" class="modal">
        <div class="modal-content">
          <h4>Modal Header</h4>
          <p>A bunch of text</p>
        </div>
        <div class="modal-footer">
          <a href="#!" class="modal-close waves-effect waves-green btn-flat">
            Agree
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;

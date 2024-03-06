import React from 'react';
//Importar componentes
import Access from './assets/components/Access';
import Content from './assets/components/Content';
import Menu from './assets/components/Menu';
//Importar CSS
import './assets/css/normalize.min.css';
import './assets/css/style.css';
import './assets/css/bootstrap.min.css';
import './assets/css/font-awesome.min.css';

function App() {
  return (
    <div className="dashboard">
      <Access />
      <Menu />
      <Content />
    </div>
  );
}

export default App;

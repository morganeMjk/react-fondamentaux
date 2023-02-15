import './App.css';
import Card from './Components/Card';
import { useState } from 'react'

function App() {
  const [articles] = useState([{
    title: "Passoire",
    image: 'https://www.cdiscount.com/pdt2/1/2/0/1/700x700/auc4847511250120/rw/arga-passoire-cuisine-acier-inoxydable-o-28.jpg',
    description: "C'est une belle passoire",
},
{
    title: "Tasse",
    image: 'https://www.hop-cafe.com/Files/88723/Img/11/tasse-blanche-10cl-650.jpg',
    description: "C'est une belle tasse",
}]
);
  return (
    <div className="App">
      {articles.map((article) => {
      return <Card title={article.title} image={article.image} description={article.description} />
      })}
    </div>
  );
}

export default App;
import { useState } from "react";

import Card from "./components/Card";

function App() {

  const [ elements, setElements ] = useState([
    {
      id: 0,
      order: 0,
      title: "Primero"
    },
    {
      id: 1,
      order: 1,
      title: "Segundo"
    },
    {
      id: 2,
      order: 2,
      title: "Tercero"
    },
    {
      id: 3,
      order: 3,
      title: "Cuarto"
    },
  ])

  function swapCardsOrder(firstCardOrder, secondCardOder) {
    const currentElements = [...elements]
    const firstCard = currentElements.find( item => item.order === firstCardOrder)
    const secondCard = currentElements.find( item => item.order === secondCardOder)
    firstCard.order = secondCardOder
    secondCard.order = firstCardOrder
    setElements(currentElements)
  }

  return (
    <ul>
      {elements.sort((first, second)=>first.order - second.order).map(
        item => <Card key={item.id} element={item} onDropMethod={swapCardsOrder}/>
      )}
    </ul>
  );
}

export default App;

import { useState } from "react";

function App() {
  const [cards, setCards] = useState(
    [ { id: 0, image: "railsurl", cardName: "RoR" },
    { id: 1, image: "javascripturl", cardName: "JavaScript" } ]

  )
  return (
    <>
      <h1 className="bg-red-300">Banana</h1>
    </>
  );
}
export default App

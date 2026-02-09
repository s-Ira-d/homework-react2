import Greeting from "./components/Greeting";
import Message from "./components/Message";
import Button from "./components/Button";

function App() {
  const handleClick = () => {
    console.log("кнопка була натиснута!");
  };

  return (
    <div>
      <Greeting name="Іра" />
      <Message text="ласкаво просимо до мого React-додатку" />
      <Button onClick={handleClick} />
    </div>
  );
}

export default App;

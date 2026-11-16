import "./App.css";
import Title from "./Title.jsx";
import ProductTab from "./ProductTab.jsx"
import ColorMsg from "./Assignments/ColorMsg.jsx"

function App() {
  return (
    <div>
      {/* <Title/>
      <h2>Welcome Back!</h2>
      <ProductTab/> */}
      <ColorMsg userName="Sukuna" textColor="Pink"/>
      <ColorMsg userName="Itachi" textColor="red"/>
      <ColorMsg userName="Muzan" textColor="purple"/>
    </div>
  )
}

export default App

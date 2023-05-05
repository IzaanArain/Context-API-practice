import Table from "./components/Table"
import Context from "./components/MyContext"
import val from "./components/people"

function App() {
  return (
    <> 
    <Context.Provider value={val}>
      <Table/>
    </Context.Provider>
    </>
  )
}

export default App

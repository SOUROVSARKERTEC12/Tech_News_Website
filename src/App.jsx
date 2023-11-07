import Search from "./components/Search.jsx";
import Pagination from "./components/Pagination.jsx";
import Stories from "./components/Stories.jsx";
import {useGlobalContext} from "./hooks/customhook.jsx";

function App() {
    const data = useGlobalContext()

  return (
    <>
        <h1>Welcome to the Calling API and Fetching Data</h1>
        <h2>{data}</h2>
        <Search/>
        <Pagination/>
        <Stories/>
    </>
  )
}

export default App

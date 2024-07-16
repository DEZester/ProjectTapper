import Template from "@/templates/Template.tsx";
import NavBar from "@/components/NavBar/NavBar.tsx";
import MainContent from "@/components/MainContent/MainContent.tsx";

function App() {
  return (
    <>
      <Template>
        <NavBar/>
        <MainContent/>
      </Template>
    </>
  )
}

export default App

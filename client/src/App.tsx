import Template from "@/templates/Template.tsx";
import {DefaultStyles} from "@/styles/DefaultStyles.styled.ts";
import NavBar from "@/components/NavBar/NavBar.tsx";
import MainContent from "@/components/MainContent/MainContent.tsx";

function App() {
  return (
    <>
      <DefaultStyles/>
      <Template>
        <>
          <NavBar/>
          <MainContent/>
        </>
      </Template>
    </>
  )
}

export default App

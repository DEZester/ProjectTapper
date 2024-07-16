import Template from "@/templates/Template.tsx";
import MainContent from "@/components/MainContent/MainContent.tsx";
import {Styles} from "@/styles/styles.ts";

function App() {
  return (
    <>
      <Styles/>
      <Template>
        <MainContent/>
      </Template>
    </>
  )
}

export default App

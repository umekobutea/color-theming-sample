import { useState } from "react"
import { Color } from "./Color.page"
import { NaviRail } from "./NaviRail"
import { PageKey } from "./types"
import { Component } from "./Component.page";

function App() {
  const [page, setPage] = useState<PageKey>("color");
  return (
    <>
      <header className="main-header" style={{
        paddingBlockStart: "24px",
        paddingInline: "24px"
      }}>
        <h1>Color Theming</h1>
      </header>
      <NaviRail current={page} onChangePage={(key) => setPage(key)}/>
      <Content page={page} />
    </>
  )
}

const Content = ({page}: {page: PageKey}) => {
  switch (page) {
    case "color":
      return <Color />
    case "component":
      return <Component />
    default:
      return <></>
  }
};

export default App

import { Layout } from "../layout/Layout"
import { Button } from "../components/button/Button"


function HomePage() {
  return <>
    <Layout>
      <div><h1>Welcome to </h1></div>
      <h1>bareja studio</h1>
      <h1>bareja studio</h1>
      <h1>bareja studio</h1>
      <h1>bareja studio</h1>
      <h1>bareja studio</h1>
      <h1>bareja studio</h1>
      <h1>bareja studio</h1>
      <h2>jakaś treść</h2>
      <p>dalej</p>
      <Button />
    </Layout>
    <style jsx>{`
        div {
          background: red;
        }
      `}</style>
    <style global jsx>{`
        body {
          background: gray;
        }
      `}</style>
  </>
}

export default HomePage
import HeaderNavBar from "./components/header"
import ButtonsOptions from "./components/buttonsOptions"
import Features from "./components/features"
import productDescription from "./components/productDescription"
import './globals.css'
import Content from "./components/content/content"




export default function Home() {
  return (
    <div className="home">
      <HeaderNavBar/>
      <Content/>
    </div>
  )
}

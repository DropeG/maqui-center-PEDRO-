
import "../styles/Home.css";
import { Typography } from "antd";
import NavBar from "../components/NavBar";
import LogoContacto from "../components/LogoContacto";
import SearchBar from "../components/SearchBar";
import Banner from '../components/Banner';
import Categorias from '../components/Categorias'
// const { Title } = Typography;

function Home() {
  return (
    <div>
      <NavBar/>
      <LogoContacto/>
      <SearchBar />
      <Banner />
      <Categorias />
    </div>
  );
}

export default Home;

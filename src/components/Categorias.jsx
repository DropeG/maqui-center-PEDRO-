import React from "react";
import {
    Col,
    Row,
    Typography,
    Button,
    Form,
    Input,
    Divider,
    Image,
  } from 'antd';
  
function Categorias(){
    return (
        <div className="App">
        <header class="header-section">
        </header>
  
        <section class="hero-section">
          <div class="hero-items owl-carousel">
            <div
              class="single-hero-items hero-bg"
              data-herobg="assets/img/hero-1.jpg"
            >
              <div class="container">
                <div class="row">
                  <div class="col-lg-5">
                    <span>Bienvenido a</span>
                    <h1 style={{ color: "white" }}>MaquiCenter</h1>
                    <p style={{ color: "white" }}>
                      Con una experiencia de 36 años, buscamos soluciones en todo
                      el mundo para satisfacer las necesidades de nuestros
                      clientes.
                    </p>
                    <a href="#" class="primary-btn">
                      Sobre Nosotros
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="single-hero-items hero-bg"
              data-herobg="assets/img/hero-2.jpg"
            >
              <div class="container">
                <div class="row">
                  <div class="col-lg-5">
                    <span>¡Nos Cambiamos! </span>
                    <h1 style={{ color: "white" }}>El Roble 670, Lampa</h1>
                    <p style={{ color: "white" }}>
                      Desde el 15 de Noviembre del 2021.
                    </p>
                    <a href="#" class="primary-btn">
                      Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        <div class="category-section container-fluid">
          <h3>CATEGORÍAS</h3>
          <hr></hr>
  
          <div class="banner-section spad">
            <div class="container-fluid">
              <div class="row">
                <div class="col-lg-4">
                  <div class="single-banner">
                    <img src="assets/img/cat-1.jpg" alt="" />
                    <div class="inner-text">
                      <h4>Barredoras y lavadoras de piso.</h4>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="single-banner">
                    <img src="assets/img/cat-2.jpg" alt="" />
                    <div class="inner-text">
                      <h4>Equipos de chancado, molienda y clasificación</h4>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="single-banner">
                    <img src="assets/img/cat-3.jpg" alt="" />
                    <div class="inner-text">
                      <h4>Generadores</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-4">
                  <div class="single-banner">
                    <img src="assets/img/cat-4.jpg" alt="" />
                    <div class="inner-text">
                      <h4>Gruas Horquillas</h4>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="single-banner">
                    <img src="assets/img/cat-5.jpg" alt="" />
                    <div class="inner-text">
                      <h4>Grúas pluma</h4>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="single-banner">
                    <img src="assets/img/cat-5.jpg" alt="" />
                    <div class="inner-text">
                      <h4>Maquinas Metalmecánicas</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-4">
                  <div class="single-banner">
                    <img src="assets/img/cat-4.jpg" alt="" />
                    <div class="inner-text">
                      <h4>Maquinas para la construcción</h4>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="single-banner">
                    <img src="assets/img/cat-5.jpg" alt="" />
                    <div class="inner-text">
                      <h4>Mini cargadores</h4>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="single-banner">
                    <img src="assets/img/cat-5.jpg" alt="" />
                    <div class="inner-text">
                      <h4>Puente grúa</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <section class="women-banner spad">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-3">
                <div class="product-large">
                  <h2>
                    Más <br></br> Vendidos
                  </h2>
                  <a href="#">Ver Productos &gt; </a>
                </div>
              </div>
              <div class="col-lg-8 offset-lg-1">
                <div class="filter-control"></div>
                <div class="product-slider owl-carousel">
                  <div class="product-item">
                    <div class="pi-pic">
                      <img src="assets/img/pro-1.jpg" alt="" />
                      <ul>
                        <li class="quick-view">
                          <a href="#"> Ver Detalles</a>
                        </li>
                      </ul>
                    </div>
                    <div class="pi-text">
                      <div class="catagory-name">MODELO B250-R 2014</div>
                      <a href="#">
                        <h5>Vacuolavadora y Fregadora</h5>
                      </a>
                      <div class="product-price">KARCHER</div>
                    </div>
                  </div>
                  <div class="product-item">
                    <div class="pi-pic">
                      <img src="assets/img/pro-2.jpg" alt="" />
                      <ul>
                        <li class="quick-view">
                          <a href="#">Ver Detalles</a>
                        </li>
                      </ul>
                    </div>
                    <div class="pi-text">
                      <div class="catagory-name">Modelo MJ346EA</div>
                      <a href="#">
                        <h5>Sierra Huincha Vertcal para Madera</h5>
                      </a>
                      <div class="product-price">TOS-TIMEMASTER</div>
                    </div>
                  </div>
                  <div class="product-item">
                    <div class="pi-pic">
                      <img src="assets/img/pro-3.jpg" alt="" />
                      <ul>
                        <li class="quick-view">
                          <a href="#">Ver Detalles</a>
                        </li>
                      </ul>
                    </div>
                    <div class="pi-text">
                      <div class="catagory-name">Modelo MW5-100L/1</div>
                      <a href="#">
                        <h5>Electro Iman Suspendido</h5>
                      </a>
                      <div class="product-price">TOS-TIMEMASTER</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        <footer>
        </footer>
      </div>
    );
}

export default Categorias;
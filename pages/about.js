import React from'react'
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';
import Home from '.';
import Shop from './shop';
import info from './info';

export default function about() {
    return (
        <>

<style dangerouslySetInnerHTML={{__html: "\n      .bd-placeholder-img {\n        font-size: 1.125rem;\n        text-anchor: middle;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        user-select: none;\n      }\n\n      @media (min-width: 768px) {\n        .bd-placeholder-img-lg {\n          font-size: 3.5rem;\n        }\n      }\n\n      .b-example-divider {\n        width: 100%;\n        height: 3rem;\n        background-color: rgba(0, 0, 0, .1);\n        border: solid rgba(0, 0, 0, .15);\n        border-width: 1px 0;\n        box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);\n      }\n\n      .b-example-vr {\n        flex-shrink: 0;\n        width: 1.5rem;\n        height: 100vh;\n      }\n\n      .bi {\n        vertical-align: -.125em;\n        fill: currentColor;\n      }\n\n      .nav-scroller {\n        position: relative;\n        z-index: 2;\n        height: 2.75rem;\n        overflow-y: hidden;\n      }\n\n      .nav-scroller .nav {\n        display: flex;\n        flex-wrap: nowrap;\n        padding-bottom: 1rem;\n        margin-top: -1px;\n        overflow-x: auto;\n        text-align: center;\n        white-space: nowrap;\n        -webkit-overflow-scrolling: touch;\n      }\n\n      .btn-bd-primary {\n        --bd-violet-bg: #712cf9;\n        --bd-violet-rgb: 112.520718, 44.062154, 249.437846;\n\n        --bs-btn-font-weight: 600;\n        --bs-btn-color: var(--bs-white);\n        --bs-btn-bg: var(--bd-violet-bg);\n        --bs-btn-border-color: var(--bd-violet-bg);\n        --bs-btn-hover-color: var(--bs-white);\n        --bs-btn-hover-bg: #6528e0;\n        --bs-btn-hover-border-color: #6528e0;\n        --bs-btn-focus-shadow-rgb: var(--bd-violet-rgb);\n        --bs-btn-active-color: var(--bs-btn-hover-color);\n        --bs-btn-active-bg: #5a23c8;\n        --bs-btn-active-border-color: #5a23c8;\n      }\n      .bd-mode-toggle {\n        z-index: 1500;\n      }\n    " }} />


<hr className="featurette-divider" />

              
<div>
  <svg xmlns="http://www.w3.org/2000/svg" style={{display: 'none'}}>
    <symbol id="check2" viewBox="0 0 16 16">
      <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
    </symbol>
    <symbol id="circle-half" viewBox="0 0 16 16">
      <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
    </symbol>
    <symbol id="moon-stars-fill" viewBox="0 0 16 16">
      <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
      <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
    </symbol>
    <symbol id="sun-fill" viewBox="0 0 16 16">
      <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
    </symbol>
  </svg>
  
  <svg xmlns="http://www.w3.org/2000/svg" style={{display: 'none'}}>
    <symbol id="aperture" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24">
      <circle cx={12} cy={12} r={10} />
      <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94" />
    </symbol>
    <symbol id="cart" viewBox="0 0 16 16">
      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
    </symbol>
    <symbol id="chevron-right" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
    </symbol>
  </svg>
  <nav className="navbar navbar-expand-md bg-dark sticky-top border-bottom" data-bs-theme="dark">
    <div className="container">
      <a className="navbar-brand d-md-none" href="#">
        <svg className="bi" width={24} height={24}><use xlinkHref="#aperture" /></svg>
        Aperture
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="#offcanvas" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="offcanvas offcanvas-end" tabIndex={-1} id="#offcanvas" aria-labelledby="#offcanvasLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="#offcanvasLabel">Aperture</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav flex-grow-1 justify-content-between">
            <li className="nav-item"><a className="nav-link" href="#">
                <svg className="bi" width={24} height={24}><use xlinkHref="#aperture" /></svg>
              </a></li>
            <li className="nav-item"><Link className="nav-link" href="/"   >หน้าแรก</Link></li>
            <li className="nav-item"><Link className="nav-link" href="/about"  >เกี่ยวกับ</Link></li>
            <li className="nav-item"><Link className="nav-link" href="/info"  >ข้อมูล</Link></li>
         
            <li className="nav-item"><Link className="nav-link" href="/shop">
                <svg className="bi" width={24} height={24}><use xlinkHref="#cart" /></svg>
              </Link></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</div>

<main>
  <div class="container py-4">
    <header class="pb-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center text-body-emphasis text-decoration-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" class="me-2" viewBox="0 0 118 94" role="img"><title>Bootstrap</title><path fill-rule="evenodd" clip-rule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z" fill="currentColor"></path></svg>
        <span class="fs-4">Jumbotron example</span>
      </a>
    </header>

    <div class="p-5 mb-4 bg-body-tertiary rounded-3">
      <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold">Custom jumbotron</h1>
        <p class="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
        <button class="btn btn-primary btn-lg" type="button">Example button</button>
      </div>
    </div>

    <div class="row align-items-md-stretch">
      <div class="col-md-6">
        <div class="h-100 p-5 text-bg-dark rounded-3">
          <h2>Change the background</h2>
          <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
          <button class="btn btn-outline-light" type="button">Example button</button>
        </div>
      </div>
      <div class="col-md-6">
        <div class="h-100 p-5 bg-body-tertiary border rounded-3">
          <h2>Add borders</h2>
          <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
          <button class="btn btn-outline-secondary" type="button">Example button</button>
        </div>
      </div>
    </div>

    <footer class="pt-3 mt-4 text-body-secondary border-top">
      &copy; 2023
    </footer>
  </div>
</main>

  
        
        
        </>

    )
}
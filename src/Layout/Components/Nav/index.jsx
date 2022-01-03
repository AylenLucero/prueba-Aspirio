import React from "react";
import { Link } from "react-router-dom";
import './index.css';

const Nav = () => {
    return(
        <nav class="navbar navbar-expand-lg navBar ">
          <div class="container-fluid">
            <Link to='/' class="navbar-brand titleNav">
            <i class="fas fa-book-open"></i>
              Books
            </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>
    )
}

export {Nav};
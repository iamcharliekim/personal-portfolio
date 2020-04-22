import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Context from './Context/Context';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Projects from './Pages/Projects/Projects';
import Contact from './Pages/Contact/Contact';
import Footer from './Components/Footer/Footer';

export default class App extends React.Component {
  state = {
    openNav: false,
    showToast: true,
  };

  onOpenNav = () => {
    this.setState((prevState) => {
      return {
        openNav: !prevState.openNav,
      };
    });
  };

  closeNav = () => {
    this.setState({ openNav: false });
  };

  hideToast = () => {
    this.setState({ showToast: false });
  };

  render() {
    const contextVal = {
      onOpenNav: this.onOpenNav,
      openNav: this.state.openNav,
      hideToast: this.hideToast,
      showToast: this.state.showToast,
    };

    return (
      <BrowserRouter>
        <Context.Provider value={contextVal}>
          <div className='App'>
            <Navbar onOpenNav={this.onOpenNav} closeNav={this.closeNav} />
            {this.state.openNav ? (
              <div className='nav-links-wrapper' onClick={this.onOpenNav}>
                <Link to='/' key='0' className='nav-link'>
                  Home
                </Link>

                <Link to='/about' key='1' className='nav-link'>
                  About
                </Link>

                <Link to='/projects' key='2' className='nav-link'>
                  Projects
                </Link>

                <Link to='/contact' key='3' className='nav-link'>
                  Contact
                </Link>
              </div>
            ) : null}

            <Route path='/' exact component={Home} />
            <Route path='/about' exact component={About} />
            <Route path='/projects' exact component={Projects} />
            <Route path='/contact' exact component={Contact} />

            <Footer />
          </div>
        </Context.Provider>
      </BrowserRouter>
    );
  }
}

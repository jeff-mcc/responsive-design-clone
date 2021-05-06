import {Component} from 'react'

class Nav extends Component {
    constructor(){
        super()
        this.state = {
            collapse: true
        }
    }

    handleCollapse = () => {
        this.setState({collapse: !this.state.collapse})
    }

    render(){
        return(
            <nav className={`navbar ${this.state.collapse ? 'navbar-collapse' : 'navbar-expand'}`} id="mainNav">
                <div className="container">
                        <a className="navbar-brand" href="#page-top">
                        <img className="bootstrapimg" src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg" alt="..."/>
                    </a>
                    <button className="navbar-toggler" type="button">
                        Menu
                        <svg className="svg-inline" onClick={this.handleCollapse} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
                        </svg>
                    </button>
                </div>
                <div className={`navbar-collapse`} id="navbarResponsive">
                    <ul className={`navbar-nav`} >
                        <li className={`nav-item ${this.state.collapse ? 'collapse' : ''}`}>
                            <a className={`nav-link ${this.state.collapse ? 'collapseText c1' : 'expand n1'}`} href="#services">Services</a>
                        </li>
                        <li className={`nav-item ${this.state.collapse ? 'collapse' : ''}`}>
                            <a className={`nav-link ${this.state.collapse ? 'collapseText c2' : 'expand n2'}`} href="#portfolio">Portfolio</a>
                        </li>
                        <li className={`nav-item ${this.state.collapse ? 'collapse' : ''}`}>
                            <a className={`nav-link ${this.state.collapse ? 'collapseText c3' : 'expand n3'}`} href="#about">About</a>
                        </li>
                        <li className={`nav-item ${this.state.collapse ? 'collapse' : ''}`}>
                            <a className={`nav-link ${this.state.collapse ? 'collapseText c4' : 'expand n4'}`} 
                            href="#team">Team</a>
                        </li>
                        <li className={`nav-item last ${this.state.collapse ? 'collapse' : ''}`}>
                            <a className={`nav-link ${this.state.collapse ? 'collapseText c5' : 'expand n5'}`} href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Nav

//${this.state.collapse ? '' : 'expand'}`} ${this.state.collapse ? 'collapse' : ''} ${this.state.collapse ? 'collapse' : 'expand'} ${this.state.collapse ? 'collapse' : 'expand'}

//viewbox="0 0 448 512"

//<nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
{/* <div className="container">
<a className="navbar-brand js-scroll-trigger" href="#page-top">
    <img src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg" alt="..."/>
</a>
<button className="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
    Menu
    <svg className="svg-inline--fa fa-bars fa-w-14 ml-1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 448 512" data-fa-i2svg="">
        <path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
    </svg>
</button>
<div className="navbar-collapse collapse" id="navbarResponsive" style="">
    <ul className="navbar-nav text-uppercase ml-auto">
        <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#services">Services</a>
        </li>
        <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
        </li>
        <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#about">About</a>
        </li>
        <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#team">Team</a>
        </li>
        <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
        </li>
    </ul>
</div>
</div>
</nav> */}
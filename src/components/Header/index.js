import React from 'react';
import logo from '../../media/marketplace-mercado-livre-3.png';
import './index.css';
import SearchBar from './searchBar';
import UserLogin from './userLogin';
import CartTotal from './cartTotal';
//Primeiros passos
// function Header() {
//   return (
//     <header>
//       <img src={logo} alt="logo" id = 'logo' />
//       <input type="text" />
//       <button> pesquisar </button>
//     </header>
//   );
// }

//Agora criando um elemento 'filho'

// function Header() {
//   return (
//     <header>
//       <img src={logo} alt="logo" id = 'logo' />
//       <SearchBar />
//     </header>
//   );
// }

//Criando componente com estado
//E demostrando o problema com this

// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       teste: 'Olá Mundo',
//     };
//     // this.changeMessage = this.changeMessage.bind(this)
//   }
//   changeMessage() {
//     console.dir(this);
//     // this.setState((state) => {
//     //   return {teste: state.teste + 'Xablau'};
//     // }
//     // )
//   }
//   render() {
//     return (
//       <header>
//         <img src={logo} alt="logo" id="logo" />
//         <SearchBar />
//         <p>{this.state.teste}</p>
//         {this.changeMessage()}
//         <button onClick={this.changeMessage}>teste</button>
//       </header>
//     );
//   }
// }

// Reparar problema utilizando bind

// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       teste: 'Olá Mundo',
//     };
//     this.changeMessage = this.changeMessage.bind(this)
//   }
//   changeMessage() {
//     console.log(this);
//     this.setState((state) => {
//       return {teste: state.teste + 'Xablau'};
//     }
//     )
//   }
//   render() {
//     return (
//       <header>
//         <img src={logo} alt="logo" id="logo" />
//         <SearchBar />
//         <button onClick={this.changeMessage}>teste</button>
//         <p>{this.state.teste}</p>
//         {/* {this.changeMessage()} */}
//       </header>
//     );
//   }
// }

// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       nomeInput: '',
//       nome: '',
//       logged: false,
//     };
//     this.handleLogin = this.handleLogin.bind(this);
//     this.handleInputChange = this.handleInputChange.bind(this);
//   }

//   handleLogin() {
//     this.setState(state => {
//       return { logged: !state.logged, nome: this.state.nomeInput, nomeInput: '' };
//     });
//   }

//   handleInputChange(e) {
//     // explicar a diferença dos setStates
//     this.setState({ nomeInput: e.target.value });
//   }

//   render() {
//     const welcomeMessage = () =>{
//       if(this.state.logged){
//         return (
//           <p>{`Olá ${this.state.nome}`}</p>
//         )
//       }
//     }
//     return (
//       <header>
//         <img src={logo} alt="logo" id="logo" />
//         <SearchBar />
//         <input
//           placeholder="nome"
//           onChange={this.handleInputChange}
//           value={this.state.nomeInput}
//         ></input>
//         <button onClick={this.handleLogin}>
//           {this.state.logged ? 'Sair' : 'Entrar'}
//         </button>
//         {welcomeMessage()}
//       </header>
//     );
//   }
// }

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
      searchURL: '',
      nomeInput: '',
      nome: '',
      logged: false,
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSearchURL = this.handleSearchURL.bind(this);
    this.handleInputSearch = this.handleInputSearch.bind(this);
  }

  handleLogin() {
    this.setState(state => {
      return {
        logged: !state.logged,
        nome: state.nomeInput,
        nomeInput: '',
      };
    });
  }

  handleInputChange(e) {
    // explicar a diferença dos setStates
    this.setState({ nomeInput: e.target.value });
  }

  handleInputSearch(e) {
    this.setState({ searchInput: e.target.value });
  }

  handleSearchURL(e) {
    e.preventDefault();
    this.setState(state => ({
      searchURL: `https://api.mercadolibre.com/sites/MLA/search?q=${encodeURI(
        state.searchInput,
      )}`,
      searchInput: '',
    }));
    console.log(this.state.searchURL);
  }

  render() {
    return (
      <header>
        <img src={logo} alt="logo" id="logo" />
        <SearchBar
          handleSearchURL={this.handleSearchURL}
          handleInputSearch={this.handleInputSearch}
          searchInput = {this.state.searchInput}
        />
        <div className="user-cart-wrapper">
          <CartTotal priceTotal={this.props.total} itemsTotal={this.props.list.length} />
          <UserLogin
            handleInputChange={this.handleInputChange}
            nomeInput={this.state.nomeInput}
            handleLogin={this.handleLogin}
            logged={this.state.logged}
            nome={this.state.nome}
          />
        </div>
      </header>
    );
  }
}

export default Header;

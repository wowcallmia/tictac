const App = React.createClass({
  getInitialState() {
    return {
      currPlayer: 1,
      player1: ['x'],
      player2: ['o'],
      reset: '',
      turn: !true,
    }
  },

  squareClicked(square){
    let {currPlayer,turn, disable, player1, player2} = this.state;
    let currBtn = square.target.id;
    let player = '';
    if (currPlayer === 1) {
        square.target.innerHTML = "X";
        square.target.disabled= true;
        this.setState({
      currPlayer: 0,
      player1:[...player1 ]
    });

    } else if (currPlayer === 0) {
      square.target.innerHTML = 'O';
       this.setState({
      currPlayer: 1
    });
       player2:[...player2 , parseInt(currBtn)]
       square.target.disabled= true;
    }
    if(currPlayer ===1) {
      this.turn = false;
    }
  },

  resetTable() {
    let buttons =document.getElementsByTagName("button");
    for (var i=0; i < buttons.length -1 ; i++) {
      buttons[i].innerHTML = '';
      buttons[i].disabled = false;
    }
  },

  render() {
    let{turn, player1, player2,currPlayer,squareClicked} = this.state;
    let refs = this.refs;



         return (
      <div>
        <table className="table">
          <tbody>
            <tr className="row">
              <td><button ref='one' className="col-md-4" id="1" onClick={this.squareClicked}></button></td>
              <td><button ref='two' className="col-md-4" id="2" onClick={this.squareClicked}></button></td>
              <td><button ref='three' className="col-md-4" id='3' onClick={this.squareClicked}></button></td>
            </tr>
            <tr className="row">
              <td><button  ref='four' className="col-md-4" id='4' onClick={this.squareClicked}></button></td>
              <td><button  ref='five' className="col-md-4" id='5' onClick={this.squareClicked}></button></td>
              <td><button  ref='six' className="col-md-4" id='6' onClick={this.squareClicked}></button></td>
            </tr>
            <tr className="row">
              <td><button  ref='seven' className="col-md-4" id='7' onClick={this.squareClicked}></button></td>
              <td><button  ref='eight' className="col-md-4" id='8' onClick={this.squareClicked}></button></td>
              <td><button  ref='nine' className="col-md-4" id='9' onClick={this.squareClicked}></button>   </td>
            </tr>
          </tbody>
        </table>
        <button  id="resetBtn" onClick={this.resetTable}>again?</button>
        <h3>{`${currPlayer===0 ? player1 : player2}'s Turn`}</h3>



      </div>
      )
  }
});

ReactDOM.render(
  <App/>, document.getElementById('root')
  );

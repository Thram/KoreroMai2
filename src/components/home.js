const debug = require('debug')('components:home')
const React = require('react')
const { connect } = require('react-redux')
const request = require('superagent');


class home extends React.Component{
  //this is how we define functions in an class/object
  render(){
    debug(this.props)
    const { dispatch } = this.props

    return(
      <div>
        <h1>Nau mai, haere mai</h1>
        <h2>Learn te reo Māori</h2>
        <button onClick={this.handleClick.bind(this)} className='button'>Play!</button>
      </div>
    )
  }

  handleClick(e){
    //by default button onClicks will want to refresh the page and eventListener
    e.preventDefault()
    this.props.router.push(`/`)
  }


}

module.exports = connect((state) => state)(home)

const debug = require('debug')('components:letter')
const React = require('react')
const { connect } = require('react-redux')
const request = require('superagent');
const { Link } = require('react-router')

class letter extends React.Component{

constructor() {
    super()

    this.playCapital = this.playCapital.bind(this)
    this.playLower = this.playLower.bind(this)
  }

  playCapital(cap) {
    this.refs[cap].load()
    this.refs[cap].play()
  }

  playLower(low) {
    this.refs[low].load()
    this.refs[low].play()
  }


  render(){
    debug(this.props)
    const cap = 'cap'
    const low = 'low'
    const { dispatch, letter } = this.props
    const singleLetter = letter.letter.letter

    return(
      <div>
          <audio key={singleLetter.capitalSound} ref={`${cap}`} >
            <source src={singleLetter.capitalSound} preload='auto' />
          </audio>

          <audio key={singleLetter.lowerSound} ref={`${low}`} >
            <source src={singleLetter.lowerSound} preload='auto' />
          </audio>

        <button type="button" className="btn btn-lg display"
          onClick={() =>
            this.playCapital(cap)
          }>
          {singleLetter.capital}
        </button>

        <button type="button" className="btn btn-lg display"
          onClick={() =>
            this.playLower(low)
          }>
          {singleLetter.lowercase}
        </button>

        <br/>

        <button type="button" className="btn btn-lg display">
          {singleLetter.word}
        </button>

        <img src={singleLetter.wordImage} />

      </div>
    )
  }

  handleClick(e){
    e.preventDefault()
    this.props.router.push(`/`)
  }
}

module.exports = connect((state) => state)(letter)


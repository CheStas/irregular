import React, { Component } from 'react';
import './App.css';

const Sound = require('react-sound');

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      rus: ['Ломать(ся)', 'Приносить', 'Строить', 'Гореть, сжигать', 'Покупать', 'Уметь, мочь', 'Ловить', 'Выбирать', 'Падать', 'Кормить', 'Приходить','Стоить', 'Ползать, красться', 'Резать','Делать', 'Рисовать', 'Мечтать, видеть сны','Пить', 'Ехать, везти', 'Есть, поедать', 'Драться, сражаться', 'Находить', 'Летать', 'Запрещать', 'Забывать', 'Получать, становиться', 'Давать','Идти','Расти, вырастать', 'Вешать, висеть', 'Прятать(ся)', 'Ударять', 'Держать, проводить', 'Причинять боль', 'Хранить', 'Стоять на коленях', 'Знать', 'Класть(прокладывать, лежать, возложить)', 'Вести, руководить', 'Учить', 'Покидать', 'Давать взаймы', 'Позволять', 'Лежать', 'Зажигать свет', 'Терять', 'Делать(производить)', 'Означать', 'Встречать', 'Быть должным', 'Платить', 'Класть(ставить, помещать)', 'Бросать, прекращать', 'Читать', 'Ехать верхом', 'Звонить', 'Вставать', 'Бежать', 'Сказать', 'Видеть'],
      eng: ['break', 'bring', 'build', 'burn', 'buy', 'can', 'catch', 'choose', 'fall', 'feed', 'come', 'cost', 'creep', 'cut', 'do', 'draw', 'dream','drink', 'drive', 'eat', 'fight', 'find', 'fly', 'forbid', 'forget', 'get', 'give','go','grow', 'hang', 'hide', 'hit', 'hold', 'hurt', 'keep', 'kneel', 'know', 'lay', 'lead', 'learn', 'leave', 'lend', 'let', 'lie', 'light', 'lose', 'make', 'mean', 'meet', 'must', 'pay', 'put', 'quit', 'read', 'ride', 'ring', 'rise', 'run', 'say', 'see'],
      eng2: ['broke', 'brought', 'built', 'burnt', 'bought', 'could', 'caught', 'chose', 'fell', 'fed', 'came', 'cost', 'crept', 'cut', 'did', 'drew', 'dreamt','drank', 'drove', 'ate', 'fought', 'found', 'flew', 'forbade', 'forgot', 'got', 'gave','went','grew', 'hung', 'hid', 'hit', 'held', 'hurt', 'kept', 'knelt', 'knew', 'laid', 'led', 'learnt', 'left', 'lent', 'let', 'lay', 'lit', 'lost', 'made', 'meant', 'met', 'had to', 'paid', 'put', 'quit', 'read', 'rode', 'rang', 'rose', 'ran', 'said', 'saw'],
      eng3: ['broken', 'brought', 'built', 'burnt', 'bought', 'been able', 'caught', 'chosen', 'fallen', 'fed', 'come', 'cost', 'crept', 'cut', 'done', 'drawn', 'dreamt','drunk', 'driven', 'eaten', 'fought', 'found', 'flown', 'forbidden', 'forgotten', 'got', 'given','gone','grown', 'hung', 'hidden', 'hit', 'held', 'hurt', 'kept', 'knelt', 'known', 'laid', 'led', 'learnt', 'left', 'lent', 'let', 'lain', 'lit', 'lost', 'made', 'meant', 'met', 'had to', 'paid', 'put', 'quit', 'read', 'ridden', 'rung', 'risen', 'run', 'said', 'seen'],
      index: 0,
      input1: {
        borderColor: 'grey'
    },
      input2: {
        borderColor: 'grey'
    },
      input3: {
        borderColor: 'grey'
    },
    answers: false,
    playStatus: Sound.status.STOPPED,
    playStatus2: Sound.status.STOPPED,
    playStatus3: Sound.status.STOPPED,
    scoreTrue: 0,
    scoreFalse: 0,
    curentAnswer: 0
    }
    this.checkAnswer = this.checkAnswer.bind(this)
    this.getRandomInt = this.getRandomInt.bind(this)
    this.showAnser = this.showAnser.bind(this)
    this.handleSongFinishedPlaying = this.handleSongFinishedPlaying.bind(this)
    this.handleSongFinishedPlaying2 = this.handleSongFinishedPlaying2.bind(this)
    this.handleSongFinishedPlaying3 = this.handleSongFinishedPlaying3.bind(this)
    this.keyEvent = this.keyEvent.bind(this)
  }

  getRandomInt() {
      this.setState({
          playStatus: Sound.status.STOPPED,
          playStatus2: Sound.status.STOPPED,
          playStatus3: Sound.status.STOPPED
      })
    this.refs['eng'].value = ''
    this.refs['eng'].focus()
    this.refs['eng2'].value = ''
    this.refs['eng3'].value = ''
    this.setState({index: Math.floor(Math.random() * (this.state.rus.length - 0)) + 0})
    this.setState({
        input1: {
          borderColor: 'grey'
      },
        input2: {
          borderColor: 'grey'
      },
        input3: {
          borderColor: 'grey'
      },
      answers: false,
      curentAnswer: 0
    })
  }
  checkAnswer() {

      this.setState({
          playStatus: Sound.status.PLAYING,
          curentAnswer: 1
      })

    // console.log(this.state.rus[this.state.index], this.state.eng[this.state.index], this.state.eng2[this.state.index], this.state.eng3[this.state.index])

    if (this.refs['eng3'].value.trim().toLowerCase() === this.state.eng3[this.state.index] && this.refs['eng2'].value.trim().toLowerCase() === this.state.eng2[this.state.index] && this.refs['eng'].value.trim().toLowerCase() === this.state.eng[this.state.index] && this.state.curentAnswer === 0) {
        console.log('truee')
        this.setState({
            scoreTrue: this.state.scoreTrue + 1
        })
    } else {
        if (this.state.curentAnswer === 0) {
            this.setState({
                scoreFalse: this.state.scoreFalse +1
            })
        }
    }

    if (this.refs['eng3'].value.trim().toLowerCase() === this.state.eng3[this.state.index]) {
            this.setState({
                input3: {
                    borderColor: 'green'
                }
            })
        } else {
            this.setState({
                input3: {
                    borderColor: 'red'
                }
            })
            this.refs['eng3'].focus()
    }

    if (this.refs['eng2'].value.trim().toLowerCase() === this.state.eng2[this.state.index]) {
        this.setState({
            input2: {
                borderColor: 'green'
            }
        })
    } else {
        this.setState({
            input2: {
                borderColor: 'red'
            }
        })
        this.refs['eng2'].focus()
    }

    if (this.refs['eng'].value.trim().toLowerCase() ===  this.state.eng[this.state.index]) {
        this.setState({
            input1: {
                borderColor: 'green'
            }
        })
    } else {
        this.setState({
            input1: {
                borderColor: 'red'
            }
        })
        this.refs['eng'].focus()
    }

  }
  componentDidMount() {
    this.getRandomInt();
  }

  showAnser() {
      this.setState({
          answers: !this.state.answers
      })
  }
  handleSongFinishedPlaying() {
     this.setState({
         playStatus: Sound.status.STOPPED,
         playStatus2: Sound.status.PLAYING
     })
  }
  handleSongFinishedPlaying2() {
      this.setState({
          playStatus2: Sound.status.STOPPED,
          playStatus3: Sound.status.PLAYING
      })
  }
  handleSongFinishedPlaying3() {
      this.setState({
          playStatus3: Sound.status.STOPPED
      })
  }
  keyEvent(e) {
    //   console.log(e.keyCode, e.charCode)
      if (e.charCode === 13) {
          this.checkAnswer()
      }
  }


  render() {


    return (
      <div className="wrap">
      <p><span className="scoreTrue">{this.state.scoreTrue}</span> : <span className="scoreFalse">{this.state.scoreFalse}</span></p>
        <h1 className="word">
          {this.state.rus[this.state.index]}
        </h1>
        <div className="inputWrap">
          <div className="inputWrap__input">
            <input style={this.state.input1} ref="eng" type="text" onKeyPress={this.keyEvent} pattern="[A-Za-z]{12}"/>
            {this.state.answers && <p ref="answer1">{this.state.eng[this.state.index]}</p>}
          </div>
          <div className="inputWrap__input">
            <input style={this.state.input2} ref="eng2" type="text" onKeyPress={this.keyEvent} pattern="[A-Za-z]{12}"/>
            {this.state.answers && <p ref="answer2">{this.state.eng2[this.state.index]}</p>}
          </div>
          <div className="inputWrap__input">
            <input style={this.state.input3} ref="eng3" type="text"
            onKeyPress={this.keyEvent} pattern="[A-Za-z]{12}"/>
            {this.state.answers && <p ref="answer3">{this.state.eng3[this.state.index]}</p>}
          </div>
        </div>
        <div className="buttonWrap">
          <button onClick={this.checkAnswer}>check</button>
          <button onClick={this.getRandomInt}>next</button>
          <button onClick={this.showAnser}>show</button>
        </div>


        <Sound
            url={'sounds/' + this.state.eng[this.state.index] + '.mp3'}
            playStatus={this.state.playStatus}
            onFinishedPlaying={this.handleSongFinishedPlaying}
        />
        <Sound
            url={'sounds/' + this.state.eng2[this.state.index] + '.mp3'}
            playStatus={this.state.playStatus2}
            onFinishedPlaying={this.handleSongFinishedPlaying2}
        />
        <Sound
            url={'sounds/' + this.state.eng3[this.state.index] + '.mp3'}
            playStatus={this.state.playStatus3}
            onFinishedPlaying={this.handleSongFinishedPlaying3}
        />
      </div>
    );
  }
}

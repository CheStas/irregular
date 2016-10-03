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
      groups: {
          one: {
              rus: ['Ломать(ся)', 'Приносить', 'Строить', 'Гореть, сжигать', 'Покупать', 'Уметь, мочь', 'Ловить', 'Выбирать', 'Падать', 'Кормить'],
              eng: ['break', 'bring', 'build', 'burn', 'buy', 'can', 'catch', 'choose', 'fall', 'feed'],
              eng2: ['broke', 'brought', 'built', 'burnt', 'bought', 'could', 'caught', 'chose', 'fell', 'fed'],
              eng3: ['broken', 'brought', 'built', 'burnt', 'bought', 'been able', 'caught', 'chosen', 'fallen', 'fed'],
              show: false,
              add: false
          },
          two: {
              rus: ['Приходить','Стоить', 'Ползать, красться', 'Резать','Делать', 'Рисовать', 'Мечтать, видеть сны','Пить', 'Ехать, везти', 'Есть, поедать'],
              eng: ['come', 'cost', 'creep', 'cut', 'do', 'draw', 'dream', 'drink', 'drive', 'eat'],
              eng2: ['came', 'cost', 'crept', 'cut', 'did', 'drew', 'dreamt','drank', 'drove', 'ate'],
              eng3: ['come', 'cost', 'crept', 'cut', 'done', 'drawn', 'dreamt','drunk', 'driven', 'eaten'],
              show: false,
              add: false
          },
          three: {
              rus: ['Драться, сражаться', 'Находить', 'Летать', 'Запрещать', 'Забывать', 'Получать, становиться', 'Давать','Идти','Расти, вырастать', 'Вешать, висеть'],
              eng: ['fight', 'find', 'fly', 'forbid', 'forget', 'get', 'give','go','grow', 'hang'],
              eng2: ['fought', 'found', 'flew', 'forbade', 'forgot', 'got', 'gave','went','grew', 'hung'],
              eng3: ['fought', 'found', 'flown', 'forbidden', 'forgotten', 'got', 'given','gone','grown', 'hung'],
              show: false,
              add: false
          },
          four: {
              rus: ['Прятать(ся)', 'Ударять', 'Держать, проводить', 'Причинять боль', 'Хранить', 'Стоять на коленях', 'Знать', 'Класть(прокладывать, лежать, возложить)', 'Вести, руководить', 'Учить'],
              eng: ['hide', 'hit', 'hold', 'hurt', 'keep', 'kneel', 'know', 'lay', 'lead', 'learn'],
              eng2: ['hid', 'hit', 'held', 'hurt', 'kept', 'knelt', 'knew', 'laid', 'led', 'learnt'],
              eng3: ['hidden', 'hit', 'held', 'hurt', 'kept', 'knelt', 'known', 'laid', 'led', 'learnt'],
              show: false,
              add: false
          },
          five: {
              rus: ['Покидать', 'Давать взаймы', 'Позволять', 'Лежать', 'Зажигать свет', 'Терять', 'Делать(производить)', 'Означать', 'Встречать', 'Быть должным'],
              eng: ['leave', 'lend', 'let', 'lie', 'light', 'lose', 'make', 'mean', 'meet', 'must'],
              eng2: ['left', 'lent', 'let', 'lay', 'lit', 'lost', 'made', 'meant', 'met', 'had to'],
              eng3: ['left', 'lent', 'let', 'lain', 'lit', 'lost', 'made', 'meant', 'met', 'had to'],
              show: false,
              add: false
          },
          six: {
              rus: ['Платить', 'Класть(ставить, помещать)', 'Бросать, прекращать', 'Читать', 'Ехать верхом', 'Звонить', 'Вставать', 'Бежать', 'Сказать', 'Видеть'],
              eng: ['pay', 'put', 'quit', 'read', 'ride', 'ring', 'rise', 'run', 'say', 'see'],
              eng2: ['paid', 'put', 'quit', 'read', 'rode', 'rang', 'rose', 'ran', 'said', 'saw'],
              eng3: ['paid', 'put', 'quit', 'read', 'ridden', 'rung', 'risen', 'run', 'said', 'seen'],
              show: false,
              add: false
          },
          seven: {
              rus: [],
              eng: [],
              eng2: [],
              eng3: []
          },
          eight: {
              rus: [],
              eng: [],
              eng2: [],
              eng3: []
          },
          nine: {
              rus: [],
              eng: [],
              eng2: [],
              eng3: []
          },
          ten: {
              rus: [],
              eng: [],
              eng2: [],
              eng3: []
          },
          eleven: {
              rus: [],
              eng: [],
              eng2: [],
              eng3: []
          },
      },
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
    this.keyOne = this.keyOne.bind(this)
    this.keyTwo = this.keyTwo.bind(this)
    this.keyThird = this.keyThird.bind(this)
    this.keyNext = this.keyNext.bind(this)
    // this.addGroup1 = this.addGroup1.bind(this)
    // this.showGroup1 = this.showGroup1.bind(this)
  }

  getRandomInt() {
    //   console.log(this.state.rus, this.state.eng, this.state.eng2, this.state.eng3)
    this.refs['eng'].focus()
    this.refs['eng'].value = ''
    this.refs['eng2'].value = ''
    this.refs['eng3'].value = ''
    this.setState({
        index: Math.floor(Math.random() * (this.state.rus.length - 0)) + 0,
        playStatus: Sound.status.STOPPED,
        playStatus2: Sound.status.STOPPED,
        playStatus3: Sound.status.STOPPED,
        answers: false,
        curentAnswer: 0,
        input1: {
          borderColor: 'grey'
      },
        input2: {
          borderColor: 'grey'
      },
        input3: {
          borderColor: 'grey'
      }
    })
  }

  checkAnswer() {
      this.setState({
          playStatus: Sound.status.PLAYING,
          curentAnswer: 1
      })

    // console.log(this.state.rus[this.state.index], this.state.eng[this.state.index], this.state.eng2[this.state.index], this.state.eng3[this.state.index])

    if (this.refs['eng3'].value.trim().toLowerCase() === this.state.eng3[this.state.index] && this.refs['eng2'].value.trim().toLowerCase() === this.state.eng2[this.state.index] && this.refs['eng'].value.trim().toLowerCase() === this.state.eng[this.state.index] && this.state.curentAnswer === 0) {
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
  keyOne(e) {
      if (e.charCode === 13) {
          this.refs['eng2'].focus()
      }
  }
  keyTwo(e) {
      if (e.charCode === 13) {
           this.refs['eng3'].focus()
      }
  }
  keyThird(e) {
      if (e.charCode === 13) {
          this.checkAnswer()
      }

  }
  keyNext(e) {
      if (e.keyCode === 16) {
          this.getRandomInt()
      }
  }
  // addGroup1() {
  //     if (!this.state.groups.one.add) {
  //         this.setState({
  //             rus: this.state.rus.concat(this.state.groups.one.rus),
  //             eng: this.state.eng.concat(this.state.groups.one.eng),
  //             eng2: this.state.eng2.concat(this.state.groups.one.eng2),
  //             eng3: this.state.eng3.concat(this.state.groups.one.eng3)
  //         })
  //     } else {
  //         this.setState({})
  //     }
  // }
  // showGroup1() {
  //
  //     this.setState({
  //         groups: {
  //             one: {
  //                 show: !this.state.groups.one.show
  //             }
  //         }
  //     })
  //     console.log('this.state.groups.one.show', this.state.groups.one.show)
  // }


  render() {

    return (
      <div className="wrap">
      <p><span className="scoreTrue">{this.state.scoreTrue}</span> : <span className="scoreFalse">{this.state.scoreFalse}</span></p>
        <h1 className="word">
          {this.state.rus[this.state.index]}
        </h1>
        <div className="inputWrap">
          <div className="inputWrap__input">
            <input style={this.state.input1} ref="eng" type="text" onKeyPress={this.keyOne} onKeyDown={this.keyNext}/>
            {this.state.answers && <p ref="answer1">{this.state.eng[this.state.index]}</p>}
          </div>
          <div className="inputWrap__input">
            <input style={this.state.input2} ref="eng2" type="text" onKeyPress={this.keyTwo} onKeyDown={this.keyNext}/>
            {this.state.answers && <p ref="answer2">{this.state.eng2[this.state.index]}</p>}
          </div>
          <div className="inputWrap__input">
            <input style={this.state.input3} ref="eng3" type="text"
            onKeyPress={this.keyThird} onKeyDown={this.keyNext}/>
            {this.state.answers && <p ref="answer3">{this.state.eng3[this.state.index]}</p>}
          </div>
        </div>
        <div className="buttonWrap">
          <button onClick={this.checkAnswer}>check</button>
          <button onClick={this.getRandomInt}>next</button>
          <button onClick={this.showAnser}>show</button>
        </div>
        {/*<div className="groups">
            <div className="group">
                <p><a  onClick={this.addGroup1}>add group1</a></p>
                <p><a onClick={this.showGroup1}>show group1</a></p>
                {this.state.groups.one.show && this.state.groups.one.eng.map(function (el) {
                    return <p>{el}</p>
                })}
            </div>
        </div>*/}

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

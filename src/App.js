//TODO возможность добавление/удаления слов из списка группами
//TODO показать все слова которые сейчас в списке
//TODO озвучка слов слов read(v2-v3) had to, been able

import React, { Component } from 'react';
import './App.css';

const Sound = require('react-sound');

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        rus: [],
        eng: [],
        eng2: [],
        eng3: [],
        groups: {
            one: {
              rus: ['Ломать(ся)', 'Приносить', 'Строить', 'Гореть, сжигать', 'Покупать', 'Уметь, мочь', 'Ловить', 'Выбирать', 'Падать', 'Кормить'],
              eng: ['break', 'bring', 'build', 'burn', 'buy', 'can', 'catch', 'choose', 'fall', 'feed'],
              eng2: ['broke', 'brought', 'built', 'burnt', 'bought', 'could', 'caught', 'chose', 'fell', 'fed'],
              eng3: ['broken', 'brought', 'built', 'burnt', 'bought', 'been able', 'caught', 'chosen', 'fallen', 'fed']
          },
          two: {
              rus: ['Приходить','Стоить', 'Ползать, красться', 'Резать','Делать', 'Рисовать', 'Мечтать, видеть сны','Пить', 'Ехать, везти', 'Есть, поедать'],
              eng: ['come', 'cost', 'creep', 'cut', 'do', 'draw', 'dream', 'drink', 'drive', 'eat'],
              eng2: ['came', 'cost', 'crept', 'cut', 'did', 'drew', 'dreamt','drank', 'drove', 'ate'],
              eng3: ['come', 'cost', 'crept', 'cut', 'done', 'drawn', 'dreamt','drunk', 'driven', 'eaten']
          },
          three: {
              rus: ['Драться, сражаться', 'Находить', 'Летать', 'Запрещать', 'Забывать', 'Получать, становиться', 'Давать','Идти','Расти, вырастать', 'Вешать, висеть'],
              eng: ['fight', 'find', 'fly', 'forbid', 'forget', 'get', 'give','go','grow', 'hang'],
              eng2: ['fought', 'found', 'flew', 'forbade', 'forgot', 'got', 'gave','went','grew', 'hung'],
              eng3: ['fought', 'found', 'flown', 'forbidden', 'forgotten', 'got', 'given','gone','grown', 'hung']
          },
          four: {
              rus: ['Прятать(ся)', 'Ударять', 'Держать, проводить', 'Причинять боль', 'Хранить', 'Стоять на коленях', 'Знать', 'Класть(прокладывать, лежать, возложить)', 'Вести, руководить', 'Учить'],
              eng: ['hide', 'hit', 'hold', 'hurt', 'keep', 'kneel', 'know', 'lay', 'lead', 'learn'],
              eng2: ['hid', 'hit', 'held', 'hurt', 'kept', 'knelt', 'knew', 'laid', 'led', 'learnt'],
              eng3: ['hidden', 'hit', 'held', 'hurt', 'kept', 'knelt', 'known', 'laid', 'led', 'learnt']
          },
          five: {
              rus: ['Покидать', 'Давать взаймы', 'Позволять', 'Лежать', 'Зажигать свет', 'Терять', 'Делать(производить)', 'Означать', 'Встречать', 'Быть должным'],
              eng: ['leave', 'lend', 'let', 'lie', 'light', 'lose', 'make', 'mean', 'meet', 'must'],
              eng2: ['left', 'lent', 'let', 'lay', 'lit', 'lost', 'made', 'meant', 'met', 'had to'],
              eng3: ['left', 'lent', 'let', 'lain', 'lit', 'lost', 'made', 'meant', 'met', 'had to']
          },
          six: {
              rus: ['Платить', 'Класть(ставить, помещать)', 'Бросать, прекращать', 'Читать', 'Ехать верхом', 'Звонить', 'Вставать', 'Бежать', 'Сказать', 'Видеть'],
              eng: ['pay', 'put', 'quit', 'read', 'ride', 'ring', 'rise', 'run', 'say', 'see'],
              eng2: ['paid', 'put', 'quit', 'read', 'rode', 'rang', 'rose', 'ran', 'said', 'saw'],
              eng3: ['paid', 'put', 'quit', 'read', 'ridden', 'rung', 'risen', 'run', 'said', 'seen']
          },
          seven: {
              rus: ['Искать, разыскивать', 'Продавать', 'Посылать', 'Ставить', 'Шить', 'Трясти', 'Светить', 'Стрелять', 'Показывать', 'Закрывать'],
              eng: ['seek', 'sell', 'send', 'set', 'sew', 'shake', 'shine', 'shoot', 'show', 'shut'],
              eng2: ['sought', 'sold', 'sent', 'set', 'sewed', 'shook', 'shone', 'shot', 'showed', 'shut'],
              eng3: ['sought', 'sold', 'sent', 'set', 'sewn', 'shaken', 'shone', 'shot', 'shown', 'shut']
          },
          eight: {
              rus: ['Петь', 'Тонуть', 'Сидеть', 'Спать', 'Скользить', 'Чувствовать запах', 'Говорить', 'Мчаться', 'Произносить по буквам, заколдовывать', 'Тратить'],
              eng: ['sing', 'sink', 'sit', 'sleep', 'slide', 'smell', 'speak', 'speed', 'spell', 'spend'],
              eng2: ['sang', 'sank', 'sat', 'slept','slid', 'smelt', 'spoke', 'sped', 'spelt', 'spent'],
              eng3: ['sung', 'sunk', 'sat', 'slept', 'slid', 'smelt', 'spoken', 'sped', 'spelt', 'spent']
          },
          nine: {
              rus: ['Испорть', 'Стоять', 'Красть', 'Вонзать', 'Клясться, богохульствовать', 'Мести, подметать', 'Плавать', 'Качать', 'Брать', 'Обучать'],
              eng: ['spoil', 'stand', 'steal', 'stick', 'swear', 'sweep', 'swim', 'swing', 'take', 'teach'],
              eng2: ['spoilt', 'stood', 'stole', 'stuck', 'swore', 'swept', 'swam', 'swung', 'took', 'taught'],
              eng3: ['spoilt', 'stood', 'stolen', 'stuck', 'sworn', 'swept', 'swum', 'swung', 'taken', 'taught']
          },
          ten: {
              rus: ['Рвать', 'Рассказывать', 'Думать', 'Бросать', 'Понимать', 'Расстраивать, огорчать', 'Просыпаться', 'Носить'],
              eng: ['tear', 'tell', 'think', 'thorow', 'understand', 'upset', 'wake', 'wear'],
              eng2: ['tore', 'told', 'thought', 'threw', 'understood', 'upset', 'woke', 'wore'],
              eng3: ['torn', 'told', 'thought', 'thrown', 'understood', 'upset', 'woken', 'worn']
          },
          eleven: {
              rus: ['Плакать, рыдать', 'Выигрывать', 'Проветривать, вентилировать', 'Отстранять, снимать деньги', 'Крутить, скурчивать', 'Писать'],
              eng: ['weep', 'win', 'wind', 'withdraw', 'wring', 'write'],
              eng2: ['wept', 'won', 'wound', 'withdrew', 'wrung', 'wrote'],
              eng3: ['wept', 'won', 'wound', 'withdrawn', 'wrung', 'written']
          },
      },
      show1: false,
      add1: true,
      show2: false,
      add2: true,
      show3: false,
      add3: true,
      show4: false,
      add4: true,
      show5: false,
      add5: true,
      show6: false,
      add6: true,
      show7: false,
      add7: true,
      show8: false,
      add8: true,
      show9: false,
      add9: true,
      show10: false,
      add10: true,
      show11: false,
      add11: true,
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
    this.groupToggle = this.groupToggle.bind(this)
  }

  getRandomInt() {
    //console.log(this.state.rus, this.state.eng, this.state.eng2, this.state.eng3)

    this.setState({
        rus: [].concat(
                this.state.add1 ? this.state.groups.one.rus : [],
                this.state.add2 ? this.state.groups.two.rus : [],
                this.state.add3 ? this.state.groups.three.rus : [],
                this.state.add4 ? this.state.groups.four.rus : [],
                this.state.add5 ? this.state.groups.five.rus : [],
                this.state.add6 ? this.state.groups.six.rus : [],
                this.state.add7 ? this.state.groups.seven.rus : [],
                this.state.add8 ? this.state.groups.eight.rus : [],
                this.state.add9 ? this.state.groups.nine.rus : [],
                this.state.add10 ? this.state.groups.ten.rus : [],
                this.state.add11 ? this.state.groups.eleven.rus : []
            ),
        eng: [].concat(
                this.state.add1 ? this.state.groups.one.eng : [],
                this.state.add2 ? this.state.groups.two.eng : [],
                this.state.add3 ? this.state.groups.three.eng : [],
                this.state.add4 ? this.state.groups.four.eng : [],
                this.state.add5 ? this.state.groups.five.eng : [],
                this.state.add6 ? this.state.groups.six.eng : [],
                this.state.add7 ? this.state.groups.seven.eng : [],
                this.state.add8 ? this.state.groups.eight.eng : [],
                this.state.add9 ? this.state.groups.nine.eng : [],
                this.state.add10 ? this.state.groups.ten.eng : [],
                this.state.add11 ? this.state.groups.eleven.eng : []
            ),
        eng2: [].concat(
                this.state.add1 ? this.state.groups.one.eng2 : [],
                this.state.add2 ? this.state.groups.two.eng2 : [],
                this.state.add3 ? this.state.groups.three.eng2 : [],
                this.state.add4 ? this.state.groups.four.eng2 : [],
                this.state.add5 ? this.state.groups.five.eng2 : [],
                this.state.add6 ? this.state.groups.six.eng2 : [],
                this.state.add7 ? this.state.groups.seven.eng2 : [],
                this.state.add8 ? this.state.groups.eight.eng2 : [],
                this.state.add9 ? this.state.groups.nine.eng2 : [],
                this.state.add10 ? this.state.groups.ten.eng2 : [],
                this.state.add11 ? this.state.groups.eleven.eng2 : []
            ),
        eng3: [].concat(
                this.state.add1 ? this.state.groups.one.eng3 : [],
                this.state.add2 ? this.state.groups.two.eng3 : [],
                this.state.add3 ? this.state.groups.three.eng3 : [],
                this.state.add4 ? this.state.groups.four.eng3 : [],
                this.state.add5 ? this.state.groups.five.eng3 : [],
                this.state.add6 ? this.state.groups.six.eng3 : [],
                this.state.add7 ? this.state.groups.seven.eng3 : [],
                this.state.add8 ? this.state.groups.eight.eng3 : [],
                this.state.add9 ? this.state.groups.nine.eng3 : [],
                this.state.add10 ? this.state.groups.ten.eng3 : [],
                this.state.add11 ? this.state.groups.eleven.eng3 : []
            )
        })
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
      if (this.state.curentAnswer === 0) {
          this.setState({
              scoreFalse: this.state.scoreFalse +1
          })
      }

      this.setState({
          answers: !this.state.answers,
          curentAnswer: 1
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
  groupToggle(e) {
      //console.log('target----', e.target.id === 'add1')
     if (e.target.id === 'add1') {
         this.setState({
             add1: !this.state.add1
         })
     }
     if (e.target.id === 'show1') {
         this.setState({
              show1: !this.state.show1
         })
     }
     if (e.target.id === 'add2') {
         this.setState({
             add2: !this.state.add2
         })
     }
     if (e.target.id === 'show2') {
         this.setState({
              show2: !this.state.show2
         })
     }
     if (e.target.id === 'add3') {
         this.setState({
             add3: !this.state.add3
         })
     }
     if (e.target.id === 'show3') {
         this.setState({
              show3: !this.state.show3
         })
     }
     if (e.target.id === 'add4') {
         this.setState({
             add4: !this.state.add4
         })
     }
     if (e.target.id === 'show4') {
         this.setState({
              show4: !this.state.show4
         })
     }
     if (e.target.id === 'add5') {
         this.setState({
             add5: !this.state.add5
         })
     }
     if (e.target.id === 'show5') {
         this.setState({
              show5: !this.state.show5
         })
     }
     if (e.target.id === 'add6') {
         this.setState({
             add6: !this.state.add6
         })
     }
     if (e.target.id === 'show6') {
         this.setState({
              show6: !this.state.show6
         })
     }
     if (e.target.id === 'add7') {
         this.setState({
             add7: !this.state.add7
         })
     }
     if (e.target.id === 'show7') {
         this.setState({
              show7: !this.state.show7
         })
     }
     if (e.target.id === 'add8') {
         this.setState({
             add8: !this.state.add8
         })
     }
     if (e.target.id === 'show8') {
         this.setState({
              show8: !this.state.show8
         })
     }
     if (e.target.id === 'add9') {
         this.setState({
             add9: !this.state.add9
         })
     }
     if (e.target.id === 'show9') {
         this.setState({
              show9: !this.state.show9
         })
     }
     if (e.target.id === 'add10') {
         this.setState({
             add10: !this.state.add10
         })
     }
     if (e.target.id === 'show10') {
         this.setState({
              show10: !this.state.show10
         })
     }
     if (e.target.id === 'add11') {
         this.setState({
             add11: !this.state.add11
         })
     }
     if (e.target.id === 'show11') {
         this.setState({
              show11: !this.state.show11
         })
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
        <div className="groups" onClick={this.groupToggle}>
            <div className="group">
                <p><a id="add1" className={this.state.add1 && 'add'}>add group1</a></p>
                <p><a id="show1" className={this.state.show1 && 'show'}>show group1</a></p>
                {this.state.show1 && this.state.groups.one.eng.map(function (el) {
                    return <p>{el}</p>
                })}
            </div>
            <div className="group">
                <p><a id="add2" className={this.state.add2 && 'add'}>add group2</a></p>
                <p><a id="show2">show group2</a></p>
                {this.state.show2 && this.state.groups.two.eng.map(function (el) {
                    return <p>{el}</p>
                })}
            </div>
            <div className="group">
                <p><a id="add3" className={this.state.add3 && 'add'}>add group3</a></p>
                <p><a id="show3">show group3</a></p>
                {this.state.show3 && this.state.groups.three.eng.map(function (el) {
                    return <p>{el}</p>
                })}
            </div>
            <div className="group">
                <p><a id="add4" className={this.state.add4 && 'add'}>add group4</a></p>
                <p><a id="show4">show group4</a></p>
                {this.state.show4 && this.state.groups.four.eng.map(function (el) {
                    return <p>{el}</p>
                })}
            </div>
            <div className="group">
                <p><a id="add5" className={this.state.add5 && 'add'}>add group5</a></p>
                <p><a id="show5">show group5</a></p>
                {this.state.show5 && this.state.groups.five.eng.map(function (el) {
                    return <p>{el}</p>
                })}
            </div>
            <div className="group">
                <p><a id="add6" className={this.state.add6 && 'add'}>add group6</a></p>
                <p><a id="show6">show group6</a></p>
                {this.state.show6 && this.state.groups.six.eng.map(function (el) {
                    return <p>{el}</p>
                })}
            </div>
            <div className="group">
                <p><a id="add7" className={this.state.add7 && 'add'}>add group7</a></p>
                <p><a id="show7">show group7</a></p>
                {this.state.show7 && this.state.groups.seven.eng.map(function (el) {
                    return <p>{el}</p>
                })}
            </div>
            <div className="group">
                <p><a id="add8" className={this.state.add8 && 'add'}>add group8</a></p>
                <p><a id="show8">show group8</a></p>
                {this.state.show8 && this.state.groups.eight.eng.map(function (el) {
                    return <p>{el}</p>
                })}
            </div>
            <div className="group">
                <p><a id="add9" className={this.state.add9 && 'add'}>add group9</a></p>
                <p><a id="show9">show group9</a></p>
                {this.state.show9 && this.state.groups.nine.eng.map(function (el) {
                    return <p>{el}</p>
                })}
            </div>
            <div className="group">
                <p><a id="add10" className={this.state.add10 && 'add'}>add group10</a></p>
                <p><a id="show10">show group10</a></p>
                {this.state.show10 && this.state.groups.ten.eng.map(function (el) {
                    return <p>{el}</p>
                })}
            </div>
            <div className="group">
                <p><a id="add11" className={this.state.add11 && 'add'}>add group11</a></p>
                <p><a id="show11">show group11</a></p>
                {this.state.show11 && this.state.groups.eleven.eng.map(function (el) {
                    return <p>{el}</p>
                })}
            </div>
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

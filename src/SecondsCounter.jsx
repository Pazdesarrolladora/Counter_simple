import React, { Component } from "react";
import { MdOutlinePlayArrow } from "react-icons/md";
import { MdOutlineReplay } from "react-icons/md";
import { AiOutlinePause } from "react-icons/ai";
import { FcReadingEbook } from "react-icons/fc";
import { FcReading } from "react-icons/fc";
import { FcFullBattery } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import notificationSound from "./sounds/break.mp3";
import notificationSound2 from "./sounds/working.mp3";

class SecondsCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 1500,
      isRunning: false,
      isBreak: false,
      workTime: 1500,
      breakTime: 300,
    };
    this.breakSound = new Audio(notificationSound);
    this.workingSound = new Audio(notificationSound2);
  }

  componentWillUnmount() {
    // Limpiar el temporizador al desmontar el componente
    clearInterval(this.timer);
  }

  startTimer = () => {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        time: prevState.time - 1,
      }));

      if (this.state.time === 0) {
        console.log("oka")
        clearInterval(this.timer);
        this.setState({ isRunning: false });
        this.toggleTime();
        this.startTimer();
      }
    }, 10);
    this.workingSound.play();
    this.breakSound.play();

    
    
  };

  toggleTime = () => {
    this.setState((prevState) => {
      const { isBreak, workTime, breakTime } = prevState;

      if (isBreak) {

         // Reproducir otro sonido
         this.breakSound.pause();
         this.breakSound.currentTime = 0; // Reiniciar el audio al inicio

        console.log("Estoy trabajando")
        return {
          time: workTime,
          isBreak: false,
        };
      } else {
        console.log("Estoy descansando")
        // Reproducir otro sonido
        this.workingSound.pause();
        this.workingSound.currentTime = 0; // Reiniciar el audio al inicio
       
        this.breakSound.play();

        return {
          time: breakTime,
          isBreak: true,
        };
      }
    });
  };
  

   startTimerOnClick = () => {
    this.setState(
      (prevState) => ({
        isRunning: !prevState.isRunning,
      }),
      () => {
        if (this.state.isRunning) {
          this.startTimer();
        } else {
          clearInterval(this.timer);
        }
      }
    );
  };

  
  pauseTimer = () => {
    clearInterval(this.timer);
    this.setState({ isRunning: false });
  };

  resetTimer = () => {
    clearInterval(this.timer);
    this.setState({
      time: this.state.workTime,
      isRunning: false,
      isBreak: false,
    });
  };

  formatTime = (time) => {
    // Lógica para formatear el tiempo en formato
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  render() {
    const { time, isBreak } = this.state;

    return (
<div>
  <div className="container">
    <div className="row ">
      <div className="col-12">
          <div className="seconds-container text-center m-5 p-4">
            <div className="justify-content-center">
              <h1 className="display-5 text-light">
                <FcFullBattery />
                <FcLikePlaceholder />
                {isBreak ? "Break" : "Work"} <FcReading />
                <FcReadingEbook />
              </h1>
              <p className="display-4 text-light">{this.formatTime(time)}</p>
            </div>
          </div>
      </div>
    </div>
  </div>
  <div className="container2">
    <div className="row2">
      <div className="col-12">
          <div className="button-container text-center ">
            <button
              className="btn btn-secondary"
              onClick={this.startTimerOnClick}
            >
              <MdOutlinePlayArrow />
            </button>
            <button className="btn btn-secondary" onClick={this.resetTimer}>
              <MdOutlineReplay />
            </button>
            <button className="btn btn-secondary" onClick={this.pauseTimer}>
              <AiOutlinePause />
            </button>
            
          </div>
      </div>
    </div>
  </div>
</div>
    );
  }
}

export default SecondsCounter;

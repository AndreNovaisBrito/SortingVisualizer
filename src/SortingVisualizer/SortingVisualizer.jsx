import React, { Component } from "react";
import "./SortingVisualizer.css";
import {
  generateBubbleSortAnimations,
  generateInsertionSortAnimations,
} from "./SortingAlgorithms";

const arrayLength = 30; // Change this to the desired length of your random array
const minValue = 5; // Change this to the minimum value you want in the array
const maxValue = 500; // Change this to the maximum value you want in the array
// This is the main color of the array bars.
const PRIMARY_COLOR = "turquoise";

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = "red";

export default class SortingVisualizer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = generateRandomArray(arrayLength, minValue, maxValue);
    this.setState({ array });
    setTimeout(() => {
      const arrayBars = document.getElementsByClassName("bar");
      for (let i = 0; i < arrayBars.length; i++) {
        arrayBars[i].style.backgroundColor = "orange";
      }
    }, 0);
  }

  insertionSort() {
    const { array } = this.state;
    const newArray = [...array];
    const animations = generateInsertionSortAnimations(newArray); // An array to store the animations

    // Create an animation loop
    let animationIndex = 0;
    const animate = () => {
      const arrayBars = document.getElementsByClassName("bar");
      if (animationIndex < animations.length) {
        const [index1, index2] = animations[animationIndex];

        // Swap the elements in the array
        let temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;

        this.setState({ array }, () => {
          //   Continue the animation with the next step
          setTimeout(() => {
            arrayBars[index1].style.backgroundColor = PRIMARY_COLOR;
            arrayBars[index2].style.backgroundColor = SECONDARY_COLOR;
          }, 0);
          animationIndex++;
          requestAnimationFrame(animate);
        });
      }
    };
    // Start the animation loop
    animate();
  }

  bubbleSort() {
    const { array } = this.state;
    const newArray = [...array];
    const animations = generateBubbleSortAnimations(newArray); // An array to store the animations

    // Create an animation loop
    let animationIndex = 0;
    const animate = () => {
      const arrayBars = document.getElementsByClassName("bar");
      if (animationIndex < animations.length) {
        const [index1, index2] = animations[animationIndex];

        // Swap the elements in the array
        let temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;

        this.setState({ array }, () => {
          //   Continue the animation with the next step
          setTimeout(() => {
            arrayBars[index1].style.backgroundColor = PRIMARY_COLOR;
            arrayBars[index2].style.backgroundColor = SECONDARY_COLOR;
          }, 0);
          animationIndex++;
          requestAnimationFrame(animate);
        });
      }
    };
    // Start the animation loop
    animate();
  }

  render() {
    const { array } = this.state;

    return (
      <div>
        <button onClick={() => this.resetArray()}>Reset Array</button>
        <button onClick={() => this.insertionSort()}>Insertion Sort</button>
        <button onClick={() => this.bubbleSort()}>Bubble Sort</button>

        <div className="bar-container" style={{ height: maxValue + "px" }}>
          {array.map((value, index) => (
            <div
              key={index}
              className="bar"
              style={{
                height: `${value}px`,
              }}
            >
              {value}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

function generateRandomArray(length, min, max) {
  const randomArray = [];

  for (let i = 0; i < length; i++) {
    const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
    randomArray.push(randomValue);
  }
  return randomArray;
}

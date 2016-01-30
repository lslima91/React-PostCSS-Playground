import React, { Component } from 'react';
// import {main, section, sec} from './css/style.styl'
import {main, section, sec} from './css/style.css'

const Responsive = () =>(
      <div className={section}>
        <div className={sec}>1</div>
        <div className={sec}>2</div>
        <div className={sec}>3</div>
        <div className={sec}>4</div>
        <div className={sec}>5</div>
        <div className={sec}>6</div>
      </div>
  )
const Offset  = ({}) => (
    // {/*<!-- Offset -->*/}
      <div className={section}>
        <div className={sec}>1</div>
        <div className={sec}>2</div>
      </div>
 )
const Nesting = ({}) => (
      // {/*<!-- Nesting -->*/}
      <div className={section}>
        <div className={sec}>a</div>
        <div className={sec}>a</div>
        <div className={sec}>
          <div className={sec}>b</div>
          <div className={sec}>b</div>
        </div>
      </div>
 )
const Alignment = () => (
      // {/*<!-- Alignment -->*/}
      <div className={section}>
        <div className={sec}>1</div>
      </div>
 )
const Cycle = () => (
  // {/*<!-- Cycle -->*/}
  <div className={section}>
    <div className={sec}>
      1 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem rem nam dolore repellendus provident, voluptas necessitatibus vel cupiditate delectus, doloremque incidunt accusantium quia! Nisi molestiae totam natus, in assumenda accusantium.
    </div>
    <div className={sec}>
      2 - Lorem ipsum dolor sit amet.
    </div>
    <div className={sec}>
      3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. At sunt harum ut rerum id quae voluptas velit iusto quasi distinctio.
    </div>
    <div className={sec}>
      4 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, sequi?
    </div>
    <div className={sec}>
      5 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime nisi deserunt, dolorem accusamus sint ipsam dolor quae ab animi assumenda architecto placeat possimus fugit doloribus vel, corporis amet aliquam maiores!
    </div>
    <div className={sec}>
      6 - Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </div>
  </div>
 )
const Vgrid = () => (
  // {/*<!-- Vertical Grid -->*/}
  <div className={section}>
    <div className={sec}>1</div>
    <div className={sec}>2</div>
    <div className={sec}>3</div>
  </div>
 )
const Wafflegrid = () => (
  // {/*<!-- Waffle Grid -->*/}
  <div className={section}>
    <div className={sec}>1</div>
    <div className={sec}>2</div>
    <div className={sec}>3</div>
    <div className={sec}>4</div>
    <div className={sec}>5</div>
    <div className={sec}>6</div>
    <div className={sec}>7</div>
    <div className={sec}>8</div>
    <div className={sec}>9</div>
    <div className={sec}>10</div>
    <div className={sec}>11</div>
    <div className={sec}>12</div>
    <div className={sec}>13</div>
    <div className={sec}>14</div>
    <div className={sec}>15</div>
  </div>
 )
const Varstyles = () => (
  // {/*<!-- Varying Sizes -->*/}
  <div className={section}>
    <div className={sec}>1</div>
    <div className={sec}>2</div>
  </div>
 )
const Sordering = () => (
  <div className={section}>
    {/*<!-- Source Ordering -->*/}
      <div className={sec}>1</div>
      <div className={sec}>2</div>
  </div>
 )

export class App extends Component {
  render() {
    return (
      <div>
        <Responsive />
        <Offset/>
        <Nesting />
        <Alignment/>
        <Cycle/>
        <Vgrid/>
        <Wafflegrid />
        <Varstyles />
        <Sordering />*/}
      </div>
    );
  }
}

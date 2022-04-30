import { forwardRef, useImperativeHandle, useRef } from 'react';
import './App.css';
import { Controls, PlayState, SplitChars, Timeline, Tween } from 'react-gsap';

const TargetWithNames = forwardRef((props, ref) => {
  const div1 = useRef(null);
  const div2 = useRef([]);
  const div3 = useRef(null);
  useImperativeHandle(ref, () => ({
    div1,
    div2,
    div3,
  }));
  return (
    <div style={{ textAlign: 'center' }}>
      <h3 ref={div1}>THIS</h3>
      <SplitChars
        ref={charRef => div2.current.push(charRef)}
        wrapper={<h3 style={{ display: 'inline-block' }} />}
      >
        TEST
      </SplitChars>
      <h3 ref={div3}>IS A</h3>
    </div>
  );
});

function App() {
  return (
    <div className="App">
      <Controls playState={PlayState.stop}>
      <Timeline target={<TargetWithNames />}>
        <Tween from={{ x: '-100vw' }} target="div1" position="0" />
        <Tween from={{ x: '-100vw' }} target="div2" position="2" stagger={0.1} />
        <Tween from={{ x: '-100vw' }} target="div3" position="1" />
      </Timeline>
    </Controls>
    </div>
  );
}

export default App;

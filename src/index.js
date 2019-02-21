// sources:
// https://stackoverflow.com/questions/37949981/call-child-method-from-parent
// https://codesandbox.io/s/8lxr0pq179

import React, { forwardRef, useRef, useImperativeHandle } from "react";
import { render } from "react-dom";

// We need to wrap component in `forwardRef` in order to gain
// access to the ref object that is assigned using the `ref` prop.
// This ref is passed as the second parameter to the function component.
const Child = forwardRef((props, ref) => {
  // The component instance will be extended
  // with whatever you return from the callback passed
  // as the second argument
  useImperativeHandle(ref, () => ({
    getAlert() {
      alert("getAlert from Child");
    }
  }));

  return <h1>Hi Mx (J2L)</h1>;
});

const Parent = () => {
  // In order to gain access to the child component instance,
  // you need to assign it to a `ref`, so we call `useRef()` to get one
  const childRef = useRef();

  return (
    <div>
      <Child ref={childRef} />
      <button onClick={() => childRef.current.getAlert()}>Click</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
render(<Parent />, rootElement);
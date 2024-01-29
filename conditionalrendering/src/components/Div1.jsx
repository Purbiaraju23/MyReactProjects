function Div1(props) {
    const divStyle = {
      color: props.color,
      backgroundColor: props.bgcolor, 
    };


    
  
    return (
        <>
      <div style={divStyle}>
        <h1>Hello World</h1>
      </div>
      <button onClick={props.onclick} onDoubleClick={props.ondblclick}>
            Click Me
      </button>
      </>
    );
  }
  
export default Div1;
  
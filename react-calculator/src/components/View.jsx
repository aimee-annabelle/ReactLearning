import { useState } from "react";
import Output from "./Output";
import ValueButton from "./ValueButton";

export default function View() {
  const numbers = [
    ".",
    "0",
    "3",
    "2",
    "1",
    "6",
    "5",
    "4",
    "9",
    "8",
    "7",
  ].reverse();
  const [output, setOutput] = useState("");
  const [result, setResult] = useState("");
  console.log(output);
  console.log(result);
  function handleValueChange(val) {
    switch (val) {
      case "clear":
        setOutput("");
        setResult("")
        break;
      case "negate":
        setOutput(prevOut => ("-"+prevOut))
        break;
      case "percent":
        break;
      case "/":
        setResult((prevResult) => prevResult + "/");

        break;
      case "+":
        setResult((prevResult) => prevResult + "+");
        break;
      case "-":
        setResult((prevResult) => prevResult + "-");
        break;
      case "*":
        setResult((prevResult) => prevResult + "*");
        break;
      case "=":
        setResult((prevResult) => {
          setOutput(eval(prevResult));
          return eval(prevResult);
        });
        setOutput("");
        break;
      default:
        setResult((prevResult) => {
        if(!numbers.includes(prevResult[prevResult.length-1])){
          setOutput(val)
        } else{
            setOutput(prevOut => (prevOut + val))
        }
          return prevResult + val;
        });

        break;
    }
  }

  return (
    <div className="absolute border-gray-400 w-[500px] h-[500px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 grid grid-cols-4 items-stretch justify-stretch">
      <Output value={output} />
      <div className="w-full grid grid-cols-4 col-span-4">
        <ValueButton id="clear" value="AC" onClick={handleValueChange} />
        <ValueButton id="negate" value="+/-" onClick={handleValueChange} />
        <ValueButton id="percent" value="%" onClick={handleValueChange} />
        <ValueButton
          id="/"
          value="/"
          isYellow={true}
          onClick={handleValueChange}
        />
      </div>
      <div className="col-span-3 grid grid-cols-3 w-full">
        {numbers.map((num) => (
          <ValueButton
            key={num}
            id={num}
            value={num}
            onClick={handleValueChange}
          />
        ))}
      </div>
      <div className="grid col-span-1">
        <ValueButton
          id="*"
          value="x"
          isYellow={true}
          onClick={handleValueChange}
        />
        <ValueButton
          id="-"
          value="-"
          isYellow={true}
          onClick={handleValueChange}
        />
        <ValueButton
          id="+"
          value="+"
          isYellow={true}
          onClick={handleValueChange}
        />
        <ValueButton
          id="="
          value="="
          isYellow={true}
          onClick={handleValueChange}
        />
      </div>
    </div>
  );
}

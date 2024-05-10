"use client";
import React, { useEffect, useState } from 'react';
import PasscodeCircle from './PassCodeComponents/PasscodeCircle';
import IsCorrectOrIncorrect from './PassCodeComponents/IsCorrectOrIncorrect';
import PasscodeCircleButton from './PassCodeComponents/PasscodeCircleButton';

const MAX_NUMBER_OF_DIGITS = 6;
export default function Passcode() {
  const [passcode, setPasscode] = useState<String>("");
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [isWrong, setIsWrong] = useState<boolean>(false);

  const handleKeyClick = (key: string) => {
    if(passcode.length < MAX_NUMBER_OF_DIGITS) {
      setPasscode((prevPasscode) => prevPasscode.concat(key) );
    }
    console.log(passcode);
  }

  const handleDelete = () => {
    setPasscode(passcode.slice(0, -1));
  }

  useEffect(() => {
    if(passcode.length === MAX_NUMBER_OF_DIGITS){
        if(passcode === "123456"){
          setIsCorrect(true);
          setTimeout(() => {
            setIsCorrect(false);
          }, 3000);
        }else{
          setIsWrong(true);
          setPasscode("");
          setTimeout(() => {
            setIsWrong(false);
          }, 3000);
        }
    }
  }, [passcode])

  return (
    <div className="relative flex flex-col justify-center items-center gap-3">
      <h2>Enter passcode</h2>
      <IsCorrectOrIncorrect isCorrect={isCorrect} isWrong={isWrong}/>
      <PasscodeCircle MAX_NUMBER_OF_DIGITS={MAX_NUMBER_OF_DIGITS} passcode={passcode}/>
      <div className="grid grid-cols-3 gap-5 mt-10">
        {[...Array(9)].map((_, index) => (
          <PasscodeCircleButton key={index} handleKeyClick={handleKeyClick} value={(index + 1).toString()}>{index + 1}</PasscodeCircleButton>
        ))}
          <PasscodeCircleButton handleKeyClick={handleDelete} value={"&#60;"}>&#60;</PasscodeCircleButton>
          <PasscodeCircleButton handleKeyClick={handleKeyClick} value={"0"}>0</PasscodeCircleButton>          
      </div>
    </div>
  )
}
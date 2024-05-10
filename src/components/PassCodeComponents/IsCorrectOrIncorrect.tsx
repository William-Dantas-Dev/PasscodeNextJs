const IsCorrectOrIncorrect = ({ isCorrect, isWrong}: {
  isCorrect: boolean,
  isWrong: boolean,
}) => {
  return (
    <>
      {isCorrect && <h2 className="absolute mt-8 text-2xl top-5 text-green-500">Success!</h2>}
      {isWrong && <h2 className="absolute mt-8 text-2xl top-5 text-red-500">Wrong!</h2>}
    </>
  )
  
}

export default IsCorrectOrIncorrect;
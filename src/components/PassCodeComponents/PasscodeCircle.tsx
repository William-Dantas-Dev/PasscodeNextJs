const PasscodeCircle = ({ MAX_NUMBER_OF_DIGITS, passcode}: {
  MAX_NUMBER_OF_DIGITS: number,
  passcode: String,
}) => {
  return <div className="flex gap-3">
        {[...Array(MAX_NUMBER_OF_DIGITS)].map((_, index) => (
          <div
          key={index}
          className={
            `border size-2 rounded-full
            ${index < passcode.length && "bg-slate-100"}
            `}>
          </div>
        ))}
      </div>
}

export default PasscodeCircle;
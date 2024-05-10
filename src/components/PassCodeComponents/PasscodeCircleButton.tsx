const PasscodeCircleButton = ({ children, handleKeyClick, value}: {
  handleKeyClick: Function,
  value: String,
  children: React.ReactNode,
}) => {
  return <button
            className="flex justify-center items-center text-2xl bg-slate-700/50 hover:bg-slate-600 border size-14 rounded-full"
            onClick={() => handleKeyClick(value)}
            >
            {children}
          </button>
}

export default PasscodeCircleButton;
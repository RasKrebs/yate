export function LoginButton({ Name, Logo, backgroundColor, textColor}) {
    return (
        <button 
        className={`relative flex items-center justify-center p-1 w-[300px] h-[50px] 
        bg-${backgroundColor} rounded-2xl hover:bg-green-700 m-[5px] transition-colors`}>
            <span className="absolute left-0 ml-[15px] flex-shrink-0">
                {Logo}
            </span>
            <span className={`text-${textColor}`}>
                {Name}
            </span>
        </button>
    );
};
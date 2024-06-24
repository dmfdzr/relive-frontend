const Button = (props) => {
    const {children, variant = "bg-gray-700" } = props;
    return (
            <button className={`w-full ${variant} hover:bg-teal-400 text-white font-bold mt-10 p-3 rounded-md`} type="submit">
                {children}
            </button>
    )
}

export default Button;
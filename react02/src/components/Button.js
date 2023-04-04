const Button = ({title, variant}) => {
    return (
        <button className={`main-btn ${variant}`}>
            {title}
        </button>
    )

}

export default Button
interface ErrorMessageProps {
  error : string
}

export const ErrorMessage = ({ error } : ErrorMessageProps ) => {
    return (
        <p style={{color: '#f00'}}> { error } </p>
    )
}
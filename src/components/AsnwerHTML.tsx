import { Answers } from '../models'

interface AnswerProps {
  answer: Answers
}

export const AsnwerHTML = ({answer} : AnswerProps) => {
    return (
      <div className="answer">
        <h1 className='answer__text'> {answer.answer} </h1>
        <img src={answer.image} alt="p" className='answer__img'/>
      </div>
    )
}
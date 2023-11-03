import { useState , useEffect } from "react"
import axios, { AxiosError } from "axios"
import { Answers } from "../models"

const initialAnswer: Answers = {
  answer: '',
  forced: false,
  image: ''
};

export const AnswerHook = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [answer, setAnswer] = useState<Answers>(initialAnswer)

  const fetchAswer = async () => {
    try {
      setError('')
      setLoading(true)
      const res = await axios.get<Answers>('https://yesno.wtf/api')
      setTimeout(() => {
        setAnswer(res.data)
        setLoading(false)
      }, 1000)
    } catch (e: unknown) {
      const error = e as AxiosError
      setLoading(false)
      setError(error.message)
    }
  }

  useEffect(() => {
    fetchAswer()

    const interval = setInterval(() => {
      fetchAswer()
    }, 5000)

    return () => {
      clearInterval(interval)
    }
  }, [])

    return { loading, error, answer }
}
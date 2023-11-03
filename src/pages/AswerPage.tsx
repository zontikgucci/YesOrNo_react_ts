import { AnswerHook } from "../hooks/AnswerHook"
import { Loading } from "../components/Loading"
import { ErrorMessage } from "../components/ErrorMessage"
import { AsnwerHTML } from "../components/AsnwerHTML"

export const AswerPage = () => {
  const { loading, error, answer} = AnswerHook()

    return (
      <>
        {loading && <Loading />}
        {error && <ErrorMessage error={ error }/>}
        {!loading && <AsnwerHTML answer={answer}  />}
      </>
    )

}
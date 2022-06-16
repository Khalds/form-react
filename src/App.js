import React, { useState } from "react"
import "./app.css"

function App() {
  const [text, setText] = useState("")

  const [textDirty, setDirty] = useState(false)

  const [textMess, setMess] = useState("Поле ввода не должно быть пустой")

  const [isEmpty, setIsEmpty] = useState(true)

  const [butErr, setButErr] = useState(true)

  //? Проверяет нажал ли я на строку инпут
  const blurHandler = (e) => {
    setDirty(true)
    setMess("Поле ввода не должно быть пустой")
    setButErr(true)
  }

  //? Действия с инпутом и проверка строки
  const textHandler = (e) => {
    setText(e.target.value)
    if (e.target.value) {
      setIsEmpty(false)
      setMess("")
      setButErr(false)
    }
    if (!e.target.value) {
      setIsEmpty(true)
      setMess("Поле ввода не должно быть пустой")
      setButErr(true)
    }
  }

  //? получение текста
  const getText = () => {
    setIsEmpty(true)
    console.log(text)
    setText("")
    setMess("Сообщение успешно отправлено")
    setButErr(false)
  }

  return (
    <>
      <form onClick={(e) => e.preventDefault()}>
        <input
          onBlur={(e) => blurHandler(e)}
          placeholder="Введите текст..."
          type="text"
          value={text}
          onChange={(e) => textHandler(e)}
        />
        <button disabled={isEmpty} type="submit" onClick={(e) => getText()}>
          отправить
        </button>
        {textDirty && textMess && (
          <div className={`${butErr === true ? "is-error" : "no-error"}`}>
            {textMess}
          </div>
        )}
      </form>
    </>
  )
}

export default App

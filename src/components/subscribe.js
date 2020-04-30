import React, { useState } from "react"

const Subscribe = () => {
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    setEmailError("")

    if (!email) return setEmailError("Please enter an email.")
  }

  const handleEmailUpdate = e => setEmail(e.target.value)

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex">
        <input
          className="body-font border border-gray-300 rounded mr-4 px-4 py-2 mb-0 flex-grow"
          name="email"
          onChange={handleEmailUpdate}
          placeholder="Your email"
          value={email}
        />
        <button
          type="submit"
          className="rounded shadow-lg px-4 py-3 hover:shadow-xl bg-gray-900 text-white transition-shadow duration-100"
        >
          Subscribe
        </button>
      </div>
      {emailError && <p className="mt-2 body-font">{emailError}</p>}
    </form>
  )
}

export default Subscribe

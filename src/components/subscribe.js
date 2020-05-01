import React, { useState } from "react"

const Subscribe = () => {
  const [email, setEmail] = useState("")
  const [success, setSuccess] = useState("")
  const [emailError, setEmailError] = useState("")

  const handleSubmit = async e => {
    e.preventDefault()
    setSuccess("")
    setEmailError("")

    if (!email) return setEmailError("Please enter an email.")

    const subscribeBody = {
      api_key: process.env.CONVERT_KIT_PUB_KEY,
      email,
    }

    const response = await fetch(
      "https://api.convertkit.com/v3/forms/1358564/subscribe",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(subscribeBody),
      }
    )

    if (!response.ok) {
      const parsed = await response.json()

      return setEmailError(
        `There was a problem with your email. ${parsed.message}. Please try again.`
      )
    }

    return setSuccess(
      "Check your inbox to confirm your email. Thanks for subscribing."
    )
  }

  const handleEmailUpdate = e => setEmail(e.target.value)

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex max-w-md">
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
      {success && <p className="mt-2 body-font text-sm">{success}</p>}
      {emailError && <p className="mt-2 body-font text-sm">{emailError}</p>}
    </form>
  )
}

export default Subscribe

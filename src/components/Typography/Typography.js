import React from "react"

const Typography = ({ type, className, children, ...props }) => {
  switch (type) {
    case "h1":
      return (
        <h1 {...props} className={className}>
          {children}
        </h1>
      )
    case "h2":
      return (
        <h2 {...props} className={className}>
          {children}
        </h2>
      )
    case "h3":
      return (
        <h3 {...props} className={className}>
          {children}
        </h3>
      )
    case "h4":
      return (
        <h4 {...props} className={className}>
          {children}
        </h4>
      )
    case "h5":
      return (
        <h5 {...props} className={className}>
          {children}
        </h5>
      )
    case "h6":
      return (
        <h6 {...props} className={className}>
          {children}
        </h6>
      )
    case "label":
      return (
        <label {...props} className={className}>
          {children}
        </label>
      )
    case "small":
      return (
        <small {...props} className={className}>
          {children}
        </small>
      )
    default:
      return (
        <p {...props} className={className}>
          {children}
        </p>
      )
  }
}

export default Typography

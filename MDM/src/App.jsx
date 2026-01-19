import React from 'react'

// Functional Component
const Greet = () => {
  return <h1>Hello, World</h1>
}

// Class Component
class Welcome extends React.Component {
  render() {
    return <h1>Hello, World from Class Component</h1>
  }
}

// Main App Component
function App() {
  return (
    <div>
      <Greet />
      <Welcome />
    </div>
  )
}

export default App

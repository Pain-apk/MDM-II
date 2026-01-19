import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
    // const Greet = () => {
    //     return <h1>Hello, World </h1>
    // }

    // ReactDOM.createRoot(document.getElementById('root')).render(<Greet />);
    // <Welcome />
    // //class components
    // class Welcome extends React.Component {
    //     render() {
    //         return <h1>Hello, World from Class Component</h1>
    //     }       
    // }
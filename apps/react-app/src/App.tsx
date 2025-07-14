import { useState } from 'react'
import { Button } from '@repo/ui/button'
import { Card } from '@repo/ui/card'
import { Code } from '@repo/ui/code'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <header className="app-header">
        <h1>React App</h1>
        <p>Bu yeni oluşturulan React uygulamasıdır.</p>
      </header>

      <main className="app-main">
        <div className="card-wrapper">
          <h2>Sayaç Örneği</h2>
          <div className="counter">
            <button onClick={() => setCount(count - 1)}>-</button>
            <span className="count">{count}</span>
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
          <p>Sayaç değeri: <Code>{count}</Code></p>
        </div>

        <div className="card-wrapper">
          <h2>Teknolojiler</h2>
          <ul>
            <li>React 18</li>
            <li>TypeScript</li>
            <li>Vite</li>
            <li>Shared UI Components</li>
          </ul>
          <Button appName="React App">Shared Button Komponenti</Button>
        </div>

        <Card 
          title="Shared Card Komponenti" 
          href="https://vitejs.dev"
        >
          Bu shared card component'i kullanıyor ve Vite dokümantasyonuna yönlendiriyor.
        </Card>
      </main>
    </div>
  )
}

export default App

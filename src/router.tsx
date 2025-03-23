import { BrowserRouter, Route, Routes } from 'react-router'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Hello World!</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

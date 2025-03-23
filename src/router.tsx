import { BrowserRouter, Route, Routes } from 'react-router'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <h1 className="text-3xl font-bold underline">Hello world!</h1>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

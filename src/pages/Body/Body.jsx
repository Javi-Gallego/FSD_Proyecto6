import { Routes, Route, Navigate } from "react-router-dom"
import { Home } from "../Home/Home"

export const Body = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to={"/"} replace />} />
    </Routes>
  )
}

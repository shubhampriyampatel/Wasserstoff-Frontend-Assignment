import { Routes, Route } from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard'
import { Overview } from '../pages/Overview'
import Statistics  from '../pages/Statistics'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Overview></Overview>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/statistics' element={<Statistics></Statistics>}></Route>
    </Routes>
  )
}

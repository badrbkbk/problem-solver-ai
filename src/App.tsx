import { Toaster } from 'sonner'
import ProblemSolver from './components/ProblemSolver'

function App() {
  return (
    <div className="min-h-screen" dir="rtl">
      <Toaster position="top-center" richColors />
      <ProblemSolver />
    </div>
  )
}

export default App

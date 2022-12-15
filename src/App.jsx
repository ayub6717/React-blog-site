import './App.css'
import { PostView } from './features/post/PostView'
import { UserView } from './features/user/UserView'

function App() {
  return (
    <div className='App'>
      <UserView />
      <PostView />
    </div>
  )
}

export default App

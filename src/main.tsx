import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Button } from './components/ui/button'

import './index.css'

createRoot(document.getElementById('root')!).render(
   <StrictMode>
      <div className='bg-gradient'>
         <h1>Hola Pau</h1>
         <Button>
            Hola de new
         </Button>
      </div>
   </StrictMode>,
)

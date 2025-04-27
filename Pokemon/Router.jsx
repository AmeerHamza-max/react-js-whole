import React from 'react'

const Router = () => {
    const router=createBrowserRouter(
        createRoutesFromElement(
            <Route>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/movie" element={<Movie />} />
                <Route path="/contact" element={<Contact />} />

                </Route>
        )
    )
  return (
    <div>
      
    </div>
  )
}

export default Router

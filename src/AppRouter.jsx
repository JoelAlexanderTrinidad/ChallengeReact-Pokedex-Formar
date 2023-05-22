import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { SearchResults } from "./pages/SearchResults"

export const AppRouter = () => {
    return (

        <Routes>
           <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/search/:searchValue" element={<SearchResults />} />
        </Routes>
      )
}

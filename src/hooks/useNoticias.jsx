import { useContext } from "react"
import { NoticiasContext } from "../context"

export const useNoticias = () => {
    return useContext(NoticiasContext)
}

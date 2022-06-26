import { useState, useEffect, createContext } from "react"
import axios from "axios"

export const NoticiasContext = createContext()

export const NoticiasProvider = ({ children }) => {
	const [category, setCategory] = useState('')
	const [news, setNews] = useState([])
	const [page, setPage] = useState(1)
	const [totalNews, setTotalNews] = useState(0)
    console.log(page)

	useEffect(() => {
		const getCategory = async () => {
			const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
			const { data } = await axios(url)
			setNews(data.articles)
			setTotalNews(data.totalResults)    
            setPage(1)
		}
		getCategory()
	}, [category])

	useEffect(() => {
		const getCategory = async () => {
			const url = `https://newsapi.org/v2/top-headlines?country=mx&page=${page}&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
			const { data } = await axios(url)
			setNews(data.articles)
			setTotalNews(data.totalResults)    
		}
		getCategory()
	}, [page])

	const handleChangeCategory = (e) => {
		setCategory(e.target.value)
	}

    const handleChangePage = (e, value) => {
        setPage(e.target.textContent)
    }

	return (
		<NoticiasContext.Provider
			value={{
				news,
                page,
				category,
				totalNews,
				handleChangeCategory,
                handleChangePage
			}}
		>
			{children}
		</NoticiasContext.Provider>
	)
}

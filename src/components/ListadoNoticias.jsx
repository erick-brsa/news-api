import { Grid, Typography, Pagination, Stack } from "@mui/material"
import { useNoticias } from "../hooks"
import { Noticia } from "./Noticia"

export const ListadoNoticias = () => {

	const { news, totalNews, handleChangePage, page } = useNoticias()
	const totalPages = Math.ceil(totalNews / 20)

	return (
		<>
			<Typography
				variant="h3"
				component="h2"
				textAlign="center"
				marginY={5}
			>
				Últimas Noticias
			</Typography>

			<Grid container spacing={2}>
				{news.map((noticia) => (
					<Noticia key={noticia.url} noticia={noticia} />
				))}
			</Grid>

			<Stack 
				spacing={2}
				direction="row"
				justifyContent="center"
				alignItems="center"
				marginY={5}
			>
				<Pagination 
					count={totalPages} 
					page={page}
					color="primary" 
					onChange={handleChangePage}
				/>
			</Stack>
		</>
	)
}

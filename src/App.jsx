import { Container, Grid, Typography } from "@mui/material"
import { Formulario, ListadoNoticias } from "./components"
import { NoticiasProvider } from "./context"

const App = () => {
	return (
		<NoticiasProvider>
			<Container>
				<header>
					<Typography
						component="h1"
						variant="h3"
						align="center"
						marginY={5}
					>
						Buscador Noticias
					</Typography>
				</header>

				<Grid
					container
					direction="row"
					alignItems="center"
					justify="center"
					justifyContent="center"
				>
					<Grid item md={6} xs={12} lg={5}>
						<Formulario />
					</Grid>
				</Grid>
				<ListadoNoticias />
			</Container>
		</NoticiasProvider>
	)
}

export default App

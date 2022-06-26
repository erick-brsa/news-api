import {
	Card,
	CardMedia,
	CardContent,
	Link,
	Typography,
	Grid,
    Button,
	CardActions
} from "@mui/material"
export const Noticia = ({ noticia }) => {
	const { urlToImage, url, title, description, source } = noticia

    if (urlToImage?.charAt(0) === '/') {
        return null
    }

	return (
		<Grid item xs={12} md={6} lg={4}>
			<Card
				sx={{
					height: "100%",
					position: "relative"
				}}
			>
					<CardMedia
						component="img"
						alt={`imagen de la noticia: ${title}`}
						image={urlToImage}
						height="240"
					/>

				<CardContent>
					<Typography variant="body1" color="error">
						{source.name}
					</Typography>
					<Typography variant="h5" component="div">
						{title}
					</Typography>
					<Typography variant="body2">{description}</Typography>
				</CardContent>

				<CardActions
					sx={{
						marginTop: "2rem"
					}}
				>
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{
                            position: "absolute",
                            bottom: "0",
                            left: "0",
                            padding: "0.4rem",
                        }}
                        >
                        <Link
                            variant="button"
                            textAlign="center"
                            width="100%"
                            href={url}
                            target="_blank"
                            sx={{
                                color: "white",
                                textDecoration: "none",
                            }}
                        >
                            Leer Noticia
                        </Link>
                    </Button>
				</CardActions>
			</Card>
		</Grid>
	)
}

import { FormControl, MenuItem, InputLabel, Select, Button, Box } from "@mui/material"
import { useNoticias } from "../hooks"

const categories = [
    {value: 'general', label: 'General'},
    {value: 'business', label: 'Negocios'},
    {value: 'entertainment', label: 'Entretenimiento'},
    {value: 'health', label: 'Salud'},
    {value: 'science', label: 'Ciencia'},
    {value: 'sports', label: 'Deportes'},
    {value: 'technology', label: 'Tecnología'},
]

export const Formulario = () => {

    const { category, handleChangeCategory } = useNoticias()

	return (
		<div>
			<form>
				<FormControl fullWidth>
                    <InputLabel>Categoría</InputLabel>
                    <Select 
                        label="Categoría"
                        onChange={handleChangeCategory}
                        value={category}
                    >
                        {categories.map(category => (
                            <MenuItem 
                                key={category.value} 
                                value={category.value}
                            >
                                    {category.label}
                            </MenuItem>
                        ))}
                    </Select>
                    <Box
                        sx={{
                            marginTop: '1rem',
                        }}
                    >
                        <Button  
                            type="submit"
                            fullWidth
                            variant="contained"
                            >
                            Buscar Noticias
                        </Button>
                    </Box>
                </FormControl>
			</form>
		</div>
	)
}

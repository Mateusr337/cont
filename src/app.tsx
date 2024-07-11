import './_globals';
import './css/app.css';
import { Button, Card, Paper, Stack, SxProps, Typography } from '@mui/material';
import image from './assets/01.jpg';

const btnStyles: SxProps = {
	// background: AppTheme.primary,
	// color: AppTheme.text,
	// padding: '14px',
	borderRadius: '40px',
	width: 'fit-content',
	padding: '10px 20px',
};

export default function AppComponent() {
	// const [count, setCount] = useState(0);

	// const handleCount = () => setCount(count + 1);

	return (
		<Stack direction="column" alignItems="center" gap={4}>
			<Typography variant="h5">contabilidade digital com excelência</Typography>

			<Typography variant="subtitle1">
				O melhor escritório contábil do Brasil ajudando a impulsionar o crescimento da sua
				empresa.
			</Typography>

			<Button variant="contained" color="warning" sx={btnStyles}>
				Abrir minha empresa!
			</Button>

			<Button
				variant="contained"
				sx={{ ...btnStyles, background: '#e2e2e2', color: '#000' }}
			>
				Falar com contador!
			</Button>

			<img
				style={{
					marginTop: 30,
					width: '80%',
					borderRadius: '35% 20px',
				}}
				src={image}
			></img>

			<Button variant="contained" color="warning" sx={{ ...btnStyles, marginBottom: 15 }}>
				planos e preços
			</Button>

			<Typography color="orange" variant="subtitle1">
				Contabilidade da sua Empresa de forma prática, segura e econômica
			</Typography>

			<Typography variant="body1">
				Você vai precisar de um contador para cuidar da sua empresa. Escolha o escritório
				de contabilidade que vai facilitar a sua vida e te fazer economizar. A Conect
				oferece um serviço diferenciado que vai transformar seu negócio.
			</Typography>

			<Typography
				style={{
					marginTop: 30,
				}}
				color="orange"
				variant="h5"
			>
				Serviços
			</Typography>

			<Paper sx={{ padding: 6 }}>
				<Stack direction="column" sx={{ placeItems: 'center' }}>
					<Typography variant="overline">Abrir empresa</Typography>

					<Typography variant="body1">
						Pensado para quem não tem tempo a perder com a burocracia.
					</Typography>
				</Stack>
			</Paper>

			<Paper sx={{ padding: 6 }}>
				<Stack direction="column" sx={{ placeItems: 'center' }}>
					<Typography variant="overline">Abrir empresa</Typography>

					<Typography variant="body1">
						Pensado para quem não tem tempo a perder com a burocracia.
					</Typography>
				</Stack>
			</Paper>

			<Paper sx={{ padding: 6 }}>
				<Stack direction="column" sx={{ placeItems: 'center' }}>
					<Typography variant="overline">Abrir empresa</Typography>

					<Typography variant="body1">
						Pensado para quem não tem tempo a perder com a burocracia.
					</Typography>
				</Stack>
			</Paper>

			<Typography
				style={{
					marginTop: 30,
				}}
				color="orange"
				variant="h5"
			>
				E agora, vamos começar?
			</Typography>

			<Typography variant="body1">
				Entre em contato conosco, tire suas dúvidas sobre a Conect Contabilidade Digital,
				sobre nossos Planos e Serviços e muito mais. Ficaremos felizes com o seu contato!{' '}
			</Typography>

			<Button sx={{ ...btnStyles }} variant="outlined">
				ver planos e preços
			</Button>
		</Stack>
	);
}

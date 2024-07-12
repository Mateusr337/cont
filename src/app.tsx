import {
	ArrowRightSharp,
	HomeWork,
	MoveToInbox,
	StoreMallDirectory,
	WhatsApp,
	WrapText,
} from '@material-ui/icons';
import { Button, Paper, Stack, SxProps, Typography } from '@mui/material';
import './_globals';
import { AppColors, AppTheme } from './_globals';
import image from './assets/01.jpg';
import './css/app.css';

const btnStyles: SxProps = {
	// background: AppTheme.primary,
	// color: AppTheme.text,
	// padding: '14px',
	borderRadius: '40px',
	width: 'fit-content',
	padding: '10px 20px',
};

const iconStyle /* SxProps */ = {
	fontSize: 50,
	color: AppTheme.primary,
};

const wppBtnStyle: SxProps = {
	width: 'fit-content',
	height: 'fit-content',
	display: 'flex',
	placeItems: 'center',
	padding: 2,
	position: 'absolute',
	right: 10,
	bottom: 10,
	background: AppColors.wpp,
	borderRadius: '50%',
	zIndex: 10,
	color: '#fff',
};

export default function AppComponent() {
	// const [count, setCount] = useState(0);

	// const handleCount = () => setCount(count + 1);

	return (
		<Stack
			direction="column"
			alignItems="center"
			gap={4}
			maxWidth="100%"
			textAlign="center"
		>
			{/* header page */}
			<>
				<Typography variant="caption">[ Logo ou nome da empresa ]</Typography>

				<Typography variant="h5" fontWeight={700} color={AppTheme.primary}>
					Contabilidade digital com excelência
				</Typography>

				<Typography variant="subtitle1">
					O melhor escritório contábil do Brasil ajudando a impulsionar o crescimento da
					sua empresa.
				</Typography>

				<Button variant="contained" color="warning" sx={btnStyles}>
					Abrir minha empresa
				</Button>

				<Button
					variant="contained"
					sx={{ ...btnStyles, background: '#e2e2e2', color: '#000' }}
					endIcon={<WhatsApp />}
				>
					Falar com contador
				</Button>

				<img
					style={{
						marginTop: 30,
						width: '80%',
						borderRadius: '35% 20px',
					}}
					src={image}
				></img>

				<Button
					variant="contained"
					color="warning"
					sx={{ ...btnStyles, marginBottom: 15 }}
					endIcon={<ArrowRightSharp />}
				>
					planos e preços
				</Button>

				<Typography variant="subtitle1" fontWeight={700}>
					Contabilidade da sua Empresa de forma
					<span style={{ color: AppTheme.primary }}> prática</span>,
					<span style={{ color: AppTheme.primary }}> segura</span> e
					<span style={{ color: AppTheme.primary }}> econômica</span>
				</Typography>

				<Typography variant="body1">
					Você vai precisar de um contador para cuidar da sua empresa. Escolha o
					escritório de contabilidade que vai facilitar a sua vida e te fazer economizar.
					A Conect oferece um serviço diferenciado que vai transformar seu negócio.
				</Typography>
			</>
			{/* painel */}
			<>
				<Stack
					sx={{ flexWrap: 'wrap', margin: '30px 0' }}
					direction="row"
					gap={1}
					justifyContent="center"
				>
					<Stack direction="column" textAlign="center" width="40%">
						<Typography variant="h3" fontWeight={700} color={AppTheme.text}>
							+100
						</Typography>
						<Typography variant="body1">Especialistas</Typography>
					</Stack>
					<Stack direction="column" textAlign="center" width="40%">
						<Typography variant="h3" fontWeight={700} color={AppTheme.primary}>
							+100
						</Typography>
						<Typography variant="body1">Especialistas</Typography>
					</Stack>
					<Stack direction="column" textAlign="center" width="40%">
						<Typography variant="h3" fontWeight={700} color={AppTheme.primary}>
							+100
						</Typography>
						<Typography variant="body1">Especialistas</Typography>
					</Stack>
					<Stack direction="column" textAlign="center" width="40%">
						<Typography variant="h3" fontWeight={700} color={AppTheme.text}>
							+100
						</Typography>
						<Typography variant="body1">Especialistas</Typography>
					</Stack>
				</Stack>
			</>
			{/* services */}
			<>
				<Typography
					style={{
						marginTop: 30,
					}}
					color={AppTheme.primary}
					variant="h5"
				>
					Serviços
				</Typography>

				<Paper sx={{ padding: 6, width: '80%' }}>
					<Stack direction="column" sx={{ placeItems: 'center' }}>
						<HomeWork style={{ ...iconStyle }} />

						<Typography color={AppTheme.primary} variant="overline">
							Abrir empresa
						</Typography>

						<Typography variant="caption">
							Pensado para quem não tem tempo a perder com a burocracia.
						</Typography>
					</Stack>
				</Paper>

				<Paper sx={{ padding: 6, width: '80%' }}>
					<Stack direction="column" sx={{ placeItems: 'center' }}>
						<MoveToInbox style={{ ...iconStyle }} />

						<Typography color={AppTheme.primary} variant="overline">
							Migrar empresa
						</Typography>

						<Typography variant="caption">
							Fazemos o processo da Receita Federal, Estado e Prefeitura.
						</Typography>
					</Stack>
				</Paper>

				<Paper sx={{ padding: 6, width: '80%' }}>
					<Stack direction="column" sx={{ placeItems: 'center' }}>
						<StoreMallDirectory style={{ ...iconStyle }} />

						<Typography color={AppTheme.primary} variant="overline">
							MEI
						</Typography>

						<Typography variant="caption">
							Fazemos todo o processo de abertura e acompanhamento.
						</Typography>
					</Stack>
				</Paper>

				<Paper sx={{ padding: 6, width: '80%' }}>
					<Stack direction="column" sx={{ placeItems: 'center' }}>
						<WrapText style={{ ...iconStyle }} />

						<Typography color={AppTheme.primary} variant="overline">
							Declaração do IR
						</Typography>

						<Typography variant="caption">
							Realizamos todo o processo de declaração de imposto de renda.
						</Typography>
					</Stack>
				</Paper>
			</>
			{/* finaly */}
			<>
				<Typography
					style={{
						marginTop: 30,
					}}
					color={AppTheme.primary}
					variant="h5"
				>
					E agora, vamos começar?
				</Typography>

				<Typography variant="body1">
					Entre em contato conosco, tire suas dúvidas sobre a Conect Contabilidade
					Digital, sobre nossos Planos e Serviços e muito mais. Ficaremos felizes com o
					seu contato!{' '}
				</Typography>

				<Button
					color="warning"
					sx={{ ...btnStyles, marginTop: 10 }}
					variant="outlined"
					endIcon={<ArrowRightSharp />}
				>
					ver planos e preços
				</Button>

				<Button
					color="warning"
					sx={{ ...btnStyles }}
					variant="text"
					endIcon={<ArrowRightSharp />}
				>
					já tenho empresa
				</Button>
			</>
			{/* footer */}
			<></>
			{/* whats app btn */}
			<Button sx={{ ...wppBtnStyle }} variant="text">
				<WhatsApp fontSize="large" />
			</Button>
		</Stack>
	);
}

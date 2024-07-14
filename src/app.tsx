import {
	HomeWork,
	KeyboardArrowRightOutlined,
	MoveToInbox,
	StoreMallDirectory,
	WhatsApp,
	WrapText,
} from '@material-ui/icons';
import { Box, Button, Paper, Stack, SxProps, Typography } from '@mui/material';
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
	position: 'fixed',
	right: 10,
	bottom: 10,
	color: AppColors.wpp,
	background: 'none',
	borderRadius: '50%',
	zIndex: 10,
	// color: '#fff',
};

export default function AppComponent() {
	// const [count, setCount] = useState(0);

	// const handleCount = () => setCount(count + 1);

	return (
		<>
			<Stack
				direction="column"
				alignItems="center"
				gap={4}
				maxWidth="100%"
				textAlign="center"
				overflow="hidden"
			>
				{/* HEADER */}
				<>
					<Box sx={{ position: 'relative', marginBottom: 10 }}>
						<Stack
							direction="column"
							alignItems="center"
							gap={4}
							maxWidth="100%"
							textAlign="center"
							padding={5}
							paddingInline={2}
							margin={0}
							sx={{ background: AppTheme.background }}
						>
							<Typography variant="caption">[ Logo ou nome da empresa ]</Typography>

							<Typography variant="h5" fontWeight={700} color={AppTheme.primary}>
								Contabilidade inteligente para um futuro financeiro sólido
							</Typography>

							<Typography variant="subtitle2" fontWeight={100}>
								O melhor escritório contábil do Brasil ajudando a impulsionar o
								crescimento da sua empresa.
							</Typography>

							<Button
								variant="contained"
								color="warning"
								sx={{ ...btnStyles, fontWeight: 100 }}
								endIcon={<KeyboardArrowRightOutlined />}
							>
								Quero abrir minha empresa
							</Button>

							<Button
								variant="outlined"
								sx={{
									...btnStyles,
									// background: '#e2e2e2',
									color: AppColors.wpp,
									border: `${AppColors.wpp} 1px solid !important`,
								}}
								endIcon={<WhatsApp />}
							>
								Junte-se à equipe!
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
								variant="outlined"
								color="warning"
								sx={{ ...btnStyles }}
								endIcon={<KeyboardArrowRightOutlined />}
							>
								planos & preços
							</Button>
						</Stack>
						{/* RADIUS HEADER DESIGN */}
						<Box
							sx={{
								// width: '150%',
								alignSelf: 'center',
								height: 50,
								borderRadius: '100%',
								background: AppTheme.background,
								position: 'absolute',
								bottom: '-25px',
								right: '-50px',
								left: '-50px',
							}}
						/>
					</Box>
				</>
				{/* messages */}
				<>
					<Stack
						direction="column"
						alignItems="center"
						gap={4}
						maxWidth="100%"
						textAlign="center"
						padding={5}
						paddingInline={2}
						margin={0}
					>
						<Typography variant="subtitle1" fontWeight={700}>
							Conectando estratégia financeira com
							<span style={{ color: AppTheme.primary }}> Confiabilidade</span>,
							<span style={{ color: AppTheme.primary }}> Precisão</span> e
							<span style={{ color: AppTheme.primary }}> Resultados </span>
							para seu negócio.
						</Typography>

						<Typography variant="body1" fontWeight={100}>
							Você vai precisar de um contador para cuidar da sua empresa. Escolha o
							escritório de contabilidade que vai facilitar a sua vida e te fazer
							economizar. A Conect oferece um serviço diferenciado que vai transformar seu
							negócio.
						</Typography>
					</Stack>
				</>
				{/* painel */}
				<>
					<Typography variant="caption">
						[ Algum mérito ou atrativo quantitativo ]
					</Typography>

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
							<Typography variant="body1" fontWeight={100}>
								Especialistas
							</Typography>
						</Stack>

						<Stack direction="column" textAlign="center" width="40%">
							<Typography variant="h3" fontWeight={700} color={AppTheme.primary}>
								+100
							</Typography>
							<Typography variant="body1" fontWeight={100}>
								Cidades
							</Typography>
						</Stack>

						<Stack direction="column" textAlign="center" width="40%">
							<Typography variant="h3" fontWeight={700} color={AppTheme.primary}>
								+100
							</Typography>
							<Typography variant="body1" fontWeight={100}>
								Regiões
							</Typography>
						</Stack>

						<Stack direction="column" textAlign="center" width="40%">
							<Typography variant="h3" fontWeight={700} color={AppTheme.text}>
								+100
							</Typography>
							<Typography variant="body1" fontWeight={100}>
								Empresas
							</Typography>
						</Stack>
					</Stack>
				</>
				{/* services */}
				<>
					<Typography
						style={{
							marginTop: 30,
						}}
						color={AppTheme.text}
						variant="h4"
					>
						Serviços
					</Typography>

					<Paper sx={{ padding: 6, width: '80%' }}>
						<Stack direction="column" sx={{ placeItems: 'center' }}>
							<HomeWork style={{ ...iconStyle }} />

							<Typography color={AppTheme.primary} variant="overline" fontSize={14}>
								Abrir empresa
							</Typography>

							<Typography variant="caption" fontStyle={'italic'}>
								Pensado para quem não tem tempo a perder com a burocracia.
							</Typography>
						</Stack>
					</Paper>

					<Paper sx={{ padding: 6, width: '80%' }}>
						<Stack direction="column" sx={{ placeItems: 'center' }}>
							<MoveToInbox style={{ ...iconStyle }} />

							<Typography color={AppTheme.primary} variant="overline" fontSize={14}>
								Migrar empresa
							</Typography>

							<Typography variant="caption" fontStyle={'italic'}>
								Fazemos o processo da Receita Federal, Estado e Prefeitura.
							</Typography>
						</Stack>
					</Paper>

					<Paper sx={{ padding: 6, width: '80%' }}>
						<Stack direction="column" sx={{ placeItems: 'center' }}>
							<StoreMallDirectory style={{ ...iconStyle }} />

							<Typography color={AppTheme.primary} variant="overline" fontSize={14}>
								MEI
							</Typography>

							<Typography variant="caption" fontStyle={'italic'}>
								Fazemos todo o processo de abertura e acompanhamento.
							</Typography>
						</Stack>
					</Paper>

					<Paper sx={{ padding: 6, width: '80%' }}>
						<Stack direction="column" sx={{ placeItems: 'center' }}>
							<WrapText style={{ ...iconStyle }} />

							<Typography color={AppTheme.primary} variant="overline" fontSize={14}>
								Declaração do IR
							</Typography>

							<Typography variant="caption" fontStyle={'italic'}>
								Realizamos todo o processo de declaração de imposto de renda.
							</Typography>
						</Stack>
					</Paper>
				</>
				{/* finaly */}
				<>
					<Typography style={{ marginTop: 30 }} color={AppTheme.text} variant="h5">
						Venha trabalhar conosco!
					</Typography>

					<Typography variant="body1" fontWeight={100} paddingInline={2}>
						Entre em contato para descobrir oportunidades na nossa equipe. Estamos
						ansiosos para responder suas perguntas e discutir como você pode contribuir
						conosco. Esperamos por você!
					</Typography>

					<Button
						color="warning"
						sx={{ ...btnStyles }}
						variant="outlined"
						endIcon={<KeyboardArrowRightOutlined />}
					>
						ver planos e preços
					</Button>

					<Button
						color="warning"
						sx={{ ...btnStyles }}
						variant="text"
						endIcon={<KeyboardArrowRightOutlined />}
					>
						já tenho empresa
					</Button>
				</>

				{/* FOOTER */}
				<Box
					sx={{
						width: '100%',
						padding: '1.5em 0',
						background: AppTheme.background,
					}}
				>
					<Typography variant="overline">2024 [ NOME DA EMPRESA ] </Typography>

					<Typography variant="caption">Todos os direitos reservados</Typography>
					<br />
					<Typography variant="caption">Desenvolvido por M.C. Rossetto</Typography>
				</Box>
			</Stack>

			{/* whats app btn */}
			<Button sx={{ ...wppBtnStyle }} variant="text">
				<WhatsApp fontSize="large" />
			</Button>
		</>
	);
}

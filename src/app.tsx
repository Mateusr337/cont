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
import LOGO from './assets/logo.jpg';
import VIDEO from './assets/video.mp4';
import './css/app.css';
import { AppService } from './service';

const btnStyles: SxProps = {
	color: AppTheme.secoundary,
	borderRadius: '40px',
	width: 'fit-content',
	padding: '8px 20px',
	background: AppTheme.primary,
	border: `1px solid ${AppTheme.secoundary}`,
	margin: 0,

	'&:hover': {
		color: AppTheme.secoundary,
		border: `1px solid ${AppTheme.secoundary}`,
		background: AppTheme.primary,
		opacity: 0.6,
	},
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
	const openLink = (link = AppService.linkMsgSender()) => {
		window.open(link, '_blank');
	};

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
					<Box sx={{ position: 'relative', marginBottom: 2 }}>
						<Stack
							direction="column"
							alignItems="center"
							gap={3}
							maxWidth="100%"
							textAlign="center"
							paddingTop={2}
							paddingBottom={5}
							paddingInline={2}
							margin={0}
							sx={{ background: AppTheme.background }}
						>
							<img style={{ marginTop: 30, width: '80px' }} src={LOGO}></img>

							<Typography variant="h5" fontWeight={600} color={AppTheme.primary}>
								Contabilidade inteligente para um futuro financeiro sólido
							</Typography>

							<Typography variant="subtitle2" fontWeight={100}>
								FC Contabilidade empresa do ramo contábil com 15 anos de experiência e com
								um time de profissionais qualificados trabalhando em parceria com nossos
								clientes, ajudando-os na gestão e crescimento da sua empresa.
							</Typography>

							<Button
								variant="contained"
								color="warning"
								sx={{ ...btnStyles }}
								endIcon={<KeyboardArrowRightOutlined />}
								onClick={() => openLink(AppService.linkMsgSender('open_company'))}
							>
								Quero abrir minha empresa
							</Button>

							<Button
								variant="contained"
								sx={{
									...btnStyles,
									background: AppColors.wpp,
									border: `${AppColors.wpp} 1px solid !important`,

									'&:hover': {
										background: AppColors.wpp,
										opacity: 0.6,
									},
								}}
								endIcon={<WhatsApp />}
								onClick={() => openLink(AppService.linkMsgSender())}
							>
								Junte-se à equipe!
							</Button>

							<video
								autoFocus
								aria-controls="true"
								loop
								autoPlay={true}
								controls
								style={{
									marginTop: 30,
									maxWidth: '80%',
									borderRadius: '20px',
								}}
							>
								<source src={VIDEO} type="video/mp4" />
							</video>

							<Button
								variant="contained"
								color="warning"
								sx={btnStyles}
								endIcon={<KeyboardArrowRightOutlined />}
								onClick={() => openLink()}
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
						<Typography variant="h5" fontWeight={700}>
							Conectando estratégia financeira com
							<span style={{ color: AppTheme.primary }}> Confiabilidade</span>,
							<span style={{ color: AppTheme.primary }}> Precisão</span> e
							<span style={{ color: AppTheme.primary }}> Resultados </span>
							para seu negócio.
						</Typography>

						<Typography variant="body1" fontWeight={100} sx={{ paddingInline: 2 }}>
							A FC Contabilidade é uma empresa sólida e experiente, especializada em
							fornecer serviços contábeis e de consultoria para ajudar seus clientes a
							gerenciar e expandir seus negócios. Com 15 anos de experiência no ramo, e um
							time de profissionais qualificados, têm os recursos e o conhecimento
							necessários para oferecer soluções eficazes aos seus clientes. A parceria
							com os clientes é uma abordagem inteligente, pois demonstra um compromisso
							em entender suas necessidades específicas e ajudá-los a atingir seus
							objetivos comerciais.
						</Typography>
					</Stack>
				</>
				{/* services */}
				<Stack direction="column" gap={3} sx={{ maxWidth: '100%', padding: 1 }}>
					<Typography
						style={{
							marginTop: 30,
						}}
						color={AppTheme.text}
						variant="h4"
					>
						Serviços
					</Typography>

					<Paper sx={{ padding: 6 }}>
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

					<Paper sx={{ padding: 6 }}>
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

					<Paper sx={{ padding: 6 }}>
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

					<Paper sx={{ padding: 6 }}>
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
				</Stack>
				{/* finally */}
				<>
					<Button
						color="warning"
						sx={{ ...btnStyles }}
						variant="outlined"
						endIcon={<KeyboardArrowRightOutlined />}
						onClick={() => openLink()}
					>
						ver planos & preços
					</Button>

					<Button
						color="warning"
						sx={{
							color: AppTheme.primary,
							'&:hover': {
								background: 'none',
								opacity: 0.6,
							},
						}}
						variant="text"
						endIcon={<KeyboardArrowRightOutlined />}
						onClick={() => openLink(AppService.linkMsgSender('company'))}
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
					<Typography variant="overline">2024 | FC Contabilidade </Typography>

					<Typography variant="caption">| Todos os direitos reservados</Typography>
					<br />
					<Typography variant="caption">Developed by M.C. Rossetto</Typography>
				</Box>
			</Stack>

			{/* whats app btn */}
			<Button sx={{ ...wppBtnStyle }} variant="text" onClick={() => openLink()}>
				<WhatsApp fontSize="large" />
			</Button>
		</>
	);
}

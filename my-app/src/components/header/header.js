import { ControlPanel, Logo } from './components'
import styled from 'styled-components'

const Discription = styled.div`
	font-style: italic;
`

const HeaderContainer = ({ className }) => (
	<header className={className}>
		<Logo />
		<Discription>
			Ежедневно крутые новости
			<br />
			Технологические прорывы
			<br />
			Будь в курсе основных трендов
		</Discription>
		<ControlPanel />
	</header>
)

export const Header = styled(HeaderContainer)`
	display: flex;
	justify-content: space-between;
	position: fixed;
	top: 0;
	width: 1000px;
	height: 120px;
  font-size: 18px;
	padding: 20px 40px;
	background-color: bisque;
	box-shadow: 0px -2px 17px #000;
	z-index: 10;
`

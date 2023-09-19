import { Link } from 'react-router-dom'
import { Icon } from '../../../../components'
import newsGif from '../../../../gif/news.gif'
import { styled } from 'styled-components'

const LargeText = styled.div`
	font-size: 48px;
	font-weight: 600;
	line-height: 48px;
	margin-top: 17px;
`

const LogoContainer = ({ className }) => (
	<Link className={className} to="/">
		<Icon id="fa-newspaper-o" size="70px" margin="0 10px 0 0" />
		<div>
			<LargeText>Блог</LargeText>
			<img className="news-gif" src={newsGif} alt="news.gif" />
		</div>
	</Link>
)

export const Logo = styled(LogoContainer)`
	display: flex;
	margin-top: -20px;
  width: 15%;

	.news-gif {
		width: 100%;
		padding: 0 0 0 5px;
	}
`

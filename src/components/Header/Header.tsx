import globeIcon from '../../assets/globe.svg';
import './style.css';

export const Header = () => {
	return (
		<header className='header'>
			<section className='movable-section'>
				<img className='main-logo' src={globeIcon} alt='Globe Icon' />
				<h1>List of Countries</h1>
			</section>
		</header>
	);
};

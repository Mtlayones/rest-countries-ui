import { Card } from '../../components/Card';
import { CountryModel } from '../../data/models';
import './style.css';

interface ItemCardProps {
	item: CountryModel;
}

export const ItemCard = ({ item }: ItemCardProps) => {
	return (
		<Card>
			<section className='left-children'>
				<h2>
					<b>Name: </b>
					{item.name}
				</h2>
				<p>
					<b>Region: </b>
					{item.region}
				</p>
				<p>
					<b>Country's Area: </b>
					{item.area}
				</p>
			</section>
			<figure className='right-children'>
				<img
					className='object-cover'
					src={item.flag}
					alt={`${item.name} flag`}
				/>
			</figure>
		</Card>
	);
};

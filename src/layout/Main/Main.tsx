import { useState, useEffect } from 'react';
import { Dropdown } from '../../components/Dropdown';
import { ItemCard } from './ItemCard';
import { DropdownOptions } from '../../types';
import { CountryModel } from '../../data/models';
import {
	SORT_OPTIONS,
	DEFAULT_SORT_OPTION,
	REGION_FILTER_OPTIONS,
	DEFAULT_REGION_FILTER_OPTIONS,
	AREA_FILTER_OPTIONS,
	DEFAULT_AREA_FILTER_OPTIONS,
} from '../../constants';
import './style.css';
import restCountriesService from '../../data/restCountries';
import { Pagination } from '../../components/Pagination';

const PAGINATION_LIMIT = 10;

export const Main = () => {
	const [sortValue, setSortValue] =
		useState<DropdownOptions>(DEFAULT_SORT_OPTION);
	const [regionFilter, setRegionFilter] = useState<DropdownOptions>(
		DEFAULT_REGION_FILTER_OPTIONS
	);
	const [areaFilter, setAreaFilter] = useState<DropdownOptions>(
		DEFAULT_AREA_FILTER_OPTIONS
	);
	const [countries, setCountries] = useState<CountryModel[]>([]);
	const [filteredCountries, setFilteredCountries] = useState<CountryModel[]>(
		[]
	);
	const [paginatedCountries, setPaginatedCountries] = useState<
		CountryModel[]
	>([]);
	const [lithuaniaData, setLithuaniaData] = useState<CountryModel>(
		new CountryModel()
	);
	const [page, setPage] = useState<number>(1);

	useEffect(() => {
		restCountriesService
			.getAllData()
			.then((value) => setCountries(value as CountryModel[]));
		restCountriesService
			.getLithuaniaData()
			.then((value) => setLithuaniaData(value as CountryModel));
	}, []);

	useEffect(() => {
		setFilteredCountries(countries);
	}, [countries]);

	useEffect(() => {
		setPaginatedCountries(
			filteredCountries.slice(
				(page - 1) * PAGINATION_LIMIT,
				page * PAGINATION_LIMIT
			)
		);
	}, [filteredCountries, page]);

	useEffect(() => {
		let newList = [...countries];
		if (regionFilter.value == 'Oceania') {
			newList = newList.filter((item) => item.region == 'Oceania');
		}
		if (areaFilter.value == 'smaller') {
			newList = newList.filter((item) => item.area < lithuaniaData.area);
		} else if (areaFilter.value == 'larger') {
			newList = newList.filter((item) => item.area > lithuaniaData.area);
		}
		if (sortValue.value == 'desc') {
			newList.reverse();
		}
		setFilteredCountries(newList);
		setPage(1);
	}, [sortValue, areaFilter, regionFilter]);

	return (
		<main className='main-content'>
			<div className='toolbar'>
				<div className='left'>
					<Dropdown
						label='Region:'
						currentValue={regionFilter}
						handleChange={(value) => setRegionFilter(value)}
						items={REGION_FILTER_OPTIONS}
					/>
					<Dropdown
						label='Area:'
						currentValue={areaFilter}
						handleChange={(value) => setAreaFilter(value)}
						items={AREA_FILTER_OPTIONS}
					/>
				</div>
				<Dropdown
					label='Sort by:'
					currentValue={sortValue}
					handleChange={(value) => setSortValue(value)}
					items={SORT_OPTIONS}
				/>
			</div>
			<section className='content'>
				<ul className='card-group'>
					{paginatedCountries.map((item: CountryModel) => (
						<li key={item.name}>
							<ItemCard item={item} />
						</li>
					))}
				</ul>
				{paginatedCountries.length > 0 && (
					<div className='pagination'>
						<Pagination
							itemTotal={filteredCountries.length}
							limit={PAGINATION_LIMIT}
							currentPage={page}
							setPage={(value) => setPage(value)}
						/>
					</div>
				)}
			</section>
		</main>
	);
};

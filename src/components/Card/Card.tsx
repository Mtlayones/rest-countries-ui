import { ReactNode } from 'react';
import './style.css';

interface CardProps {
	children?: ReactNode;
}

export const Card = ({ children }: CardProps) => {
	return <section className='card'>{children}</section>;
};

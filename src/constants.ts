import { BsSortAlphaDown, BsSortAlphaUp } from 'react-icons/bs';

export const SORT_OPTIONS = [
    {
        label: 'Name',
        value: 'asc',
        icon: BsSortAlphaDown,
    },
    {
        label: 'Name',
        value: 'desc',
        icon: BsSortAlphaUp,
    },
] as const;

export const DEFAULT_SORT_OPTION = {
    label: 'Name',
    value: 'asc',
    icon: BsSortAlphaDown,
} as const;

export const REGION_FILTER_OPTIONS = [
    {
        label: 'All Regions',
        value: 'all',
    },
    {
        label: 'Oceania',
        value: 'Oceania',
    },
    
] as const;

export const DEFAULT_REGION_FILTER_OPTIONS = {
    label: 'All Regions',
    value: 'all'
} as const;

export const AREA_FILTER_OPTIONS = [
    {
        label: 'All Countries',
        value: 'all',
    },
    {
        label: 'Larger Than Lithuania',
        value: 'larger',
    },
    {
        label: 'Smaller Than Lithuania',
        value: 'larger',
    },
    
] as const;

export const DEFAULT_AREA_FILTER_OPTIONS = {
    label: 'All Countries',
    value: 'all'
} as const;

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
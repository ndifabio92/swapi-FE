export interface HeadCell {
    id: keyof Data;
    numeric: boolean;
    disablePadding: boolean;
    label: string;
}
export interface TableComponentProps {
    rows: Data[];
    headCells: HeadCell[];
}

export interface Data {
    [key: string]: string | number;
}

export interface EnhancedTableProps {
    order: 'asc' | 'desc';
    orderBy: string;
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
    headCells: HeadCell[];
}
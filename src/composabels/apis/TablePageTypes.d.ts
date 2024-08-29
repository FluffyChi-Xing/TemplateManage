declare namespace TablePageTypes {
    interface CustomTipType {
        title: string;
        subTitle: string;
        tipsType: boolean;
    }
    interface BaseTableExample {
        date: string;
        name: string;
        address: string;
    }
    interface TableTemplate {
        label: string;
        prop: string | null;
        width: number | null;
        overflow?: boolean | null;
        children?: TableTemplate[] | null;
        html?: string | null;
    }
    interface TableOptions {
        text: string;
        size: 'large' | 'default' | 'small';
        type: 'primary' | 'danger' | 'text' | 'info' | 'success' | 'warning';
        option: (e: never) => void;
    }
    interface Tree {
        id: string
        label: string
        children?: Tree[]
    }
}

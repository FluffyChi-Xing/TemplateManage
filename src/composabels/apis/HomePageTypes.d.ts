declare namespace HomePageTypes {
    interface Notice {
        id: number;
        title: string | null;
        info: string | null;
    }
    interface TopNavButtons {
        text: string;
        icon: string;
        type: string;
        option: () => void;
    }
}

export interface INote{
    id?: string;
    title: string;
    description: string;
    date: Date;
    userId: string;
    position: NotePosition;
    
}
export interface NotePosition{
    x: number;
    y: number;
}

export interface NoteProps{
    note: INote;
    handleDrag: any;
}
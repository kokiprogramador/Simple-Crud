interface ComponentsInterface = {
    Text: string;
    CustomClass: string;
    Type: string;
    PlaceHolder: string;
    Value: string;
    Name: string;
    Onclick: ((event: React.MouseEvent<HTMLButtonElement>) => void);
    OnChange: ((event: React.ChangeEvent<HTMLInputElement>) => void);
}

export default ComponentsInterface

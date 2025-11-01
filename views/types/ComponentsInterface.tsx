export interface ComponentsInterface
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "button" | "reset" | "submit";
  Text: string;
  CustomClass: string;
  Type: string;
  TypeHeader: string;
  PlaceHolder: string;
  Value: string;
  Name: string;
  Onclick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  OnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default ComponentsInterface;

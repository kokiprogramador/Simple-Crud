export interface ButtonsInterface
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "button" | "reset" | "submit";
  Text: string;
  Onclick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  CustomClass: string;
}
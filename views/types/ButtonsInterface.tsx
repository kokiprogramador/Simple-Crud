export interface ButtonsInterface extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "button" | "reset" | "submit";
  Text: string;
  CustomClass: string;
}

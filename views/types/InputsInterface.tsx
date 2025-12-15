export interface InputsInterface {
  Type: string;
  Value: string;
  Name: string;
  PlaceHolder: string;
  CustomClass: string;
  OnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  Required: boolean;
}

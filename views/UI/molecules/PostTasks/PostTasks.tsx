import { useState } from "react";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";
import Headings from "../../atoms/Headings/Headings";
import styles from "./PostTasks.module.css";

const PostTasks = () => {
  const [formData, setFormData] = useState({
    content: "",
    description: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  /*For this kind of things, better use React.events*/
  /*Lol this shit is deprecated*/
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const content = formData.get("content") as string;
    const description = formData.get("description") as string;
    console.log(content, description);

    const data = Object.fromEntries(formData);
    console.log(data);

    try {
      const response = await fetch("http://localhost:8000/api/createTask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form className={styles.Form} onSubmit={handleSubmit}>
      <Headings
        Text={"Add a new task"}
        CustomClass={styles.Form__Heading}
        TypeHeader={"h3"}
      />
      <fieldset className={styles.Fieldset}>
        <label className={styles.Fieldset__Label}>
          Content
          <Input
            PlaceHolder=""
            Type={"Text"}
            Value={formData.content}
            Name={"content"}
            CustomClass={styles.Fieldset__Input}
            OnChange={handleChange}
            Required
          />
        </label>
        <label className={styles.Fieldset__Label}>
          Description
          <Input
            PlaceHolder=""
            Type={"Text"}
            Value={formData.description}
            Name={"description"}
            CustomClass={styles.Fieldset__Input}
            OnChange={handleChange}
            Required
          />
        </label>
      </fieldset>
      <Button
        Text="Send"
        variant={"submit"}
        CustomClass={styles.Form__Button}
      />
    </form>
  );
};

export default PostTasks;

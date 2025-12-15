import { useState } from "react";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";
import styles from "./PostTasks.module.css";

const PostTasks = () => {
  const [formData, setFormData] = useState({
    content: "",
    description: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  /*For this kind of things, better use React.events*/
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
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form className={styles.Form} onSubmit={handleSubmit}>
      <fieldset>
        <legend>Add a new task</legend>
        <Input
          PlaceHolder="Content"
          Type={"Text"}
          Value={formData.content}
          Name={"content"}
          CustomClass={""}
          OnChange={handleChange}
          Required
        />
        <Input
          PlaceHolder="Description"
          Type={"Text"}
          Value={formData.description}
          Name={"description"}
          CustomClass={""}
          OnChange={handleChange}
          Required
        />
      </fieldset>
      <Button Text="Send" variant={"submit"} CustomClass={""} />
    </form>
  );
};

export default PostTasks;

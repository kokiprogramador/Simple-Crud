import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";
import Headings from "../../atoms/Headings/Headings";
import styles from "./UpdateTask.module.css";

const UpdateTask = ({ taskId, initialData = {} }) => {
  console.log(taskId);
  const [formData, setFormData] = useState({
    content: initialData.content || "",
    description: initialData.description || "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:8000/api/putTask/${taskId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Server error:", errorData);
        throw new Error(
          `HTTP ${response.status}: ${JSON.stringify(errorData)}`,
        );
      }

      const result = await response.json();
      console.log("Success:", result);
      navigate("/");
    } catch (error) {
      console.error("Complete error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Headings
        Text={"Edit task"}
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

export default UpdateTask;

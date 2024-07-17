import { useEffect } from "react";
import { selectPositions } from "../../../helpers/redux/positions/positionsSelectors";
import { useDispatch, useSelector } from "react-redux";
import { getAllPositionsThunk } from "../../../helpers/redux/positions/positionsOperations";
import { Button } from "../../UI/Button";
import { AppDispatch } from "../../../helpers/types/reduxConfigTypes";
import { UserToAdd } from "../../../helpers/types/usersTypes";
import { useFormik } from "formik";
import * as Yup from "yup";
import { addNewUserThunk } from "../../../helpers/redux/users/usersOperations";

export const AddUserForm = () => {
  const positions = useSelector(selectPositions);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPositionsThunk());
  }, [dispatch]);

  const initialValues: UserToAdd = {
    name: "",
    email: "",
    phone: "",
    position_id: 0,
    photo: null,
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .max(60, "Name cannot exceed 60 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string()
      .matches(
        /^\+380\d{9}$/,
        "Phone number must start with +380 and contain 9 digits"
      )
      .required("Phone number is required"),
    position_id: Yup.string().required("Position is required"),
    photo: Yup.mixed()
      .required("Photo is required")
      .test(
        "fileSize",
        "File size is too large",
        (value: any) => value && value.size <= 5 * 1024 * 1024
      )
      .test(
        "fileFormat",
        "Unsupported file format",
        (value: any) =>
          value && ["image/jpeg", "image/jpg"].includes(value.type)
      )
      .test(
        "fileResolution",
        "Image resolution is too low",
        (value: any) =>
          new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = (event: any) => {
              const img = new Image();
              img.onload = () => {
                if (img.width >= 70 && img.height >= 70) {
                  resolve(true);
                } else {
                  resolve(false);
                }
              };
              img.src = event.target.result;
            };
            reader.readAsDataURL(value);
          })
      ),
  });

  const handleSubmit = (values: UserToAdd) => dispatch(addNewUserThunk(values));

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <form className="addUser__form" onSubmit={formik.handleSubmit}>
      <div
        className={`addUser__form-field addUser__form-field-text ${
          formik.errors.name ? "invalidInput" : ""
        }`}
      >
        <input
          type="text"
          className="addUser__input-text"
          name="name"
          placeholder=""
          id="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <label
          htmlFor="name"
          className="addUser__form-label addUser__form-label-text"
        >
          Name
        </label>
      </div>
      <p className="addUser__form-inputTip">
        {formik.errors.name && formik.touched.name
          ? formik.errors.name
          : "John Johnson"}
      </p>

      <div
        className={`addUser__form-field addUser__form-field-text ${
          formik.errors.email ? "invalidInput" : ""
        }`}
      >
        <input
          type="email"
          className="addUser__input-text"
          name="email"
          placeholder=""
          id="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <label
          htmlFor="email"
          className="addUser__form-label addUser__form-label-text"
        >
          Email
        </label>
      </div>
      <p className="addUser__form-inputTip">
        {formik.errors.email && formik.touched.email
          ? formik.errors.email
          : "example@mail.com"}
      </p>

      <div
        className={`addUser__form-field addUser__form-field-text ${
          formik.errors.email ? "invalidInput" : ""
        }`}
      >
        <input
          type="text"
          className="addUser__input-text"
          name="phone"
          placeholder=""
          id="phone"
          onChange={formik.handleChange}
          value={formik.values.phone}
        />
        <label
          htmlFor="phone"
          className="addUser__form-label addUser__form-label-text"
        >
          Phone
        </label>
      </div>
      <p className="addUser__form-inputTip">
        {formik.errors.phone && formik.touched.phone
          ? formik.errors.phone
          : "+38 (XXX) XX XX"}
      </p>

      <div className="addUser__form-field addUser__form-field-radio">
        {positions?.map((pos) => (
          <>
            <div>
              <label
                htmlFor={`position_id${pos.id}`}
                className="addUser__form-label addUser__form-label-radio"
              >
                <input
                  type="radio"
                  value={pos.id}
                  name="position_id"
                  className="addUser__input-radio"
                  id={`position_id${pos.id}`}
                  onChange={formik.handleChange}
                />
                <span className="addUser__input-radio-icon">
                  <span></span>
                </span>
                {pos.name}
              </label>
            </div>
          </>
        ))}
      </div>

      <div className="addUser__form-field addUser__form-field-media">
        <input
          type="file"
          className="addUser__input-media"
          name="photo"
          id="media"
          accept=".jpg,.jpeg"
          onChange={(event: any) => {
            formik.setFieldValue("photo", event.currentTarget.files[0]);
          }}
        />
        <label
          htmlFor="media"
          className="addUser__form-label addUser__form-label-media"
        >
          <span className="addUser__form-label addUser__form-label-media-btn">
            Upload
          </span>
          <span className="addUser__form-label addUser__form-label-media-info">
            {formik.values.photo
              ? formik.values.photo.name
              : "Upload your photo"}
          </span>
        </label>
      </div>

      <Button
        type="submit"
        text="Sign up"
        className="button-primary"
        disabled={!formik.isValid || !formik.dirty}
      />
    </form>
  );
};

//1 refresh on new user add

//2 inputs focus and invalid form validation

//3 placeholder for photo
//4 loader
//5 meta

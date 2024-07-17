import React, { useEffect } from "react";
import { selectPositions } from "../../../helpers/redux/positions/positionsSelectors";
import { useDispatch, useSelector } from "react-redux";
import { getAllPositionsThunk } from "../../../helpers/redux/positions/positionsOperations";
import { Button } from "../../UI/Button";
import { AppDispatch } from "../../../helpers/types/reduxConfigTypes";
import { UserToAdd } from "../../../helpers/types/usersTypes";
import { useFormik } from "formik";
import * as Yup from "yup";

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

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form className="addUser__form" onSubmit={formik.handleSubmit}>
      <div className="addUser__form-field addUser__form-field-text">
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

      <div className="addUser__form-field addUser__form-field-text">
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

      <div className="addUser__form-field addUser__form-field-text">
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
      <div className="addUser__form-field addUser__form-field-radio">
        {positions?.map((pos) => (
          <>
            <div className="">
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

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useFormik } from "formik";
// import { selectPositions } from "../../../helpers/redux/positions/positionsSelectors";
// import { getAllPositionsThunk } from "../../../helpers/redux/positions/positionsOperations";
// import { Button } from "../../UI/Button";
// import { AppDispatch } from "../../../helpers/types/reduxConfigTypes";
// import * as Yup from "yup";

// export const AddUserForm = () => {
//   const positions = useSelector(selectPositions);
//   const dispatch: AppDispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getAllPositionsThunk());
//   }, [dispatch]);

//   return (
//     <form className="addUser__form" onSubmit={formik.handleSubmit}>
//       <div className="addUser__form-field addUser__form-field-text">
//         <input
//           type="text"
//           className="addUser__input-text"
//           name="name"
//           id="name"
//           onChange={formik.handleChange}
//           value={formik.values.name}
//         />
//         <label
//           htmlFor="name"
//           className="addUser__form-label addUser__form-label-text"
//         >
//           Name
//         </label>
//       </div>

//       <div className="addUser__form-field addUser__form-field-text">
//         <input
//           type="email"
//           className="addUser__input-text"
//           name="email"
//           id="email"
//           onChange={formik.handleChange}
//           value={formik.values.email}
//         />
//         <label
//           htmlFor="email"
//           className="addUser__form-label addUser__form-label-text"
//         >
//           Email
//         </label>
//       </div>

//       <div className="addUser__form-field addUser__form-field-text">
//         <input
//           type="text"
//           className="addUser__input-text"
//           name="phone"
//           id="phone"
//           onChange={formik.handleChange}
//           value={formik.values.phone}
//         />
//         <label
//           htmlFor="phone"
//           className="addUser__form-label addUser__form-label-text"
//         >
//           Phone
//         </label>
//       </div>

//       <div className="addUser__form-field addUser__form-field-radio">
//         {positions?.map((pos) => (
//           <div key={pos.id}>
//             <label
//               htmlFor={`position_id${pos.id}`}
//               className="addUser__form-label addUser__form-label-radio"
//             >
//               <input
//                 type="radio"
//                 value={pos.id}
//                 name="position_id"
//                 className="addUser__input-radio"
//                 id={`position_id${pos.id}`}
//                 onChange={formik.handleChange}
//               />
//               <span className="addUser__input-radio-icon">
//                 <span></span>
//               </span>
//               {pos.name}
//             </label>
//           </div>
//         ))}
//       </div>

//       <div className="addUser__form-field addUser__form-field-media">
//         <input
//           type="file"
//           className="addUser__input-media"
//           name="photo"
//           id="media"
//           onChange={(event: any) => {
//             formik.setFieldValue("photo", event.currentTarget.files[0]);
//           }}
//         />

//       </div>

//       <Button type="submit" text="Sign up" className="button-primary" />
//     </form>
//   );
// };

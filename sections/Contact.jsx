import { TextHeading, TextSubtitle } from "@/theme/Text";
import React from "react";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { chat_id, telegram_bot_id } from "@/layouts/constants";

const Contact = () => {
  const { t } = useTranslation("common");

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(4, "contact.validation.name.length")
        .max(30, "contact.validation.name.max")
        .required("contact.validation.name.req"),
      phone: Yup.string()
        .min(12, "contact.validation.phone.length")
        .max(14, "contact.validation.phone.max")
        .required("contact.validation.phone.req"),
    }),
    onSubmit: async (values, helpers) => {
      const message = `
        #boglanish

        <b>Foydalanuvchi siz bilan bog'lanmoqchi</b>

        Ism Familiya: ${values.name}
        Raqam: <code>${values.phone}</code>`;
      try {
        await axios.get(
          `https://api.telegram.org/bot${telegram_bot_id}/sendMessage`,
          {
            params: {
              chat_id: chat_id,
              text: message,
              parse_mode: "html",
            },
          }
        );
        helpers.resetForm();
      } catch (error) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    },
  });

  const classes =
    "py-6 px-3 text-black w-full rounded-[10px] focus:ring-2 focus:ring-secondary bg-white outline-none transition-all duration-300 capitalize placeholder:opacity-80";
  return (
    <section className="w-full py-[25px] bg-main text-white">
      <div className="custom-container flex flex-col gap-5 items-center text-center">
        <div>
          <TextHeading>{t("contact.title")}</TextHeading>
          <TextSubtitle className={"!text-center !text-white"}>{t("contact.desc")}</TextSubtitle>
        </div>
        <form
          noValidate
          onSubmit={formik.handleSubmit}
          className="w-full flex flex-col gap-3 items-center"
        >
          <div className="flex sm:flex-row flex-col gap-4 w-full max-w-[700px]">
            <div className="w-full">
              <input
                type="tel"
                placeholder={t("contact.name")}
                className={`${classes}`}
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              <TextSubtitle className={"!text-secondary text-start ml-2 mt-1"}>
                {!!formik.errors.name && t(formik.errors.name)}
              </TextSubtitle>
            </div>
            <div className="w-full">
              <input
                type="phone"
                placeholder={t("contact.phone")}
                className={`${classes}`}
                name="phone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
              />
              <TextSubtitle className={"!text-secondary text-start ml-2 mt-1"}>
                {!!formik.errors.phone && t(formik.errors.phone)}
              </TextSubtitle>
            </div>
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.1 }}
            className="text-center w-fit py-2 bg-secondary px-6 uppercase rounded-md"
          >
            {t("contact.btn")}
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

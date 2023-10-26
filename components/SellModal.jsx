import * as Yup from "yup";
import axios from "axios";
import React from "react";
import formatMoney from "@/layouts/formatMoney";
import { Modal } from "antd";
import { TextHeading, TextSubtitle } from "@/theme/Text";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import { chat_id, telegram_bot_id } from "@/layouts/constants";
import { message } from "antd";

const SellModal = ({ open, setOpen, id }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const handleOk = (e) => {
    setOpen(false);
  };
  
  const handleCancel = (e) => {
    setOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(4, "Belgilar 4 dan kam")
        .max(30, "contact.validation.name.max")
        .required("Ism Familiya kiritilmadi!"),
      phone: Yup.string()
        .min(13, "Belgilar 12 dan kam")
        .max(13, "Belgilar 13 dan ko'p")
        .required("Raqam kiritilmadi!"),
    }),
    onSubmit: async (values, helpers) => {
      const message = `#sotib_olish <b>💰Foydalanuvchi Tur Paket sotib olmoqchi</b>
      \n👮‍♂️ Ism Familiya: <u>${values.name}</u>\n☎️ Raqam: <code>${
        values.phone
      }</code>
      \n<b>ℹ️ Maxsulot haqida:</b>
      \n🗺 Yo'nalishlar: ${id.from_uz} - ${id.where_uz}\n🛫 Qayerdan: ${
        id.from_uz
      }\n🛬 Qayerga: ${id.where_uz}\n📅 Uchish sanasi: ${id.fly_date.slice(
        0,
        10
      )}\n💸 Narxi: ${formatMoney(id.price)}
      \nTur Paket saytga joylangan vaqt: ${id.updatedAt.slice(0, 10)}
      `;
      try {
        const { status } = await axios.get(
          `https://api.telegram.org/bot${telegram_bot_id}/sendMessage`,
          {
            params: {
              chat_id: chat_id,
              text: message,
              parse_mode: "html",
            },
          }
        );
        if (status == 200) {
          messageApi.open({
            type: "success",
            content: "Yuborildi. Siz bilan 24 soat ichida bog'lanamiz!",
            duration: 5,
          });
          setOpen(false);
        }
        helpers.resetForm();
      } catch (error) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    },
  });

  const classes =
    "py-3 px-3 text-black w-full border rounded-[10px] focus:ring-2 focus:ring-secondary bg-white outline-none transition-all duration-300 capitalize placeholder:opacity-80";
  return (
    <>
      {contextHolder}
      <Modal
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        centered
        title={[
          <TextHeading key={"one"}>Tur Paketni sotib olish</TextHeading>,
          <TextSubtitle
            key={"two"}
            className={"!text-black text-start mb-[20px]"}
          >
            Ma&apos;lumotlaringizni kiriting va biz siz bilan aloqaga chiqamiz
          </TextSubtitle>,
        ]}
        footer={""}
      >
        <form noValidate className="w-full flex flex-col gap-3 items-center">
          <div className="flex flex-col gap-4 w-full max-w-[700px]">
            <div className="w-full">
              <input
                type="tel"
                placeholder={"Ism Familiya"}
                className={`${classes}`}
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              <TextSubtitle className={"!text-red-600 text-start ml-2 mt-1"}>
                {!!formik.errors.name && formik.errors.name}
              </TextSubtitle>
            </div>
            <div className="w-full">
              <input
                type="phone"
                placeholder={"Telefon"}
                className={`${classes}`}
                name="phone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
              />
              <TextSubtitle className={"!text-red-600 text-start ml-2 mt-1"}>
                {!!formik.errors.phone && formik.errors.phone}
              </TextSubtitle>
            </div>
          </div>
          <div className="w-full flex flex-row items-center justify-end gap-3">
            <button
              onClick={handleCancel}
              type="submit"
              whileHover={{ scale: 1.1 }}
              className="text-center w-fit py-2 text-black px-6 uppercase rounded-md"
            >
              Bekor qilish
            </button>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.1 }}
              onClick={formik.handleSubmit}
              className="text-center w-fit py-2 text-white bg-secondary px-6 uppercase rounded-md"
            >
              Yuborish
            </motion.button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default SellModal;

import { IconWarning } from "@/icons";
import { TextSubtitle } from "@/theme/Text";
import { useTranslation } from "next-i18next";

const Error = () => {
  const { t } = useTranslation('common')
  return (
    <div className="w-full h-[200px] bg-secondary/[0.03] border rounded-[10px] flex items-center justify-center flex-col">
      <IconWarning childClass={"stroke-secondary"} />
      <TextSubtitle className={"!text-black"}>{t('ui.error.title')}</TextSubtitle>
      <TextSubtitle className={"!text-black"}>{t('ui.error.desc')}</TextSubtitle>
    </div>
  );
};

export default Error;

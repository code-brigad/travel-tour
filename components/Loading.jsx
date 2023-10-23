import { IconLoading } from "@/icons";
import { TextSubtitle } from "@/theme/Text";
import { useTranslation } from "next-i18next";

const Loading = () => {
  const { t } = useTranslation('common')
  return (
    <div className="w-full h-[200px] bg-main/[0.03] border rounded-[10px] flex items-center justify-center flex-col">
      <IconLoading />
      <TextSubtitle className={"!text-black"}>{t('ui.loading')}</TextSubtitle>
    </div>
  );
};

export default Loading;

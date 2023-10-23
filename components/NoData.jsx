import { IconFolder } from "@/icons";
import { TextSubtitle } from "@/theme/Text";
import { useTranslation } from "next-i18next";

const NoData = () => {
  const { t } = useTranslation('common')
  return (
    <div className="w-full h-[200px] bg-green-600/[0.03] border rounded-[10px] flex items-center justify-center flex-col">
      <IconFolder />
      <TextSubtitle className={"!text-black"}>{t('ui.nodata')}</TextSubtitle>
    </div>
  );
};

export default NoData;

'use client';

import { useTranslation } from 'react-i18next';

interface HighLightedButtonProps {
  text?: string;
  classes?: string;
}

const HighLightedButton: React.FC<HighLightedButtonProps> = ({
  text,
  classes,
}) => {
  const { t } = useTranslation();
  return (
    <button
      type="button"
      className={`rounded-3xl px-5 py-1 text-[2vw] font-[500] md:text-[1vw] ${classes}`}
    >
      {t(text || 'no text yet')}
    </button>
  );
};

export default HighLightedButton;

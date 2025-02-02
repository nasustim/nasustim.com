import { clsx } from "clsx";
import type { FC } from "react";
import type { IconType } from "react-icons";
import { AiFillFacebook, AiFillGithub } from "react-icons/ai";
import { FaKeybase } from "react-icons/fa";
import { MdArticle } from "react-icons/md";

interface Props {
  size: number;
  isButton?: boolean;
}

interface IconContainerProps extends Props {
  Icon: IconType;
}
const IconContainer: FC<IconContainerProps> = ({
  Icon,
  size,
  isButton = false,
}) => {
  return (
    <div
      className={clsx(
        "w-full h-full transition-colors duration-[350ms]",
        `text-[${size}px]`,
        isButton ? "hover:text-indigo" : null,
      )}
      style={{ fontSize: `${size}px` }}
      data-is-button={isButton ? 1 : 0}
    >
      <Icon />
    </div>
  );
};

export const GitHub: FC<Props> = (props) => (
  <IconContainer {...props} Icon={AiFillGithub} />
);
export const Facebook: FC<Props> = (props) => (
  <IconContainer {...props} Icon={AiFillFacebook} />
);
export const Keybase: FC<Props> = (props) => (
  <IconContainer {...props} Icon={FaKeybase} />
);
export const Blog: FC<Props> = (props) => (
  <IconContainer {...props} Icon={MdArticle} />
);

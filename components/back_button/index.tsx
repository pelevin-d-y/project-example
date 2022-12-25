import React from "react";
import ArrowLeft from "/public/svg/arrow_left.svg";
import Image from "next/image";
import classNames from "classnames";
import s from "./back_button.module.scss";

type ButtonProps = {
  className?: string;
  disabled?: boolean;
  onClick?: (event?: React.MouseEvent<HTMLElement>) => void;
  isLoading?: boolean;
} & React.ComponentProps<"button">;

export const BackButton: React.FC<ButtonProps> = ({
  onClick,
  className,
  ...props
}) => {
  return (
    <button
      className={classNames(s.back, className)}
      onClick={onClick}
      {...props}
    >
      <Image src={ArrowLeft} alt="arrow" />
      Back
    </button>
  );
};

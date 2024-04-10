import { Capacitor } from "@capacitor/core";
import { Button, CircularProgress } from "@mui/material";
import React, { useState } from "react";

const FormWrapper = ({
  children,
  btnTitle,
  handleClick,
  isLoading,
}: {
  children: React.ReactNode;
  btnTitle: string;
  handleClick?: () => void;
  isLoading?: boolean;
}) => {
  const [loadingRoute, setLoadingRoute] = useState(false);
  return (
    <div
      className={`${
        Capacitor.isNativePlatform()
          ? "min-h-[65vh] max-h-[65vh]"
          : "min-h-[70vh] max-h-[70vh]"
      } inline-flex flex-col p-5 gap-5 w-full justify-between overflow-y-auto`}
    >
      <div className="inline-flex flex-col gap-5">{children}</div>
      <Button
        type="submit"
        variant="contained"
        onClick={() => {
          if (handleClick) {
            setLoadingRoute(true);
            handleClick();
          }
        }}
        disabled={isLoading || loadingRoute}
      >
        {isLoading || loadingRoute ? (
          <CircularProgress
            color="secondary"
            className="!text-dark_white"
            size={25}
          />
        ) : (
          btnTitle
        )}
      </Button>
    </div>
  );
};

export default FormWrapper;

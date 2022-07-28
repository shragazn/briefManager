import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Snackbar } from "@mui/material";
import React, { useState } from "react";
import useCopy from "use-copy";
import {
  BriefNumberContainer,
  Copy,
} from "../../Main/Project/ProjectID/StyledComponents";

type Props = {
  brief: number | string;
};

export default function BriefNumber({ brief }: Props) {
  const [, copy] = useCopy(brief.toString());
  const [open, setOpen] = useState(false);
  const handleCopy = () => {
    copy();
    setOpen(true);
  };

  const handleCloseSnack = () => {
    setOpen(false);
  };
  return (
    <Copy onClick={handleCopy}>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        onClose={handleCloseSnack}
        autoHideDuration={2000}
        message="Brief copied"
        // Couldn't figure out how to do it otherwise
        ContentProps={{
          sx: {
            justifyContent: "center",
            ["@media (min-width: 600px)"]: { minWidth: "0" },
          },
        }}
      />
      <FontAwesomeIcon icon={faCopy} />
      <BriefNumberContainer>{brief}</BriefNumberContainer>
    </Copy>
  );
}

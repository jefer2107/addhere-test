import Link from "next/link";
import AddIcon from "@material-ui/icons/Add";
import React, { FC } from "react";

const AddButton: FC<{ href: string; title: string }> = ({ href, title }) => {
  title = title != null ? title : "Modificar";
  return (
    <Link href={href}>
      <a style={{ display: "flex" }}>
        <AddIcon /> {title}
      </a>
    </Link>
  );
};

export default AddButton;
